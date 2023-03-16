// login signup
function loginfun() {
    document.querySelector('.bg').classList.add('showbg')
    document.querySelector('.login').classList.add('showlogin')
    }
  
    function closefun() {
      document.querySelector('.bg').classList.remove('showbg')
      document.querySelector('.login').classList.remove('showlogin')
      }       
    
  
    // var buton=document.querySelector('#logg')
    // buton.addEventListener('click' ,loginfun)
  
    var close=document.querySelector('#cutt')
    close.addEventListener('click' , closefun)
  


function addcart (event){
    let parent = event.target.parentNode.parentNode.parentNode.outerHTML
    const data = localStorage.getItem('cart') || '';
    // console.log(data)
    parent = parent.replace('<a href="./cart.html" onclick="addcart(event)" class="cart-btn">add to cart</a>','<a onclick="recart(event)" class="cart-btn">Remove to cart</a>')
    parent = parent.replace('<a onclick="relike(event)" class="fas fa-times"></a>','<a href="./favourite.html" onclick="addflower(event)" class="fas fa-heart"></a>')

    if(!data.includes(parent)){
        // console.log(data,parent)
        localStorage.setItem('cart', `${data}${parent}`);
    }
}

function addflower (event){
    let parent = event.target.parentNode.parentNode.parentNode.outerHTML
    const data = localStorage.getItem('favourite') || '';
    parent = parent.replace('<a onclick="recart(event)" class="cart-btn">Remove to cart</a>','<a href="./cart.html" onclick="addcart(event)" class="cart-btn">add to cart</a>')
    parent = parent.replace('<a href="./favourite.html" onclick="addflower(event)" class="fas fa-heart"></a>','<a onclick="relike(event)" class="fas fa-times"></a>')
    if(!data.includes(parent)){
        localStorage.setItem('favourite', `${data}${parent}`);
    }
}


// cart

function shoppingcart(){
    const data = localStorage.getItem('cart') || '';
    // console.log(!data,data,'data');
    if(!data){
        window.location.href = './index.html'
    }
    let cart = document.getElementById('all-cart')
    cart.innerHTML = data
    // console.log(cart,data);
}

function recart(event){
    let parent = event.target.parentNode.parentNode.parentNode.outerHTML    
    let data = localStorage.getItem('cart') || '';
    let cart = document.getElementById('all-cart')
    data = data.replace(parent,'')
    // console.log(data)
    cart.innerHTML = data
    localStorage.setItem('cart', `${data||''}`);
    if(!data){
        window.location.href = './index.html'
    }
}


// fav flower

function addlike(){
    const data = localStorage.getItem('favourite') || '';
    // console.log(!data,data,'data');
    if(!data){
        window.location.href = './index.html'
    }
    let favourite = document.getElementById('all-favourite')
    favourite.innerHTML = data
    // console.log(favourite,data);
}

function relike(event){
    let parent = event.target.parentNode.parentNode.parentNode.outerHTML    
    let data = localStorage.getItem('favourite') || '';
    let favourite = document.getElementById('all-favourite')
    data = data.replace(parent,'')
    favourite.innerHTML = data
    localStorage.setItem('favourite', `${data||''}`);
    if(!data){
        window.location.href = './index.html'
    }
}