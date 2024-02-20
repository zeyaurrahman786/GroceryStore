let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");

  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");

  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");

  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");

  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};










// Cart --------------------------
let products = [
  {
    src: "./image/orange.png",
    title: "freash orange",
    price: 100,
  },
  {
    src: "./image/apple.png",
    title: "fresh apple",
    price: 150,
  },
  {
    src: "./image/mango.png",
    title: "fresh mango",
    price: 120,
  },
  {
    src: "./image/grapes.png",
    title: "fresh grapes",
    price: 80,
  },
  {
    src: "./image/tomato.png",
    title: "fresh tomato",
    price: 40,
  },
  {
    src: "./image/cauliflower.png",
    title: "fresh cauliflower",
    price: 30,
  },
  {
    src: "./image/pea.png",
    title: "fresh pea",
    price: 60,
  },
  {
    src: "./image/ladyfinger.png",
    title: "fresh lady finger",
    price: 90,
  },
];

function allProducts() {
  let clutter = "";
  products.forEach((product, index) => {
    clutter += `<div class="box cart-box">
    <img src=${product.src} alt="">
    <h1>${product.title}</h1>
    <div class="price">Rs. ${product.price}</div>
    <div class="stars">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star-half"></i>
    </div>
    <button class="btn add">Add To Cart</button>
</div> 
    `;
  });
  // console.log(clutter)
  document.querySelector(".product-container").innerHTML = clutter;
}
allProducts();

let cratContainer = document.querySelector(".shopping-cart");

let existCart = [];



let cartBtns = document.querySelectorAll(".add");
let cartBoxes = document.querySelectorAll(".cart-box");

cartBtns.forEach((btn, index) => {
  btn.addEventListener("click", (details) => {
    // console.log(details.target.classList.contains("add"));
    // console.log(index);
    // console.log(details.target.dataset.index);
    let clickedProduct = {
      src: products[index].src,
      title: products[index].title,
      price: products[index].price,
      qty: 1,
    };
    // console.log(clickedProduct);
    existCart.push(clickedProduct);
    showCart();

    // console.log(deleteButtons);
    //   deleteCart(deleteButtons)
    // console.log(deleteButtons)
  });
});
let deleteButtons=[]

function showCart() {
    let cluter = "";
  
    existCart.forEach((cart, index) => {
      cluter += `<div class="box">
          <i class="fa fa-trash"  id=${index} value=${index} ></i>
          <img src=${cart.src} alt="">
          <div class="content">
              <h3>${cart.title}</h3>
              <span class="price">Rs. ${cart.price}/-</span>
              <span class="quantity">Qty : ${cart.qty}Kg</span>
          </div>
          </div>
          `;
    });
    cratContainer.innerHTML = cluter;
     deleteButtons = document.querySelectorAll(".fa-trash");
    console.log(deleteButtons)
    deleteCart(deleteButtons)
  }


function deleteCart(buutons){
    // console.log('hii')
    buutons.forEach((el) => {
        el.addEventListener("click", (details) => {
          console.log("hii");
          existCart.splice(details.target.id, 1);
          showCart();
        });
      });
}

showCart();