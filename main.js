const renderApp = () => {
    Header();
    Section();
    Div();
    Main();
    PerfumesList();
    SectionPhotos();
    SectionProducts();
    ulListeners();

};

const products = [
    {
    name: 'Ck One',
    brand: 'CALVIN KLEIN',
    price: 22.95,
    stars: 4.5,
    reviews: "(984)",
    seller: 'Druni',
    image: 'https://www.druni.es/media/catalog/product/4/6/463.jpg?quality=80&fit=bounds&height=700&width=700&canvas=700:700'
},

{
    name: 'Irresistible 80',
    brand: 'GIVENCHY',
    price: 39.95,
    stars: 4.5,
    reviews: "(52)",
    seller: 'Druni',
    image: 'https://www.druni.es/media/catalog/product/4/3/4367.jpg?quality=80&fit=bounds&height=700&width=700&canvas=700:700'
},

{
    name: 'La Vie Est Belle',
    brand: 'LANCOME',
    price: 24.95,
    stars: 5,
    reviews: "(449)",
    seller: 'Druni',
    image: 'https://www.druni.es/media/catalog/product/1/7/176.jpg?quality=80&fit=bounds&height=700&width=700&canvas=700:700'

},

{
    name: 'SI',
    brand: 'ARMANI',
    price: 37.95,
    stars: 3.5,
    reviews: "(124)",
    seller: 'Druni',
    image: 'https://www.druni.es/media/catalog/product/5/8/582.jpg?quality=80&fit=bounds&height=700&width=700&canvas=700:700'
},

{
    name: 'Santorini Sunrise',
    brand: 'ESCADA',
    price: 24.95,
    stars: 4.5,
    reviews: "(72)",
    seller: 'Druni',
    image: 'https://www.druni.es/media/catalog/product/7/2/7290.jpg?quality=80&fit=bounds&height=700&width=700&canvas=700:700'
},

{
    name: 'Olympea',
    brand: 'PACO RABANNE',
    price: 24.95,
    stars: 4.5,
    reviews: "(142)",
    seller: 'Druni',
    image: 'https://www.druni.es/media/catalog/product/7/6/763.jpg?quality=80&fit=bounds&height=700&width=700&canvas=700:700'
},

{
    name: 'Le Beau',
    brand: 'JEAN PAUL GAULTIER',
    price: 38.95,
    stars: 5,
    reviews: "(93)",
    seller: 'Druni',
    image: 'https://www.druni.es/media/catalog/product/3/8/3870.jpg?quality=80&fit=bounds&height=700&width=700&canvas=700:700'
},

{
    name: 'Eros Flame',
    brand: 'VERSACE',
    price: 54.95,
    stars: 4.5,
    reviews: "(34)",
    seller: 'Druni',
    image: 'https://www.druni.es/media/catalog/product/3/3/3352.jpg?quality=80&fit=bounds&height=700&width=700&canvas=700:700'
},

{
    name: 'Polo Blue',
    brand: 'RALPH LAUREN',
    price: 39.95,
    stars: 5,
    reviews: "(86)",
    seller: 'Druni',
    image: 'https://www.druni.es/media/catalog/product/5/7/572.jpg?quality=80&fit=bounds&height=700&width=700&canvas=700:700'
},

{
    name: 'Reserve Privee',
    brand: 'GIVENCHY',
    price: 38.95,
    stars: 5,
    reviews: "(102)",
    seller: 'Druni',
    image: 'https://www.druni.es/media/catalog/product/1/6/1617077.jpg?quality=80&fit=bounds&height=700&width=700&canvas=700:700'
},

{
    name: ' 212 Vip Black',
    brand: 'CAROLINA HERRERA',
    price: 43.95,
    stars: 3.5,
    reviews: "(70)",
    seller: 'Druni',
    image: 'https://www.druni.es/media/catalog/product/1/9/1921.jpg?quality=80&fit=bounds&height=300&width=300&canvas=300:300'
},

{
    name: 'L hommme',
    brand: 'YVES SAINT LAURENT',
    price: 45.95,
    stars: 5,
    reviews: "(34)",
    seller: 'Druni',
    image: 'https://www.druni.es/media/catalog/product/1/1/1118.jpg?quality=80&fit=bounds&height=300&width=300&canvas=300:300'
},

];

// Creamos el header, compuesto por : logo, menú y un enlace de registro.

const Header = () => {
    const headerTag = document.createElement("header");
    const titleHeader = document.createElement("h1");
    titleHeader.innerText = ("Essential");

    const navMenu = document.createElement("nav");
    const ulMenu = document.createElement("ul");
    ulMenu.innerHTML = `
    <li id="homeNav"><a href="#">Home</a></li>
    <li id="aboutNav"><a href="#">About</a></li>
    <li id="fragrancesNav"><a href="#">Fragrances</a></li>
    <li id="contactNav"><a href="#">Contact</a></li>
    `;


    const divNav = document.createElement("div");
    divNav.id = "div-signup";
    const ulNav = document.createElement("ul");
    ulNav.className ="ulnav";
    ulNav.innerHTML = `
    <li id="signup"><a href="#">Sign Up</a></li>
    <li id="carrocompra"><a href="#"><img width="32" height="32" src="https://img.icons8.com/windows/32/shopping-cart.png" alt="shopping-cart"/></a></li>
    `;

    divNav.appendChild(ulNav);
    document.body.appendChild(divNav);

    navMenu.appendChild(ulMenu);
    document.body.appendChild(navMenu);


    headerTag.appendChild(titleHeader);


    document.body.appendChild(headerTag);
};


const Section = () => {
    const sectionMain = document.createElement("section");

    sectionMain.id = "sectiontitle";
    sectionMain.innerHTML = `
    <div class="divsection">
    <h2>Essential for you,</h2>
    <p>“The beauty of fragrance is that it speaks to your heart, <br> … and hopefully someone else's.” – Elizabeth Taylor.</p>
    <button class="btnSection">Watch Perfumes</button>
    </div>
    `;


    document.body.appendChild(sectionMain);

};

const Div = () => {
    const divPhrase = document.createElement("div");

    divPhrase.id = "divphrase";
    divPhrase.innerHTML = `
    <h1 class="h1phrase">Essential Perfumes</h1>
    <p class="essentialphrase"> ...is not just a perfume; it's an expression of your inner elegance. Let the enchanting notes <br> weave a tale of sophistication around you, leaving everyone around you captivated by your aura.</p>
    `;

    document.body.appendChild(divPhrase);
};

const Main = () => {
    const mainCenter = document.createElement("main");

    mainCenter.id = "mainPhotos";
    mainCenter.innerHTML = `
    <div class="centralinfo">
        <span class="minititle">before anything</span>
        <h3>DID YOU KNOW...</h3>
        <p>if you subscribe to our site, you will automatically get a 20% off on your first purchase? Offer includes any product*</p>
        <button class="btn-blank-register">Register Now</button>

    </div>
    `;

    document.body.appendChild(mainCenter);

};

const PerfumesList = () => {
    const productsList = document.querySelector('#products-list');
    products.forEach(product => {
        const li = document.createElement("li");
        li.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <div class="div-product">
            <h2>${product.name}</h2>
            <span>${product.brand}</span>
            <h3>${product.price} €</h3>
            <div class="btn-product">
               <button>30 ML</button>
               <button>50 ML</button>
               <button>100 ML</button>
            <div>
          </div>
        `;
        productsList.appendChild(li);
      });

      document.body.appendChild(productsList);
};


const SectionPhotos = () => {
    const sectionPhotos = document.createElement("section");
    sectionPhotos.className = "sectionphotos";
    sectionPhotos.innerHTML = `
    <div class="womanphoto">
        <button id="womanbtn">Woman</button>
    </div>
    <div class="menphoto">
        <button id="menbtn">Men</button>
    </div>
    `;

    document.body.appendChild(sectionPhotos);

     
};

const SectionProducts = () => {
    const sectionList = document.createElement("section");

    sectionList.id = "list-products";

    document.body.appendChild(sectionList);

};

const ulListeners = () => {
    const section = document.querySelector("#list-products");

    const womanBtn = document.querySelector("#womanbtn");
    const menBtn = document.querySelector("#menbtn");

    womanBtn.addEventListener("click", () => {
        section.innerHTML = `
        <div class="woman-list-products">
        <div class="sellers-title">Best Sellers for her</div>
        <ul class="ul-woman-products">
            <li class="fst-woman-product">
                <img src="./assets/product1.2.jpg" alt="product">
                <a href="#">Miss Dior</a>
                <span>109,90 €</span>
            </li>
            <li class="snd-woman-product">
                <img src="./assets/product2.2.jpg" alt="product">
                <a href="#">Narciso Rodríguez</a>
                <span>109,90 €</span>
            </li>
            <li class="trd-woman-product">
                <img src="./assets/product3.2.jpg" alt="product">
                <a href="#">CHANNEL Coco Noir</a>
                <span>109,90 €</span>
            </li>
            <li class="fth-woman-product">
                <img src="https://rougeb2car.vtexassets.com/arquivos/ids/194736/ysl_dmi_hallmark_fragrance-week-22_digital-still-life_packshot-ingredients_black-opium-edp_square_3000x3000px_rgb.jpg?v=638071569066930000" alt="product">
                <a href="#">Black Opium</a>
                <span>109,90 €</span>
            </li>
        </ul>
    </div>
        `;
    });

    menBtn.addEventListener("click", () => {
        section.innerHTML = `
        <div class="men-list-products">
        <div class="sellers-title">Best Sellers for him</div>
        <ul>
            <li class="fst-men-product">
                <p>First</p>
                <span>85,90 €</span>
            </li>
            <li class="snd-men-product">
                <p>Second</p>
                <span>85,90 €</span>
            </li>
            <li class="trd-men-product">
                <p>Third</p>
                <span>85,90 €</span>
            </li>
            <li class="fth-men-product">
                <p>Fourth</p>
                <span>85,90 €</span>
            </li>
        </ul>
    </div>
        `;
    });
};

renderApp();