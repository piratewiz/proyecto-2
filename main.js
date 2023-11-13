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
    seller: 'Douglas',
    image: 'https://www.druni.es/media/catalog/product/4/3/4367.jpg?quality=80&fit=bounds&height=700&width=700&canvas=700:700'
},

{
    name: 'La Vie Est Belle',
    brand: 'LANCOME',
    price: 24.95,
    stars: 5,
    reviews: "(449)",
    seller: 'Primor',
    image: 'https://www.druni.es/media/catalog/product/1/7/176.jpg?quality=80&fit=bounds&height=700&width=700&canvas=700:700'

},

{
    name: 'SI',
    brand: 'ARMANI',
    price: 37.95,
    stars: 3.5,
    reviews: "(124)",
    seller: 'Douglas',
    image: 'https://www.druni.es/media/catalog/product/5/8/582.jpg?quality=80&fit=bounds&height=700&width=700&canvas=700:700'
},


{
    name: 'Olympea',
    brand: 'PACO RABANNE',
    price: 24.95,
    stars: 4.5,
    reviews: "(142)",
    seller: 'Sephora',
    image: 'https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/3/0/30F00346_1_ad1f.webp'
},

{
    name: 'Le Beau',
    brand: 'JEAN PAUL GAULTIER',
    price: 38.95,
    stars: 5,
    reviews: "(93)",
    seller: 'Primor',
    image: 'https://www.druni.es/media/catalog/product/3/8/3870.jpg?quality=80&fit=bounds&height=700&width=700&canvas=700:700'
},

{
    name: 'Eros Flame',
    brand: 'VERSACE',
    price: 54.95,
    stars: 4.5,
    reviews: "(34)",
    seller: 'Primor',
    image: 'https://www.druni.es/media/catalog/product/3/3/3352.jpg?quality=80&fit=bounds&height=700&width=700&canvas=700:700'
},

{
    name: 'Polo Blue',
    brand: 'RALPH LAUREN',
    price: 39.95,
    stars: 5,
    reviews: "(86)",
    seller: 'Sephora',
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
    seller: 'Primor',
    image: 'https://www.druni.es/media/catalog/product/1/9/1921.jpg?quality=80&fit=bounds&height=300&width=300&canvas=300:300'
},

{
    name: 'L hommme',
    brand: 'YVES SAINT LAURENT',
    price: 45.95,
    stars: 5,
    reviews: "(34)",
    seller: 'Primor',
    image: 'https://www.druni.es/media/catalog/product/1/1/1118.jpg?quality=80&fit=bounds&height=300&width=300&canvas=300:300'
},

];

let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');


let listProducts = [
    {
        id: 1,
        name: 'Name product white-black',
        price: 69.99,
        quantity: 0,
        image: 'img1.jpg',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },
    {
        id: 2,
        name: 'Name product white-black-grey',
        price: 49.99,
        quantiy: 30,
        image: 'img2.jpg',
        nature: {
            color: ['white', 'black', 'grey'],
            size: ['S', 'M', 'L'],
            type: 'Polo'
        }
    },
    {
        id: 3,
        name: 'Name product black',
        price: 25.99,
        quantiy: 30,
        image: 'img3.jpg',
        nature: {
            color: ['black'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },
    {
        id: 4,
        name: 'Name product blue-black',
        price: 25.99,
        quantiy: 30,
        image: 'img4.jpg',
        nature: {
            color: ['black', 'blue'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },
    {
        id: 5,
        name: 'Name product brown',
        price: 60.99,
        quantiy: 30,
        image: 'img5.jpg',
        nature: {
            color: ['brown'],
            size: ['S', 'M', 'L'],
            type: 'Polo'
        }
    },
    {
        id: 6,
        name: 'Name product white-black',
        price: 39.99,
        quantiy: 30,
        image: 'img6.jpg',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'Shirt'
        }
    },

];


let productFilter = listProducts;
    showProduct(productFilter);
    
    filter.addEventListener('submit', function(event){
        event.preventDefault();
        let valueFilter = event.target.elements;
        productFilter = listProducts.filter(item => {
            //  category
            if(valueFilter.category.value != ''){
                if(item.nature.type != valueFilter.category.value){
                    return false;
                }
            }
            //  color
            if(valueFilter.color.value != ''){
                if(!item.nature.color.includes(valueFilter.color.value)){
                    return false;
                }
            }
            //  name
            if(valueFilter.name.value != ''){
                if(!item.name.includes(valueFilter.name.value)){
                    return false;
                }
            }
            //  min price
            if(valueFilter.minPrice.value != ''){
                if(item.price < valueFilter.minPrice.value){
                    return false;
                }
            }
            //   max price
            if(valueFilter.maxPrice.value != ''){
                if(item.price > valueFilter.maxPrice.value){
                    return false;
                }
            }
    
    
            return true;
        })
        showProduct(productFilter);
    })

    
    function showProduct(productFilter){
        count.innerText = productFilter.length;
        list.innerHTML = '';
        productFilter.forEach(item => {
            let newItem = document.createElement('div');
            newItem.classList.add('item');
    
            // crear imagen
            let newImage = new Image();
            newImage.src = item.image;
            newItem.appendChild(newImage);
            // crear nombre del producto
            let newTitle = document.createElement('div');
            newTitle.classList.add('title');
            newTitle.innerText = item.name;
            newItem.appendChild(newTitle);
            // crear el precio
            let newPrice = document.createElement('div');
            newPrice.classList.add('price');
            newPrice.innerText = item.price.toLocaleString() + ' €';
            newItem.appendChild(newPrice);
    
            list.appendChild(newItem);
        });
    };