let menuBar = document.getElementById('menu-bar');
let menuClose = document.getElementById('menuClose');
const menuBtn = document.getElementById('menuBtn');

let lis = document.querySelector('nav > ul');

let numb = 0;

menuBtn.addEventListener('click', ()=>{
    numb++;
    menuBar.classList.toggle('active');
    menuBtn.classList.toggle('active');

    lis.classList.toggle('show');

    if(numb === 1){
        menuBtn.innerText = 'close'
    } else if(numb === 2) {
        menuBtn.innerText = 'drag_handle'
        numb = 0;
    }
});

// document.getElementById('acceptButton').addEventListener('click', ()=>{
//   document.getElementById('cookieCard').style.display = 'none';
// })

const que = document.querySelectorAll('.que');
let ans = document.querySelectorAll('.ans')

for (let i = 0; i < que.length; i++) {
    que[i].addEventListener('click', ()=>{
        ans[i].classList.toggle('active')
    });
}

// Function to save product data to localStorage
function saveToLocalStorage(event) {
    // Find the article that the "Add to Cart" button belongs to

    const article = event.target.closest('article');
    
    // Get the data from the article (id, name, price)
    const articleId = article.id;  // Get the article's id
    const name = article.querySelector('.s2p1').textContent;  // Get the name of the product
    const price = article.querySelector('.s2p2').textContent;  // Get the price of the product
    
    // Create an object for this product
    const product = {
      id: articleId,
      name: name,
      price: price
    };
  
    // Get existing products in localStorage, or initialize an empty array
    let products = JSON.parse(localStorage.getItem('products')) || [];
  
    // Add the current product to the array
    products.push(product);
  
    // Save the updated array to localStorage
    localStorage.setItem('products', JSON.stringify(products));
  
    // Log the number of products saved
    console.log('Total products in cart:', products.length);

    alert('Product added to your cart')
    navigator.vibrate(100);

    document.getElementById('proCou').textContent = products.length;
  }
  
  // Add event listeners to each "Add to Cart" button
  document.querySelectorAll('#add').forEach(button => {
    button.addEventListener('click', saveToLocalStorage);
  });
  
  // Function to load and alert the number of products from localStorage on page load
  function alertProductCount() {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    
    // Show an alert with the number of products in the cart
    document.getElementById('proCou').textContent = savedProducts.length
  }
  
  // Call alertProductCount on page load
window.addEventListener('load', alertProductCount);  

const figures = document.querySelectorAll('figure');

// Loop through each figure and set up the onload event for the images
figures.forEach(figure => {
    const image = figure.querySelector('img');
    const spinner = figure.querySelector('.spinner');

    // Listen for the image to load
    image.onload = function() {
        // Hide the spinner and show the image once it's loaded
        spinner.style.display = 'none';  // Hide the spinner
        image.style.opacity = '1';   // Show the image
    };

    // If the image is already loaded (from cache)
    if (image.complete && image.naturalWidth > 0) {
        image.onload();  // Trigger the onload callback immediately
    } else {
        // Trigger the image loading (if not already loading)
        image.src = image.src;  // Redundant but ensures the image is re-triggered to load
    }
});

const buyBtn = document.querySelectorAll('#buy');

for (let i = 0; i < buyBtn.length; i++) {
  buyBtn[i].addEventListener('click', ()=>{
    alert('This feature isnot available yet');
  })
}