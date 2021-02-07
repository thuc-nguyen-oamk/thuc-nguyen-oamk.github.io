const LC_CART_INFOS = 'hthshop_cart_infos';  //an array of { id: string, quantity: Number }
const LC_CURRENT_PRODUCT_ID = 'hthshop_current_product_id';
const PRODUCTS = [
    {
        id: 0,
        name: "Asus Strix G531GT HN553T i5 9300H/8GB/512G SSD",
        price: 949,
        off: 0.5,
        stock: 2,
        add_image: [],
        specs: {cpu: "Intel Core i5-9300H", ram: "8 GB DDR4 2666 MHz", screen: '15.6 ", 1920 x 1080 Pixel, IPS, 144 Hz, 250 nits, Anti-glare LED-backlit', graphic: "NVIDIA GeForce GTX 1650 4 GB", harddrive: "512 GB SSD", os: "Windows 10", weight: "2.42 kg", dimensions: "360 x 275 x 25.8 (mm)", origin: "China", year: 2020},
		html_detail: `<div class="t-products-in-details">
            <h1>PRODUCT IN DETAILS</h1>
            <h3>Possessing a minimalist design but no less personality thanks to the lower edge LED strip, <i>Asus Strix G531GT HN553T</i> gives you an engaging gaming experience with a powerful configuration and an extremely smooth 144Hz screen.</h3>
            <img src="img/sp01/01.jpg">
            <h2>The power of the 9th generation Intel processor and GTX 1650 discrete card</h2>
            <p>Asus Strix G531GT-HN553T is equipped with the powerful Intel Core i5 9300H processor . This is a chip with 4 cores 8 threads, maximum speed 4.10GHz and 8MB cache. This processor, combined with NVIDIA GeForce GTX 1650 discrete graphics, uses the acclaimed Turing architecture for the ability to "battle" well all eSports titles and some AAA games. Asus Strix G531GT HN553T has 8GB of DDR4-2666 MHz RAM and SSD hard drive up to 512 GB capacity , allowing you to comfortably install and run games at fast speed.</p>
            <img src="img/sp01/02.jpg">
            <h2>Smoother than ever with the 144Hz display</h2>
            <p>With a 15.6-inch Full HD display with an outstanding 144Hz refresh rate, Asus Strix G531GT-HN553T makes the difference in your gaming battles. A high refresh rate unleashes the maximum amount of CPU power, unleashing the potential to deliver super-smooth graphics at extremely high FPS. What's more, you will enjoy epic game visuals on the crisp, quality, ultra-thin screen that captures every movement.</p>
            <img src="img/sp01/03.jpg">
            <h2>Increased heat dissipation efficiency</h2>
            <p>With meticulous design for cooling, Asus Strix G531GT HN553T is always well ventilated by a self-cleaning heatsink module that pushes dust out, extending the life of components. Dual N-blade fans help increase air circulation, while the ultra-thin fins expand the surface area for heat dissipation.</p>
            <img src="img/sp01/04.jpg">
            <p>There will be a smart software called ROG Armory Crate that manages, typical of the Asus ROG laptop series,  and switches operating modes to give you the best performance and noise.</p>
            <h2>Compelling sound, enhancing gaming experience</h2>
            <p>Immersive sound from the side-firing speakers of Asus Strix G531GT HN553T immerses you in the battlefield. Smart amplifier technology adjusts sound output in real time so that the sound is not only vivid but also durable, avoiding damage and rupture after long periods of use. Strong bass, high dynamic range will create great effects in every sound in the game.</p>
            <img src="img/sp01/05.jpg">
            <h2>Gamer-style LED lighting system</h2>
            <p>The Asus Strix G keyboard stands out in the dark with an optional color strip and stylish transparent WASD keypad. Aura Sync lighting can even connect to games to create effects that are more realistic and fun than ever. In addition, the laptop also has a new LED strip on three sides of the machine. Turn off the lights and try to enjoy your own gaming space.</p>
            <h2>Durable keyboard, optimized for gaming</h2>
            <p>Built for gamers, the Asus Strix G531GT HN553T keyboard features function keys and reasonable spacing for intuitive and precise operation. With a durability of over 20 million clicks, Strix G maintains accuracy under intense gaming conditions.</p>
            <img src="img/sp01/05.jpg">
            <h2>The Wi-Fi network is faster and more stable</h2>
            <p>The Asus Strix G531GT HN553T features ROG RangeBoost technology, ensuring the most stable Wi-Fi signal possible. Combined with the latest Intel® 802.11ac (2x2) Gigabit Wi-Fi with maximum wireless bandwidth up to 1.7Gbps, you can connect and play high-speed games virtually anywhere.</p>
            <img src="img/sp01/06.jpg">
            <h2>Minimalistic design but still shine</h2>
            <p>Asus Strix G531GT HN553T has a completely new design language, with the purpose of form serving functions, meaning that all are for gaming purposes. You will have 3D air circulation in the design, creating the most modern cooling system.</p>
            <p>The delicate cut lines on the back ensure unlimited airflow. Of course, the device is also not lacking in aesthetics with modern beauty with cleverly carved lines, impressive LED lights and ultra-thin screen borders.</p>
            <img src="img/sp01/06.jpg">
        </div>`,
		image: "img/sp01.png"
    },
    {
        id: 1,
        name: "Acer Swift 5 SF514 53T 720R/Core i7 8565U/NX.H7HSV.002",
        price: 919,
        off: 0,
        stock: 6,
        add_image: [],
        specs: {cpu: "Intel Core i7-8550U", ram: "8 GB DDR4 2400 MHz", screen: '14.0 ", 1920 x 1080 Pixels, Updating, Updating, Updating, LED-backlit', graphic: "Intel UHD Graphics 620", harddrive: "256 GB SSD", os: "Windows 10", weight: "0.97 kg", dimensions: "350 x 265 x 24.7 (mm)", origin: "China", year: 2019},
        html_detail: ``,
		image: "img/sp02.png"
    },
    {
        id: 2,
        name: "MSI GF63 9SCSRi5 512GB SSD/Nvidia GTX1650Ti",
        price: 939,
        off: 0,
        stock: 2,
        add_image: [],
        specs: {cpu: "Intel Core i5-9300H", ram: "8GB DDR4 2666MHz", screen: '15.6", LED, 1920 x 1080 Pixels,IPS, 144 Hz, 300 nits, IPS LCD LED Backlit', graphic: "NVIDIA GeForce GTX 1650Ti 4 GB", harddrive: "512 GB SSD", os: "Windows 10", weight: "1.86 kg", dimensions: "359 x 254 x 21.7", origin: "China", year: 2020},
        html_detail: ``,
		image: "img/sp03.png"
    },
    {
        id: 3,
        name: 'MacBook Pro 16" 2019 Touch Bar 2.3GHz Core i9 1TB',
        price: 2899,
        off: 0,
        stock: 3,
        add_image: [],
        specs: {cpu: "Intel Core i9-9th-gen", ram: "16 GB DDR4 2666 MHz", screen: '16.0 ", 3072 x 1920 Pixel, IPS, Updating, Updating, IPS LCD LED Backlit', graphic: "AMD Radeon Pro 5500M 4 GB", harddrive: "1 TB SSD", os: "Mac OS", weight: "2", dimensions: "357.9 x 24.59 x 16.2", origin: "China", year: 2019},
        html_detail: ``,
		image: "img/sp04.png"
    },
    {
        id: 4,
        name: 'MacBook Pro 13" 2019 Touch Bar 2.4GHz Core i5',
        price: 2099,
        off: 0,
        stock: 6,
        add_image: [],
        specs: {cpu: "Intel Core i5-8th-gen", ram: "8 GB LPDDR3 2133 MHz", screen: '13.3 ", 2560 x 1600 Pixel, IPS, Updating, Updating, IPS LCD LED Backlit', graphic: "Intel Iris Plus Graphics 655", harddrive: "512 GB SSD", os: "Mac OS", weight: "1.37", dimensions: "304.1 x 212.4 x 14.9", origin: "China", year: 2019},
        html_detail: ``,
		image: "img/sp05.png"
    },
    {
        id: 5,
        name: "ASUS Expertbook B9450FA BM0616R i7 1TB SSD",
        price: 1999,
        off: 0.25,
        stock: 2,
        add_image: [],
        specs: {cpu: "Intel Core i7 10510U", ram: "16 GB LPDDR3 2133 MHz", screen: '14.0 ", 1920 x 1080 Pixels, IPS FHD', graphic: "Intel UHD Graphics", harddrive: "1TB SSD", os: "Windows 10 Pro", weight: "0.996", dimensions: "343 x 240 x 16.1", origin: "China", year: 2020},
        html_detail: ``,
		image: "img/sp06.png"
    },
    {
        id: 6,
        name: "Dell XPS 15 9500 i7 10750H/16GB/512GB/GTX 1650 Ti 4GB",
        price: 2499,
        off: 0,
        stock: 9,
        add_image: [],
        specs: {cpu: "Intel Core i7-10750H", ram: "16 GB DDR4 2933 MHz", screen: '15.6 ", 3840 x 2400 Pixel, WVA, 60 Hz, 500 nits, Anti-glare LED-backlit', graphic: "NVIDIA GeForce GTX 1650Ti 4 GB", harddrive: "512 GB SSD", os: "Windows 10", weight: "2.05", dimensions: "343 x 230 x 18", origin: "China", year: 2020},
        html_detail: ``,
		image: "img/sp07.png"
    },
    {
        id: 7,
        name: "Dell Inspiron N7490 i5 512GB/NVIDIA MX250",
        price: 1021,
        off: 0,
        stock: 1,
        add_image: [],
        specs: {cpu: " Intel Core i5-10210U", ram: "8 GB LPDDR3 2133 MHz", screen: '14.0 ", 1920 x 1080 Pixel, IPS, 60 Hz, 300 nits, Truelife LED-Backlit', graphic: "NVIDIA GeForce MX250 2 GB", harddrive: "512 GB SSD", os: "Windows 10", weight: "1.32", dimensions: "319 x 208.5 x 17.9", origin: "China", year: 2020},
        html_detail: ``,
		image: "img/sp08.png"
    },
    {
        id: 8,
        name: "Dell Vostro 5481/Core i5-8265U/V4I5227W",
        price: 769,
        off: 0,
        stock: 3,
        add_image: [],
        specs: {cpu: "Intel Core i5-8265U", ram: "4 GB DDR4 2400 MHz", screen: '14.0 ", 1920 x 1080 Pixel, TN, 60 Hz, Updating, LED-backlit', graphic: "Intel UHD Graphics 620", harddrive: "Updating", os: "Windows 10", weight: "1.7", dimensions: "343 x 240 x 16.1", origin: "China", year: 2019},
        html_detail: ``,
		image: "img/sp09.png"
    },
    {
        id: 9,
        name: "Acer Nitro 5 AN515 54 779S i7 9750H/8GB/512GB",
        price: 1399,
        off: 0,
        stock: 4,
        add_image: [],
        specs: {cpu: "Intel Core i7-9750H", ram: "8 GB DDR4 2666 MHz", screen: '15.6 ", 1920 x 1080 Pixels, Updating, Updating, Updating, LED-backlit', graphic: "Intel UHD Graphics 630", harddrive: "512 GB SSD", os: "Windows 10", weight: "2.231", dimensions: "357.9 x 24.59 x 16.2", origin: "China", year: 2018},
        html_detail: ``,
		image: "img/sp10.png"
    },
    {
        id: 10,
        name: 'MacBook Air 13" 2020 1.1GHz Core i5 512GB',
        price: 1459,
        off: 0,
        stock: 5,
        add_image: [],
        specs: {cpu: "Intel Core i5-10th-gen", ram: "8 GB LPDDR4 3733 MHz", screen: '13.3 ", 2560 x 1600 Pixel, IPS, Updating, Updating, IPS LCD LED Backlit', graphic: "Intel Iris Plus Graphics", harddrive: "512 GB SSD", os: "Mac OS", weight: "1.29", dimensions: "304.1 x 212.4 x 4.1 ~ 16.1", origin: "China", year: 2020},
        html_detail: ``,
		image: "img/sp11.png"
    },
    {
        id: 11,
        name: 'MacBook Pro 13" 2020 Touch Bar 2.0GHz Core i5 512GB',
        price: 1899,
        off: 0,
        stock: 2,
        add_image: [],
        specs: {cpu: "Intel Core i5-10th-gen", ram: "16 GB, LPDDR4X, 3733 MHz", screen: '13.3 ", 2560 x 1600 Pixel, IPS, IPS LCD LED Backlit', graphic: "Intel Iris Plus Graphics", harddrive: "512 GB SSD", os: "Mac OS", weight: "1.4", dimensions: "304.1 x 212.4 x 15.6", origin: "China", year: 2020},
        html_detail: ``,
		image: "img/sp12.png"
    }
];


function writeLC(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}


function readLC(key){
    return JSON.parse(localStorage.getItem(key));
}


function addCart(_id){
    // Increase the quantity of the product (with provided _id) in cart by 1
    
    let cart_infos = readLC(LC_CART_INFOS);

    if (!cart_infos || cart_infos.length === 0 || isNaN(cart_infos[0].id) || isNaN(cart_infos[0].quantity)) {
        cart_infos = [];
    }

    let curr_info = cart_infos.filter( info => info.id === _id )[0];
    if (curr_info){
        const curr_index = cart_infos.indexOf(curr_info);
        const curr_product = PRODUCTS.filter( product => product.id === _id )[0];
        if (curr_info.quantity + 1 > curr_product.stock) {  // Do not allow buy more than stock limit
            const noti_element = document.createElement('div');
            noti_element.innerHTML = `<h3 style="color: red;position: absolute;z-index: 999;top: -74px;width: 500px;background-color: lightgreen;padding: 5px 5px;left: -152px;" class="notification-auto-hide">Sorry, we have only ${curr_product.stock} items in our stock.</h3>`;
            document.querySelector('button.t-addcart').append(noti_element);
            setTimeout( () => document.querySelector('.notification-auto-hide').remove(), 2000);
            return
        }
        curr_info.quantity++;

        cart_infos[curr_index] = curr_info;
    } else {
        new_info = {};
        new_info.id = _id;
        new_info.quantity = 1;

        cart_infos.push(new_info);
    }

    // Show notification
    const noti_element = document.createElement('div');
    noti_element.innerHTML = '<h3 style="color: red;position: absolute;z-index: 999;top: -74px;width: 500px;background-color: lightgreen;padding: 5px 5px;left: -152px;" class="notification-auto-hide">Added to your shopping cart.</h3>';
    document.querySelector('button.t-addcart').append(noti_element);
    setTimeout( () => document.querySelector('.notification-auto-hide').remove(), 2000);

    writeLC(LC_CART_INFOS, cart_infos);
    updateCartIcon();
}


function buyNow(){
    addCart( readLC(LC_CURRENT_PRODUCT_ID) );
    window.location.href = "cart.html";
}


function updateCartIcon(){
    //Create/Update the number floating in front of cart symbol and the LC
    const cart_infos = readLC(LC_CART_INFOS);

    // Remove old number (if any) before append the new one
    [...document.querySelectorAll('.cart_number')].map( elem => elem.remove() );

    if (!cart_infos || cart_infos.length === 0 || isNaN(cart_infos[0].id) || isNaN(cart_infos[0].quantity) ){  // LC_CART_INFOS not found
        return
    }
    let total_item = 0;

    cart_infos.map( info => total_item += info.quantity );

    

    const cart_quantity_element = document.createElement('div');
    cart_quantity_element.classList.add('cart_number');
    cart_quantity_element.innerText = total_item;

    document.querySelector('.header_navbar_icon_cart').append(cart_quantity_element);
}


function showProductListing(){
    //Show 12 products in the listing view and set onlick event handler on each products too
    let row_element = document.createElement('div');    
    row_element.classList.add('container_rightbottom_row');  // --> Hieu Nguyen created this classname [this f auto handle dup]

    const all_products_element = document.querySelector('.container_rightbottom');

    for (var i = 0; i < PRODUCTS.length; i++) {
        const product_card_element = document.createElement('div');
        product_card_element.classList.add('product-card');
        product_card_element.setAttribute('data-product-id', PRODUCTS[i].id);
        let innerHTMLString = 
                `<div class="product-card-img">
                    <a href="product-details.html"><img src="${ PRODUCTS[i].image }"></a>
                </div>
                <div class="product-card-name">
                    <a href="product-details.html">${ PRODUCTS[i].name }</a>
                </div>
                <div class="product-card-prices">
                    <div class="card-price">€${ PRODUCTS[i].price }</div>`

        if ( PRODUCTS[i].off > 0 ) {
            innerHTMLString += `<div class="card-price0">€${ PRODUCTS[i].price / (1-PRODUCTS[i].off) }</div>`
        }
        
        innerHTMLString +=            
                `</div>
                <div class="product-card-stock">
                    In Stock: ${ PRODUCTS[i].stock }
                </div>`;

        product_card_element.innerHTML = innerHTMLString;

        row_element.append(product_card_element);

        if ( (i + 1) % 4 === 0 || i === PRODUCTS.length - 1) { //4th 8th 12th... product or last product
            all_products_element.append(row_element)
            row_element = document.createElement('div');
            row_element.classList.add('container_rightbottom_row');
        }
    }

    [...document.querySelectorAll('.product-card')].map( card => card.onclick = () => writeLC(LC_CURRENT_PRODUCT_ID, parseInt(card.getAttribute('data-product-id')))); //must use parseInt here
}


function showProductDetails(){
    // Show the details for the current product id in LC
    const current_product_id = readLC(LC_CURRENT_PRODUCT_ID);
    if ( current_product_id === null || current_product_id === undefined || isNaN(current_product_id) ) {
        return
    }

    const container_element = document.createElement('div')
    container_element.classList.add('t-container');
    let innerHTMLString = 
        `<div class="t-bigimage-infobox">
            <div class="t-images">
                <div class="t-bigimage">
                    <img src="${ PRODUCTS[current_product_id].image }">
                </div>
            </div>
            <div class="t-infobox">
                <div class="t-name">
                    ${ PRODUCTS[current_product_id].name }
                </div>
                <div class="t-prices">
                    <div class="t-price">€${ PRODUCTS[current_product_id].price }</div>`;

    if (PRODUCTS[current_product_id].off > 0){
        innerHTMLString += 
            `       <div class="t-price0">€${ PRODUCTS[current_product_id].price / (1 - PRODUCTS[current_product_id].off) }</div>
                    <div class="t-discount">${ PRODUCTS[current_product_id].off*100 }% off</div>`;
    }
                    

    innerHTMLString +=
                `</div>
                <div class="t-shortinfo">
                    <div><b>FREE Shipping.</b></div>
                    <div>Price included VAT.</div>
                    <div class="t-green"><b>Free gift packing.</b></div>
                    <div><i>Only ${ PRODUCTS[current_product_id].stock } items in stock.</i></div>
                </div>
                <div class="t-btns">
                    <button class="t-addcart">Add to Cart</button>
                    <button class="t-buynow">Buy Now</button>
                </div>
            </div>
        </div>
        <div class="t-tech-spec">
            <h1>TECHNICAL SPECIFICATIONS</h1>
            <table>
                <tbody><tr>
                    <td>CPU</td><td>${ PRODUCTS[current_product_id].specs.cpu }</td>
                </tr>
                <tr>
                    <td>RAM</td><td>${ PRODUCTS[current_product_id].specs.ram }</td>
                </tr>
                <tr>
                    <td>Screen</td><td>${ PRODUCTS[current_product_id].specs.screen }</td>
                </tr>
                <tr>
                    <td>Graphic</td><td>${ PRODUCTS[current_product_id].specs.graphic }</td>
                </tr>
                <tr>
                    <td>Hard Drive</td><td>${ PRODUCTS[current_product_id].specs.harddrive }</td>
                </tr>
                <tr>
                    <td>Operating System</td><td>${ PRODUCTS[current_product_id].specs.os }</td>
                </tr>
                <tr>
                    <td>Weight</td><td>${ PRODUCTS[current_product_id].specs.weight }</td>
                </tr>
                <tr>
                    <td>Dimensions</td><td>${ PRODUCTS[current_product_id].specs.dimensions }</td>
                </tr>
                <tr>
                    <td>Origin</td><td>${ PRODUCTS[current_product_id].specs.origin }</td>
                </tr>
                <tr>
                    <td>Year of launch</td><td>${ PRODUCTS[current_product_id].specs.year }</td>
                </tr>
            </tbody></table>
        </div>
        <div class="t-products-in-details">
            ${ PRODUCTS[current_product_id].html_detail }
        </div>`;

    container_element.innerHTML = innerHTMLString
    
    const parentNode = document.querySelector('.web');
    const refNode = document.querySelector('.footer');
    parentNode.insertBefore(container_element, refNode);

    document.querySelector('button.t-addcart').onclick = () => addCart( readLC(LC_CURRENT_PRODUCT_ID) );

    document.querySelector('button.t-buynow').onclick = buyNow;
}


function showItemsInCart(){
    const cart_infos = readLC(LC_CART_INFOS);

    // cart_infos not found = empty shopping cart
    if (!cart_infos || cart_infos.length === 0 || isNaN(cart_infos[0].id) || isNaN(cart_infos[0].quantity)) {
        document.querySelector('.t-wrapper').remove();
        const empty_container_element = document.createElement('div');
        empty_container_element.classList.add('t-wrapper');
        empty_container_element.innerHTML = '<h2>Your cart is empty.</h2>'
        document.querySelector('.t-container').append(empty_container_element);
        return
    }

    // for items (left column)
    cart_infos.map( (info, info_index) => {
        const corresponding_product = PRODUCTS.find( product => product.id === info.id );
        const item_element = document.createElement('div');
        item_element.classList.add('t-item');
        item_element.setAttribute('data-product-id', `${ corresponding_product.id }`)

        item_element.innerHTML = 
            `<div class="t-col1">
                <img src="${ corresponding_product.image }">
            </div>
            <div class="t-col2">
                <div class="t-name""><a href="product-details.html"><b>${ corresponding_product.name }</b></a></div>
                <div class="t-gray"><a class="delete-product">Delete</a></div>
            </div>
            <div class="t-col3">
                <div class="t-gray">Price</div>
                <div class="t-red">&euro;${ corresponding_product.price.toLocaleString() }</div>
                <div class="t-gray t-linethrough"></div>
                <div class="t-gray t-smalltext"></div>
            </div>
            <div class="t-col4">
                <div class="t-gray">Quantity</div>
                <div class="t-minusplus">
                    <i class="fas fa-minus"></i>
                    <span>${ info.quantity }</span>
                    <i class="fas fa-plus"></i>
                </div>
            </div>
            <div class="t-col5">
                <div class="t-gray">Subtotal</div>
                <div>&euro;${ (corresponding_product.price * info.quantity).toLocaleString() }</div>
            </div>`;

        document.querySelector('.t-items').append(item_element);
    } )

    // set onclick for above items to be able to go back to details page AND delete a product from cart
    // also set onclick for - and +
    // .t-item --> parent of product name, quantity, subtotals... and "Delete"
    Array.from(document.querySelectorAll('.t-item')).map ( t_item => {
        t_item.querySelector('.t-name').onclick = () => writeLC(LC_CURRENT_PRODUCT_ID, parseInt(t_item.getAttribute('data-product-id')));
        

        t_item.querySelector('.delete-product').onclick = () => {
            corresponding_id = parseInt(t_item.getAttribute('data-product-id'));
            corresponding_index = cart_infos.findIndex( info => info.id === corresponding_id );

            cart_infos.splice(corresponding_index, 1); // remove
            writeLC(LC_CART_INFOS, cart_infos);  // save
            [...document.querySelector('.t-items').children].map( item => item.remove() );  // remove old ones from DOM
            document.querySelector('.t-totals').remove();  // remove old grand total too
            showItemsInCart(); // re-create items in cart
            updateCartIcon();
        }

        t_item.querySelector('.fa-minus').onclick = () => {
            corresponding_id = parseInt(t_item.getAttribute('data-product-id'));
            corresponding_index = cart_infos.findIndex( info => info.id === corresponding_id );
            cart_infos[corresponding_index].quantity = Math.max(cart_infos[corresponding_index].quantity - 1, 1);  // never goes below 1
            writeLC(LC_CART_INFOS, cart_infos);  // save
            [...document.querySelector('.t-items').children].map( item => item.remove() );  // remove old ones from DOM
            document.querySelector('.t-totals').remove();  // remove old grand total too
            showItemsInCart(); // re-create items in cart
            updateCartIcon();
        }

        t_item.querySelector('.fa-plus').onclick = () => {
            corresponding_id = parseInt(t_item.getAttribute('data-product-id'));
            corresponding_index = cart_infos.findIndex( info => info.id === corresponding_id );
            cart_infos[corresponding_index].quantity = Math.min(cart_infos[corresponding_index].quantity + 1, PRODUCTS.find( product => product.id === corresponding_id ).stock);  // never goes above stock number
            writeLC(LC_CART_INFOS, cart_infos);  // save
            [...document.querySelector('.t-items').children].map( item => item.remove() );  // remove old ones from DOM
            document.querySelector('.t-totals').remove();  // remove old grand total too
            showItemsInCart(); // re-create items in cart
            updateCartIcon();
            if (cart_infos[corresponding_index].quantity === PRODUCTS.find( product => product.id === corresponding_id ).stock) {
                const noti_element = document.createElement('div');
                noti_element.innerHTML = `<h3 style="color: red;position: fixed;z-index: 999;top: 100px; right: 20px;background-color: lightgreen;padding: 5px 5px;" class="notification-auto-hide">Reached maximum items of this product in our stock.</h3>`;
                document.body.append(noti_element);
                setTimeout( () => document.querySelector('.notification-auto-hide').remove(), 2000);
            }
        }
    } );

    // for grand total (right column)
    let total_item = 0;
    cart_infos.map( info => total_item += info.quantity );

    let grand_total = 0;
    PRODUCTS.filter( product => {
        for (i=0; i<cart_infos.length; i++) {
            if (product.id === cart_infos[i].id){
                grand_total += product.price * cart_infos[i].quantity;
                return true
            }
        } 
    } );

    const totals_element = document.createElement('div');
    totals_element.classList.add('t-totals');
    totals_element.innerHTML = 
        `<div class="t-totals">
            <div class="t-total">Total ${ total_item } items</div>
            <div class="t-grandprice">€${ grand_total.toLocaleString() }</div>
        </div>`;

    parentNode = document.querySelector('.t-checkout-col');
    refNode = document.querySelector('.t-checkout-col > .t-coupon-apply');
    parentNode.insertBefore(totals_element, refNode);
}


updateCartIcon();  //Do it right after document's ready

