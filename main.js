const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});


let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');


let listProducts = [
    {
        id: 1,
        seller: 'nike',
        name: 'Nike Air white-black',
        price: 110.99,
        quantity: 0,
        image: './assets/fgffgfg.jpg',
        nature: {
            color: ['white', 'black'],
            size: ['40', '42', '44'],
            type: 'Sport'
        }
    },
    {
        id: 2,
        seller: 'nike',
        name: 'Nike Air white-black-grey',
        price: 49.99,
        quantity: 30,
        image: './assets/grey.jpg',
        nature: {
            color: ['white', 'black', 'grey'],
            size: ['42', '44'],
            type: 'Lifestyle'
        }
    },
    {
        id: 3,
        seller: 'nike',
        name: 'Nike Air black',
        price: 220,
        quantity: 30,
        image: './assets/black.jpg',
        nature: {
            color: ['black'],
            size: ['40', '44',],
            type: 'Lifestyle'
        }
    },
    {
        id: 4,
        seller: 'nike',
        name: 'Nike Air brown-yellow-black',
        price: 160,
        quantity: 30,
        image: './assets/black2.jpg',
        nature: {
            color: ['black', 'yellow'],
            size: ['40', '44',],
            type: 'Sport'
        }
    },
    {
        id: 5,
        seller: 'nike',
        name: 'Nike Air brown',
        price: 120.99,
        quantity: 30,
        image: './assets/brown.jpg',
        nature: {
            color: ['brown'],
            size: ['40', '42', '44'],
            type: 'Sport'
        }
    },
    {
        id: 6,
        seller: 'nike',
        name: 'Nike Air white-black',
        price: 119.99,
        quantity: 30,
        image: './assets/black.jpg',
        nature: {
            color: ['white', 'black'],
            size: ['40', '42', '44'],
            type: 'Lifestyle'
        }
    },
    {
        id: 7,
        seller: 'adidas',
        name: 'Adidas Pink',
        price: 49.99,
        quantity: 30,
        image: './assets/pink2.jpg',
        seller: 'Adidas',
        nature: {
            color: ['pink'],
            size: ['40', '42', '44'],
            type: 'Sport'
        }
    },
    {
        id: 8,
        seller: 'adidas',
        name: 'Adidas Red',
        price: 69.99,
        quantity: 30,
        image: './assets/red.jpg',
        seller: 'Adidas',
        nature: {
            color: ['red'],
            size: ['40', '42', '44'],
            type: 'Red'
        }
    },
    {
        id: 9,
        seller: 'nike',
        name: 'Nike Air white-pink',
        price: 109.99,
        quantity: 30,
        image: './assets/pink.jpg',
        nature: {
            color: ['pink'],
            size: ['40', '42', '44'],
            type: 'Lifestyle'
        }
    },
    {
        id: 10,
        seller: 'nike',
        name: 'Nike Air Yellow',
        price: 109.99,
        quantity: 30,
        image: './assets/yellow.jpg',
        nature: {
            color: ['yellow'],
            size: ['40', '42', '44'],
            type: 'Lifestyle'
        }
    },
    {
        id: 11,
        seller: 'adidas',
        name: 'Adidas White',
        price: 90.99,
        quantity: 30,
        image: './assets/white3.jpg',
        nature: {
            color: ['white'],
            size: ['40', '42', '44'],
            type: 'Sport'
        }
    },
    {
        id: 12,
        seller: 'adidas',
        name: 'Adidas Pure Black',
        price: 159.99,
        quantity: 30,
        image: './assets/black3.jpg',
        nature: {
            color: ['white', 'black'],
            size: ['40', '42', '44'],
            type: 'Sport'
        }
    },
    {
        id: 13,
        seller: 'vans',
        name: 'Vans Black',
        price: 159.99,
        quantity: 30,
        image: './assets/vans2.jpg',
        nature: {
            color: ['white', 'black'],
            size: ['40', '42', '44'],
            type: 'Lifestyle'
        }
    },
    {
        id: 13,
        seller: 'newbalance',
        name: 'New Balance Grey',
        price: 159.99,
        quantity: 30,
        image: './assets/nb.jpg',
        nature: {
            color: ['white', 'grey'],
            size: ['40', '42', '44'],
            type: 'Sport'
        }
    },
    {
        id: 12,
        seller: 'vans',
        name: 'Vans Pure Black',
        price: 159.99,
        quantity: 30,
        image: './assets/vans1.jpg',
        nature: {
            color: ['yellow', 'black'],
            size: ['40', '42', '44'],
            type: 'Lifestyle'
        }
    }

];


let productFilter = listProducts;
    showProduct(productFilter);
    
    filter.addEventListener('submit', function(event){
        event.preventDefault();
        let valueFilter = event.target.elements;
        productFilter = listProducts.filter(item => {
            //  seller
            if(valueFilter.seller.value != ''){
                if(!item.seller.includes(valueFilter.seller.value)){
                    return false;
                }
            }
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

    

    function resetForm(){
        document.getElementById("form-id").reset();
      };


