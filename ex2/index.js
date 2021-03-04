const WATER_COLOR = '#2232AF';
const COLUMN_WIDTH = 48;
const ROW_HEIGHT = 48;
const CANVAS_WIDTH = 14 * COLUMN_WIDTH;  // 14 columns
const CANVAS_HEIGHT = 15 * ROW_HEIGHT;  // 13 rows + time & lives row
const SPEED_X = COLUMN_WIDTH;
const SPEED_Y = ROW_HEIGHT;
const SAFE_HIDE_X_RIGHT = CANVAS_WIDTH;
const SAFE_HIDE_X_LEFT = - 4 * COLUMN_WIDTH;  // beware of obj's width
const PLAYER_STARTING_POSITION_X = 7 * COLUMN_WIDTH;
const PLAYER_STARTING_POSITION_Y = 13 * ROW_HEIGHT;
// const PLAYER_STARTING_POSITION_Y = 7 * ROW_HEIGHT;  //testing turtle

const froggerSheet = new Image();
froggerSheet.onload = () => window.requestAnimationFrame(updateScreen);
froggerSheet.src = './froggerSheetGV2.png';

const bg = new Image();
bg.onload = () => window.requestAnimationFrame(updateScreen);
bg.src = 'goalslotbg.png';

const canvas = document.getElementById(("target"));
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const cc = canvas.getContext("2d");  // context

class GameObject {
    constructor(options){
        this.type = options.type;
        this.x = options.x;
        this.y = options.y;
        this.width = options.width;
        this.height = options.height;
        this.color = options.color;
        this.speedX = options.speedX;
        this.speedY = options.speedY;
        this.isMoving = options.isMoving;
        this.imageCoords = options.imageCoords;
        this.tag = options.tag;
    }

    update(){
        if (this.isMoving) {
            this.x += this.speedX;
            this.y += this.speedY;
        }
    }

    draw(){
        const offsetX = (COLUMN_WIDTH - this.width) / 2;  // shift horizontally
        const offsetY = (ROW_HEIGHT - this.height) / 2;  // shift vertically
        
        if (this.imageCoords && this.imageCoords.swidth) {
            cc.drawImage(froggerSheet,
                this.imageCoords.sx, this.imageCoords.sy, this.imageCoords.swidth, this.imageCoords.sheight,
                this.x + offsetX, this.y + offsetY, this.width, this.height);
        } else {
            cc.beginPath();
            cc.rect(this.x + offsetX, this.y + offsetY, this.width, this.height);
            cc.fillStyle = this.color;
            cc.fill();
        }
    }

    isColliding(player){
        return ((this.x + this.width) > player.x) &&
             (this.x < (player.x + player.width)) &&
             ((this.y + this.height) > player.y) &&
             (this.y < (player.y + player.height))        
    }
}

class SafeZone extends GameObject {
    draw(){
        for (var i = 0; i < this.width/COLUMN_WIDTH; i++) {
            cc.drawImage(froggerSheet,
                    this.imageCoords.sx, this.imageCoords.sy, this.imageCoords.swidth, this.imageCoords.sheight,
                    this.x + i * COLUMN_WIDTH, this.y, COLUMN_WIDTH, ROW_HEIGHT);
        }
    }
}

class Player extends GameObject {
    constructor(playerOptions){
        super(playerOptions);
        this.life = playerOptions.life;
        this.jumpSpeedX = options.speedX;  // to be able to move on turtles and logs
        this.jumpSpeedY = options.speedY;
        this.seizedGoalSlotCounter = 0;
        this.frameRate = 6;
        this.frameCounter = 0;
        this.frameTimeCounter = 0;
        this.movementDirection = 'up';
        this.isAnimating = false;
        this.animationFrameStartCoordX = 0;
        this.score = 0;
        this.lowestY = this.y;  // kep track of scoring, lower = nearer to top
        this.time = 40000;
        this.animationFrames = 2;
    }

    update(deltaTime){
        if (this.isMoving && !this.isDying) {
            this.x += this.speedX;
            this.y += this.speedY;
        }

        if (this.x < 0) {
            this.x = 0;
        }

        if (this.x + this.width > CANVAS_WIDTH) {
            this.x = CANVAS_WIDTH - this.width;
        }

        if (this.y + this.height > CANVAS_HEIGHT - ROW_HEIGHT) {  // the row before last
            this.y = CANVAS_HEIGHT - ROW_HEIGHT - this.height;
        }

        if (this.isDying) {
            this.die()
            return
            this.animationFrames = 7;
            this.animationFrameStartCoordX = 3;
            this.isMoving = false;
        } else {
            console.log('nothing');
        }

        this.frameTimeCounter += deltaTime;
        const timePerFrame = 1000 / this.frameRate;
        if (this.frameTimeCounter > timePerFrame) {
            this.frameTimeCounter = 0;
            this.frameCounter++;
        }
        if (this.frameCounter >= this.animationFrames) {
            this.frameCounter = 0;
            this.isAnimating = false;
            if (this.isDying) {
                this.die();
            }
        }
    }

    draw(){
        // const offsetX = (COLUMN_WIDTH - this.width) / 2;  // shift vertically
        // const offsetY = (ROW_HEIGHT - this.height) / 2;  // shift hori
        if (this.isDying) {
            cc.drawImage(froggerSheet,
                this.animationFrameStartCoordX + this.frameCounter * 48 + 6*this.frameCounter, // sx
                240, // sy
                48, // swidth
                48, // sheight
                this.x, // coord in canvas X
                this.y, // coord in canvas Y
                this.width, // width on canvas
                this.height); // height on canvas
            
        }

        if (!this.isAnimating) {
            cc.drawImage(froggerSheet,
                this.animationFrameStartCoordX, // sx
                3, // sy
                48, // swidth
                48, // sheight
                this.x, // coord in canvas X
                this.y, // coord in canvas Y
                this.width, // width on canvas
                this.height); // height on canvas

            return
        }
        
        switch(this.movementDirection) {
            case "up":
                this.animationFrameStartCoordX = 3;
                break;
            case "down":
                this.animationFrameStartCoordX = 219;
                break;
            case "left":
                this.animationFrameStartCoordX = 111;
                break;
            case "right":
                this.animationFrameStartCoordX = 327;
                break;
        }

        if (this.imageCoords && this.imageCoords.swidth) {
            cc.drawImage(froggerSheet,
                this.animationFrameStartCoordX + this.frameCounter * 48 + 6*this.frameCounter, // sx
                3, // sy
                48, // swidth
                48, // sheight
                this.x, // coord in canvas X
                this.y, // coord in canvas Y
                this.width, // width on canvas
                this.height); // height on canvas
        } else {
            cc.beginPath();
            cc.rect(this.x + offsetX, this.y + offsetY, this.width, this.height);
            cc.fillStyle = this.color;
            cc.fill();
        }
    }

    die(){

        this.life--;

        this.isMoving = false;
        this.isDying = false;
        this.movementDirection = 'up';
        this.speedX = this.jumpSpeedX;
        this.speedY = this.jumpSpeedY;
        this.x = PLAYER_STARTING_POSITION_X;
        this.y = PLAYER_STARTING_POSITION_Y;
        this.lowestY = this.y;
        this.time = 40000;
        this.frameCounter = 0;
        this.frameTimeCounter = 0;
        this.animationFrameStartCoordX = 3;
        this.isAnimating = false;
        this.animationFrames = 2;
        
        if (this.life < 0) {
            console.log('game over');
            gameOver = true;
        } else {
            this.respawn();
        }
    }

    respawn(){
        this.isMoving = false;
        this.isDying = false;
        this.movementDirection = 'up';
        this.speedX = this.jumpSpeedX;
        this.speedY = this.jumpSpeedY;
        this.x = PLAYER_STARTING_POSITION_X;
        this.y = PLAYER_STARTING_POSITION_Y;
        this.lowestY = this.y;
        this.time = 40000;
        this.frameCounter = 0;
        this.frameTimeCounter = 0;
        this.animationFrameStartCoordX = 3;
        this.isAnimating = false;
        this.animationFrames = 2;
    }

    moveUp(event){
        this.y = Math.max(this.y - this.jumpSpeedY, 0);  
        this.movementDirection = "up";
        this.isAnimating = true;
        if (this.y < this.lowestY) {  // move up, y decreases
            this.score += 10;
            this.lowestY = this.y;
        }
        event.preventDefault();
    }
    moveDown(event){
        this.y = Math.min(this.y + this.jumpSpeedY, CANVAS_HEIGHT - this.jumpSpeedY);
        this.movementDirection = "down";
        this.isAnimating = true;
        event.preventDefault();
    }
    moveLeft(event){
        this.x = Math.max(this.x - this.jumpSpeedX, 0);
        this.movementDirection = "left";
        this.isAnimating = true;
        event.preventDefault();
    }
    moveRight(event){
        this.x = Math.min(this.x + this.jumpSpeedX, CANVAS_WIDTH - this.jumpSpeedX);
        this.movementDirection = "right";
        this.isAnimating = true;
        event.preventDefault();
    }

    move(event){
        if (this.isDying) {
            return
        }

        if (event.key === 'ArrowUp') {
            this.moveUp(event);
        } else if (event.key === 'ArrowDown') {
            this.moveDown(event);
        } else if (event.key === 'ArrowLeft') {
            this.moveLeft(event);
        } else if (event.key === 'ArrowRight') {
            this.moveRight(event);
        }
    }
}

class Car extends GameObject {
    constructor(options){
        super(options);
        this.speedY = 0;
        this.isMoving = true;
    }

    update(){
        super.update();
        if (this.speedX < 0 && this.x + this.width < 0) {  // wait until the end of car are gone
            this.respawn();
        } else if (this.speedX > 0 && this.x > CANVAS_WIDTH) { // run left to right
            this.respawn();
        }

        this.handleCollision(player);  //global var
    }

    handleCollision(player){
        if (this.isColliding(player)){
            // console.log(this.type, this.tag, 'is colliding with Player.');
            player.isDying = true;
        };
    }

    respawn(){
        if ( ['car1', 'car3', 'car5'].includes(this.type) ) {
            const distanceBetweenCar = CANVAS_WIDTH / 3;  // now: 3 cars
            const lastCarOfSameLane = 
                gameObjects.filter( object => object.type === this.type)
                           .reduce( (accumulator, object) => {
                                return accumulator.x > object.x ? accumulator : object;
                            })
            this.x = Math.max(lastCarOfSameLane.x + distanceBetweenCar, SAFE_HIDE_X_RIGHT);
        } else { // car 2,4: run from the left
            const distanceBetweenCar = CANVAS_WIDTH / 3;  // now: 3 cars
            const lastCarOfSameLane = gameObjects
                .filter( object => object.type === this.type)
                .reduce( (accumulator, object) => {
                    return accumulator.x < object.x ? accumulator : object;
                })
            this.x = Math.min(lastCarOfSameLane.x - distanceBetweenCar, SAFE_HIDE_X_LEFT);
        }

    }
}

class Log extends GameObject {
    constructor(options){
        super(options);
        this.speedY = 0;
        this.isMoving = true;
    }

    draw(){
        const offsetY = (ROW_HEIGHT - this.height) / 2;  // shift vertically
        const imageTailSX = this.imageCoords.sx;  //draw left to right => draw the tail first
        const imageSY = this.imageCoords.sy;  //same for tail, body(s), head
        const imageBodySX = imageTailSX + 56;  //because of the froggersheet
        const imageHeadSX = imageTailSX + 2*56;

        if (this.imageCoords && this.imageCoords.swidth) {
            // draw the log's tail
            cc.drawImage(froggerSheet,
                imageTailSX, imageSY, this.imageCoords.swidth, this.imageCoords.sheight,
                this.x, this.y + offsetY, COLUMN_WIDTH, ROW_HEIGHT);
            // draw the log's body(s)
            let i;
            for (i = 1; i < this.width / COLUMN_WIDTH - 1; i++) {
                cc.drawImage(froggerSheet,
                imageBodySX, imageSY, this.imageCoords.swidth, this.imageCoords.sheight,
                this.x + i * (COLUMN_WIDTH - i), this.y + offsetY, COLUMN_WIDTH, ROW_HEIGHT);
            }
            // draw the log's head
            const imageHeadX = this.x + i * (COLUMN_WIDTH - i); //i after above loop
            cc.drawImage(froggerSheet,
                imageHeadSX, imageSY, this.imageCoords.swidth, this.imageCoords.sheight,
                imageHeadX, this.y + offsetY, COLUMN_WIDTH, ROW_HEIGHT);
        } else {
            cc.beginPath();
            cc.rect(this.x, this.y + offsetY, this.width, this.height);
            cc.fillStyle = this.color;
            cc.fill();
        }
    }

    update(){                
        super.update();
                
        if (this.speedX < 0 && this.x + this.width < 0) {  // wait until the end of car are gone
            this.respawn();
        } else if (this.speedX > 0 && this.x > CANVAS_WIDTH) { // run left to right
            this.respawn();
        }

        this.handleCollision(player);  //player: global var
    }

    handleCollision(player){
        if (this.isCollidingLeft(player)){
            console.log(this.type, this.tag, 'is colliding with 60% left side of Player.');
            player.isMoving = true;
            player.speedX = this.speedX;
            player.speedY = this.speedY;
            player.isDying = false;

            if (player.x + player.width > this.x + this.width) {
                //move player to inner area
                console.log('move player to inner area');
                player.x = this.x + this.width - player.width;
            }
            return
        }

        if (this.isCollidingRight(player)){
            console.log(this.type, this.tag, 'is colliding with 60% right side of Player.');
            player.isMoving = true;
            player.speedX = this.speedX;
            player.speedY = this.speedY;
            player.isDying = false;

            if (player.x < this.x) {
                //move player to inner area
                player.x = this.x;
            }
            return
        }
    }

    isCollidingLeft(player){
        return this.isColliding(player) && player.x + 0.6*player.width < this.x + this.width && player.x > this.x
    }

    isCollidingRight(player){
        return this.isColliding(player) && player.x + 0.4*player.width > this.x && player.x + player.width < this.x + this.width
    }

    respawn() {
        // const distanceBetweenLog = this.width + 50;
        // const lastLogOfSameLane = gameObjects
        //     .filter( object => object.type === this.type)
        //     .reduce( (accumulator, object) => {
        //         return accumulator.x < object.x ? accumulator : object;
        //     })
        // this.x = Math.min(lastLogOfSameLane.x - distanceBetweenLog, SAFE_HIDE_X_LEFT);
        this.x = SAFE_HIDE_X_LEFT;
    }
}

class Turtle extends GameObject {
    constructor(options){
        super(options);
        this.speedY = 0;
        this.isMoving = true;
        this.state = 'ridable';
        this.ridingInterval = options.ridingInterval;  //milisec
        this.submergingInterval = 1000;  //player has 1 sec to jump out
        this.frameRate = 3;
        this.frameCounter = 0;
        this.frameTimeCounter = 0;
        this.animationFrameStartCoordXs = [3, 57, 111, 165, 219, 376];
        this.isSubmersible = false;
        this.animationFrames = this.isSubmersible ? 6 : 3;
        this.isDeadly = false;
    }

    update(deltaTime){
        super.update();
                
        if (this.speedX < 0 && this.x + this.width < 0) {  // wait until the end of turtle are gone
            this.respawn();
        } else if (this.speedX > 0 && this.x > CANVAS_WIDTH) { // run left to right
            this.respawn();
        }

        this.frameTimeCounter += deltaTime;
        const timePerFrame = 1000 / this.frameRate;
        if (this.frameTimeCounter > timePerFrame) {
            this.frameTimeCounter = 0;
            this.frameCounter++;
        }
        if (this.frameCounter >= this.animationFrames) {
            this.frameCounter = 0;
            if (this.isSubmersible) {
                this.animationFrameStartCoordXs.reverse();
            }
        }

        this.handleCollision(player);  //player: global var
    }

    draw(){
        for (var i = 0; i < this.width / COLUMN_WIDTH; i++) {
            cc.drawImage(froggerSheet,
                this.animationFrameStartCoordXs[this.frameCounter], // sx
                456, // sy
                48, // swidth
                48, // sheight
                this.x + i * COLUMN_WIDTH, // coord in canvas X
                this.y, // coord in canvas Y
                COLUMN_WIDTH, // width on canvas
                ROW_HEIGHT); // height on canvas
        }

        if (this.animationFrameStartCoordXs[this.frameCounter] === 376) {
            this.isDeadly = true;
        } else {
            this.isDeadly = false;
        }
    }

    handleCollision(player){
        if ( this.isDeadly && this.isColliding(player) ) {
            player.isDying = true;
            return
        }

        if (this.isCollidingLeft(player)){
            console.log(this.type, this.tag, 'is colliding with 60% left side of Player.');
            player.isMoving = true;
            player.speedX = this.speedX;
            player.speedY = this.speedY;
            player.isDying = false;

            if (player.x + player.width > this.x + this.width) {
                //move player to inner area
                player.x = this.x + this.width - player.width;
            }
            return
        }

        if (this.isCollidingRight(player)){
            console.log(this.type, this.tag, 'is colliding with 60% right side of Player.');
            player.isMoving = true;
            player.speedX = this.speedX;
            player.speedY = this.speedY;
            player.isDying = false;

            if (player.x < this.x) {
                //move player to inner area
                player.x = this.x;
            }
            return
        }
    }

    isCollidingLeft(player){
        return this.isColliding(player) && player.x + 0.6*player.width < this.x + this.width && player.x > this.x
    }

    isCollidingRight(player){
        return this.isColliding(player) && player.x + 0.4*player.width > this.x && player.x + player.width < this.x + this.width
    }

    respawn() { 
        this.x = SAFE_HIDE_X_RIGHT;
    }
}

class GoalSlotBG extends GameObject {
    draw(){
        cc.drawImage(bg, 0, 0, this.width, 1*this.height);
    }
}

class GoalSlot extends GameObject {
    constructor(options){
        super(options);
    }

    update(){
        super.update();
        this.handleCollision(player);
    }

    draw(){
        if (this.imageCoords && this.imageCoords.swidth) {
            cc.drawImage(froggerSheet,
                this.imageCoords.sx, this.imageCoords.sy, this.imageCoords.swidth, this.imageCoords.sheight,
                this.x + 6, this.y + 6, 50, 50);
        } else {
            cc.beginPath();
            cc.rect(this.x, this.y, this.width, this.height);
            cc.fillStyle = this.color;
            cc.fill();
        }
    }

    handleCollision(player){ // player inside slot
        if ( player.x > this.x - 10  //make it easier
            && player.x + player.width < this.x + this.width + 10
            && player.y + player.height < this.y + this.height) {

            console.log('player is inside the goal slot', this.type, this.tag);
            if (!this.isDeadly) {
                //draw a big frog
                this.imageCoords = {sx: 135, sy: 588, swidth: 48, sheight: 48};
                // increase score
                player.seizedGoalSlotCounter++;
                player.score += parseInt(player.time / 100); // e.g. 10s left = 10000ms = 100 score pt

                if (player.seizedGoalSlotCounter === 5) {
                    //clear big frog images so player can seize the goal slots again to get more points
                    gameObjects.filter( obj => obj.type === 'goalslot' )
                               .map( obj => {
                                    obj.imageCoords = undefined;  //remove big frog image
                                    obj.isDeadly = false;
                               } );

                    // increase speed to make the game challenger
                    for (let obj of gameObjects){
                        if ( 'car1car2car3car4car5logturtle'.includes(obj.type) ) {
                            obj.speedX *= 2;
                        }
                    }
                }
                player.respawn();
                //change to deadly mode
                this.isDeadly = true;
            } else {
                player.isDying = true;
            }
            
        }
    }
}

class Water extends GameObject{
    update(){
        super.update();
        if (this.isColliding(player)) {
            // console.log(this.type, 'is colliding with player');
            player.isDying = true;
        }
    }
}

class LifeInfo extends GameObject {
    draw(){
        for (var i = 0; i < player.life; i++) {
            cc.drawImage(froggerSheet,
                    3, 3, 48, 48,
                    this.x + i * COLUMN_WIDTH/2, this.y, COLUMN_WIDTH/2, ROW_HEIGHT/2);
        }
    }
}

class TimeInfo extends GameObject {
    constructor(options){
        super(options);
        this.frameTimeCounter = 0;
        this.deltaWidth = 500 * this.width / 40000; //40000ms -> this.width, so 500ms -> ? px
        this.xBackup = this.x;
        this.widthBackup = this.x;
    }

    update(deltaTime){
        player.time -= deltaTime;
        this.frameTimeCounter += deltaTime;
        if (this.frameTimeCounter > 500) {
            this.x += this.deltaWidth;
            this.width -= this.deltaWidth;
            this.frameTimeCounter -= 500;
            if (this.width <= 0) {
                console.log('Out of time');
                player.isDying = true;
                this.respawn();
            }
        }
    }

    draw(){
        cc.beginPath();
        cc.fillStyle = '#24BD00';
        cc.fillRect(this.x, this.y, this.width, ROW_HEIGHT/2 - 4);
        cc.font = "30px Courier";
        cc.fillStyle = 'yellow';
        cc.fillText(' TIME', this.x + this.width, this.y + ROW_HEIGHT/2 - 6);
    }

    respawn(){
        this.x = this.xBackup;
        this.width = this.widthBackup;
        this.frameTimeCounter = 0;
        this.deltaWidth = 500 * this.width / 40000; //40000ms -> this.width, so 500ms -> ? px
    }
}

class ScoreInfo extends GameObject {
    draw(){
        cc.font = "20px Courier";
        cc.fillStyle = 'white';
        cc.fillText(`YOUR SCORE: ${player.score}`, 0, CANVAS_HEIGHT - 4);
    }
}

function clearCanvas() {
    cc.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // first half => water color
    cc.fillStyle = WATER_COLOR;
    cc.fillRect(0, 0, CANVAS_WIDTH, 0.5 * CANVAS_HEIGHT);
    // last half => black color
    cc.fillStyle = 'black';
    cc.fillRect(0, 0.5 * CANVAS_HEIGHT, CANVAS_WIDTH, 0.5 * CANVAS_HEIGHT);

}


let gameObjects = [];

let options = {}

//safezone 1
options = {
    type: 'safezone',
    x: 0,
    y: 13 * ROW_HEIGHT,  // last row, player starting pos
    width: CANVAS_WIDTH,
    height: ROW_HEIGHT,
    color: 'blue',
    // imageCoords: {sx: `${i%2===0?0:8}`, sy: 128, swidth: 8, sheight: 16}
    imageCoords: {sx: 406, sy: 589, swidth: 451-406+1, sheight: 634-589+1}
}
const safeZone1 = new SafeZone(options);
gameObjects.push(safeZone1);


//safezone 2
options.y = 7 * ROW_HEIGHT;
const safeZone2 = new SafeZone(options);
gameObjects.push(safeZone2);

//water
options = {
    type: 'water',
    x: 0,
    y: 0 * ROW_HEIGHT,  
    width: CANVAS_WIDTH,
    height: 7 * ROW_HEIGHT,
    color: '#2232AF',  //water color
}
const water = new Water(options);
gameObjects.push(water);

// cars
for (let i = 0; i < 2; i++) {
    let distanceBetweenCar = CANVAS_WIDTH / 3;
    options = {
        type: 'car1',  // car in lane 1
        x: 0 + i * distanceBetweenCar,  //already in canvas, not in safe hide
        y: 12 * ROW_HEIGHT,  
        width: COLUMN_WIDTH,
        height: COLUMN_WIDTH,
        color: 'yellow',  
        speedX: - 0.35,
        isMoving: true,
        tag: i,
        imageCoords: {sx: 57, sy: 348, swidth: 48, sheight: 48}
    }
    const car1 = new Car(options);
    gameObjects.push(car1);

    // lane 3 cars
    options.type = 'car3';
    options.y = 10 * ROW_HEIGHT;
    options.color = 'purple';
    options.speedX = - 0.25;
    options.imageCoords = {sx: 3, sy: 348, swidth: 48, sheight: 48};
    const car3 = new Car(options);
    gameObjects.push(car3);

    // lane 5 cars
    distanceBetweenCar = CANVAS_WIDTH / 2;
    options.x = 0 + i * distanceBetweenCar;  //already in canvas, not in safe hide
    options.type = 'car5';
    options.y = 8 * ROW_HEIGHT;
    options.color = '#C3C3DA';
    options.speedX = - 0.5;
    options.width = 2 * COLUMN_WIDTH;
    options.imageCoords = {sx: 219, sy: 348, swidth: 96, sheight: 48};
    const car5 = new Car(options);
    gameObjects.push(car5);

    // lane 2, run from the left
    distanceBetweenCar = CANVAS_WIDTH / 3;
    options.x = CANVAS_WIDTH - i * distanceBetweenCar;  //already in canvas, not in safe hide
    options.type = 'car2';
    options.y = 11 * ROW_HEIGHT;
    options.color = 'red';
    options.speedX = 0.4;
    options.width = COLUMN_WIDTH;
    options.imageCoords = {sx: 165, sy: 348, swidth: 48, sheight: 48};
    const car2 = new Car(options);
    gameObjects.push(car2);

    // lane 4, run from the left
    options.type = 'car4';
    options.y = 9 * ROW_HEIGHT;
    options.color = 'orange';
    options.speedX = 0.25;
    options.width = COLUMN_WIDTH;
    options.imageCoords = {sx: 111, sy: 348, swidth: 48, sheight: 48};
    const car4 = new Car(options);
    gameObjects.push(car4);

}

//turtle set 1 (width=3)
let distanceBetweenTurtle = 200;
for (var i = 0; i < 4; i++) {
    options = {
        type: 'turtle',  // car in lane 1
        x: 0 + i * distanceBetweenTurtle,  //already in canvas, not in safe hide
        y: 6 * ROW_HEIGHT,  
        width: 3 * COLUMN_WIDTH,
        height: COLUMN_WIDTH,
        color: '#D60000',
        speedX: - 0.15,
        isMoving: true,
        ridingInterval: 4000 + i * 7507,  //7507 is a prime number
        tag: i,
        imageCoords: {sx: 3, sy: 456, swidth: 48, sheight: 48},
    }
    if (i === 3) options.isSubmersible = true;
    const turtle = new Turtle (options);
    gameObjects.push(turtle);
}

//turtle set 2 (width=2)
distanceBetweenTurtle = 200;
for (var i = 0; i < 4; i++) {
    options = {
        type: 'turtle',  // car in lane 1
        x: 0 + i * distanceBetweenTurtle,  //already in canvas, not in safe hide
        y: 3 * ROW_HEIGHT,  
        width: 2 * COLUMN_WIDTH,
        height: COLUMN_WIDTH,
        color: '#D60000',
        speedX: - 0.5,
        isMoving: true,
        ridingInterval: 4000 + i * 7507,  //7507 is a prime number
        tag: i,
        imageCoords: {sx: 3, sy: 456, swidth: 48, sheight: 48},
    }
    if (i === 3) options.isSubmersible = true;
    const turtle = new Turtle (options);
    gameObjects.push(turtle);
}

//log set 1 (width=3)
let distanceBetweenLog = CANVAS_WIDTH / 3;
for (var i = 0; i < 3; i++) {
    options = {
        type: 'log',  // car in lane 1
        x: 0.2 * CANVAS_WIDTH + i * distanceBetweenLog,  //already in canvas, not in safe hide
        y: 5 * ROW_HEIGHT,  
        width: 3 * COLUMN_WIDTH,
        height: COLUMN_WIDTH,
        color: '#D60000',
        speedX: 0.1,
        isMoving: true,
        tag: i,
        imageCoords: {sx: 3, sy: 402, swidth: 48, sheight: 48}
    }
    const log = new Log (options);
    gameObjects.push(log);
}

//log set 2 (width=5)
distanceBetweenLog = CANVAS_WIDTH / 1.5;
for (var i = 0; i < 2; i++) {
    options = {
        type: 'log',  // car in lane 1
        x: 0 * CANVAS_WIDTH + i * distanceBetweenLog,  //already in canvas, not in safe hide
        y: 4 * ROW_HEIGHT,  
        width: 5 * COLUMN_WIDTH,
        height: COLUMN_WIDTH,
        color: '#D60000',
        speedX: 0.5,
        isMoving: true,
        tag: i,
        imageCoords: {sx: 3, sy: 402, swidth: 48, sheight: 48}
    }
    const log = new Log (options);
    gameObjects.push(log);
}

//log set 3 (width=4)
distanceBetweenLog = 50 + 4 * COLUMN_WIDTH;
for (var i = 0; i < 3; i++) {
    options = {
        type: 'log',  // car in lane 1
        x: 0 * CANVAS_WIDTH + i * distanceBetweenLog,  //already in canvas, not in safe hide
        y: 2 * ROW_HEIGHT,  
        width: 4 * COLUMN_WIDTH,
        height: COLUMN_WIDTH,
        color: '#D60000',
        speedX: .5,
        isMoving: true,
        tag: i,
        imageCoords: {sx: 3, sy: 402, swidth: 48, sheight: 48}
    }
    const log = new Log (options);
    gameObjects.push(log);
}

//goal slots background (first 2 rows)
options = {
    type: 'goalSlotBG',
    x: 0,
    y: 0,  
    width: CANVAS_WIDTH,
    height: 2*ROW_HEIGHT,
    color: 'blue',
}
let goalSlotBG = new GoalSlotBG(options);
gameObjects.push(goalSlotBG);

// goal SLOT itself :v
options = {
    type: 'goalslot',
    x: 30,
    y: 30, 
    width: 60,
    height: 70,
    color: 'rgba(0, 0,0,0,0)',
    speedX: 0,
    speedY: 0,
    tag: 0
}
let goalSlot = new GoalSlot(options);
gameObjects.push(goalSlot)

options.x = 167.5;
options.tag = 1;
goalSlot = new GoalSlot(options);
gameObjects.push(goalSlot);

options.x = 297.5;
options.tag = 2;
goalSlot = new GoalSlot(options);
gameObjects.push(goalSlot);

options.x = 443;
options.tag = 3;
goalSlot = new GoalSlot(options);
gameObjects.push(goalSlot);

options.x = 581.5;
options.tag = 4;
goalSlot = new GoalSlot(options);
gameObjects.push(goalSlot);

//life remaining info
options = {
    type: 'lifeinfo',
    x: 0,
    y: CANVAS_HEIGHT - ROW_HEIGHT,
}
const lifeInfo = new LifeInfo(options);
gameObjects.push(lifeInfo);

//time info
options = {
    type: 'timeinfo',
    x: 0.4*CANVAS_WIDTH,
    y: CANVAS_HEIGHT - ROW_HEIGHT/2,
    width: 300
}
const timeInfo = new TimeInfo(options);
gameObjects.push(timeInfo);

//score info
options = {}
const scoreInfo = new ScoreInfo(options);
gameObjects.push(scoreInfo);

// player: last draw = top layer
options = {
    type: 'player',
    x: PLAYER_STARTING_POSITION_X,
    // y: 12 * ROW_HEIGHT,  // last row, player starting pos
    y: PLAYER_STARTING_POSITION_Y, //testing turtle things
    width: COLUMN_WIDTH,
    height: ROW_HEIGHT,
    color: 'green',  //water color
    speedX: SPEED_X,
    speedY: SPEED_Y,
    imageCoords: {sx: 3, sy:3, swidth: 48, sheight: 48},
    life: 2,  
}
const player = new Player(options);
gameObjects.push(player);

let gameOver = false;
let lastTimeStamp = 0;

function handleGameOver() {
    cc.fillStyle = 'gray';
    cc.fillRect(100, 100, 500, 500);

    cc.fillStyle = 'gold';
    cc.font = "60px Courier";
    cc.fillText('GAME OVER', 200, 200);

    cc.fillStyle = 'white';
    cc.font = "40px Arial";
    cc.fillText('do you want to', 216, 307);
    cc.fillText('play again?', 257, 376);

    cc.fillStyle = 'gold';
    cc.font = "40px Courier";
    cc.fillText('Yes', 216, 476);
    cc.fillText('!No', 366, 476);
    cc.beginPath();

    cc.rect(196, 441, 120, 50);
    cc.strokeStyle = 'gold';
    cc.stroke();

    cc.rect(346, 441, 120, 50);
    cc.strokeStyle = 'gold';
    cc.stroke();

    cc.fillStyle = 'gold';
    cc.font = "40px Courier";
    cc.fillText('YOUR SCORE: ' + player.score, 166, 541);

    canvas.style.cursor = 'pointer';

    canvas.onclick = (event) => {
        const mouseX = event.clientX - canvas.getBoundingClientRect().left;
        const mouseY = event.clientY - canvas.getBoundingClientRect().top;

        if ( (196 < mouseX && mouseX < 196+120 && 441 < mouseY && mouseY < 441+50) 
            || (346 < mouseX && mouseX < 346+120 && 441 < mouseY && mouseY < 441+50) ) {  // !No = Yes :v
            console.log('Thank you for playing again :v');
            window.location.reload();
        }
    }
    
}

function updateScreen(timeStamp) {
    let deltaTime = timeStamp - lastTimeStamp;
    lastTimeStamp = timeStamp;

    clearCanvas();

    for (object of gameObjects){
        object.update(deltaTime);
        object.draw();
    }
    
    if (!gameOver) {
        window.requestAnimationFrame(updateScreen);
    } else {
        handleGameOver();
    }
}

window.requestAnimationFrame(updateScreen);

window.onkeydown = event => player.move(event);
