if (document.title == "Produkter" || document.title == "Cart")
{
let productArray = []
  let rowNum = 0;

let prod1 = {
  prodImg : "prod1.webp",
  prodName : "Blomma",
  prodPrice : 21,
  inCart : 0
}
let prod2 = {
  prodImg : "prod2.webp",
  prodName : "Blommor",
  prodPrice : 44,
  inCart : 0
}
let prod3 = {
  prodImg : "prod3.webp",
  prodName : "Liten Bukett",
  prodPrice : 64,
  inCart : 0
}
let prod4 = {
  prodImg : "prod4.webp",
  prodName : "Stor Bukett",
  prodPrice : 92,
  inCart : 0
}

if (document.title == "Cart")
  {
  
  var discountButton = document.getElementById("discountButton");
  discountButton.addEventListener("click", () => {
    alert("Not Impemented.")
  })
  
  var payButton = document.getElementById("payButton");
  payButton.addEventListener("click", () => {
    alert("Not Impemented.")
  })
  }

if (document.title == "Produkter")
{

for (let i = 0; i < 16; ++i)
{
  if (i < 4)
  {
    productArray[i] = prod1;
  }
  else if (i < 8 && i > 3)
  {
    productArray[i] = prod2;
  }
  else if (i < 12 && i > 7)
  {
    productArray[i] = prod3;
  }
  else
  {
    productArray[i] = prod4
  }
}


for (let i = 0; i < productArray.length; ++i)
{
let extraRow = 

`
<div class="row" id=Row${rowNum}>
`

if (i == 0 || i == 4 || i == 8 || i == 12)
{
  document.getElementById("productDiv").insertAdjacentHTML("beforeend", extraRow)
}

let productLayout = 
  `
  <div class="col"><img alt="${productArray[i].prodName}" src="./media/${productArray[i].prodImg}" height="307.23" width="245.85"></img><br>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style="background-color:burlywood; color:black" >${productArray[i].prodName}</button> Pris: ${productArray[i].prodPrice} SEK</div>
  `
  document.getElementById('Row' + rowNum).insertAdjacentHTML("beforeend", productLayout)

if (i == 3 || i == 7 || i == 11 || i === 15)
{
  document.getElementById("productDiv").insertAdjacentHTML("beforeend","</div><br>")
  rowNum = rowNum + 1;
}  
}

var modalButtons = document.querySelectorAll("button")

modalButtons.forEach((item) => {
  item.addEventListener("click", () => {
    var elem = item;
    var txt = elem.textContent || elem.innerText;
    if (document.title !== "Produkter" || txt == "Close" || txt == "Add to cart") {}
    else
    {
      let modalCode = document.getElementById("productModal")
      modalCode.textContent = txt;
    }
  })
})
}

let cartArray = [];
var cartSize = 0;
if (document.title == "Produkter")
{
let AddCartBtn = document.getElementById("addToCartBtn");
AddCartBtn.addEventListener("click", () => {
  if (document.getElementById("productModal").textContent == prod1.prodName)
  {
    cartArray[cartSize] = prod1;
    ++cartSize;
    UpdateCart(prod1, cartSize);
  }
  else if (document.getElementById("productModal").textContent == prod2.prodName)
  {
    cartArray[cartSize] = prod2;
    ++cartSize;
    UpdateCart(prod2, cartSize);
  }
  else if (document.getElementById("productModal").textContent == prod3.prodName)
  {
    cartArray[cartSize] = prod3;
    ++cartSize;
    UpdateCart(prod3, cartSize);
  }
  else
  {
    cartArray[cartSize] = prod4;
    ++cartSize;
    UpdateCart(prod4, cartSize);
  }
})
}

const MoreItems = `
<button aria-label="More Items" data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
  <i class="fas fa-plus"></i>
</button>
`

const LessItems = `
<button aria-label="Less Items" data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
  <i class="fas fa-minus"></i>
</button>
`

function UpdateCart(product, cartSize) {
  let itemCheck = document.getElementById(product.prodName)
  if (itemCheck === null)
  {
    product.inCart = 1;
  document.getElementById("cartDropList").textContent = `Varor i kundkorgen: ${cartSize}`;
  document.getElementById("navItemsCart").innerHTML += `<li class="list-group-item" id="${product.prodName}" > ` + `<img src="./media/${product.prodImg}" height="30px" width="20">` + ". " + product.prodName + " | " + product.prodPrice + " SEK" + `<br>` + LessItems + `<input class="number" aria-label="quantity" id="quantity" min="0" name="quantity" value="${product.inCart}" type="number" disabled="true" size="10"/>` + MoreItems + " </li>"
  }
  else
  {
    product.inCart += 1;
    console.log(product.inCart);
    document.getElementById("cartDropList").textContent = `Varor i kundkorgen: ${cartSize}`;
    document.getElementById(product.prodName).innerHTML = `<li class="list-group-item" id="${product.prodName}" > ` + `<img src="./media/${product.prodImg}" height="30px" width="20">` + ". " + product.prodName + " | " + product.prodPrice + " SEK" + `<br>` + LessItems + `<input class="number" aria-label="quantity" id="quantity" min="0" name="quantity" value="${product.inCart}" type="number" disabled="true" size="10" />` + MoreItems + " </li>"
  }
}

}

if (document.title !== "Produkter" || document.title !== "Cart")
{
  cartSize = 0
}

const navigation = `
<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #f0ead6;">  
<div class="container-fluid">
    <a class="navbar-brand" href="./">Fina Blommor</a>
 <div class="order-lg-last flex-grow-1 flex-lg-grow-0 text-end" style="padding-right:10px;">
  <button class="btn btn-outline-dark ms-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasUser" aria-controls="offcanvasUser">
  <ul class="navbar-nav me-right mb-2 mb-lg-0">
            <li class="nav-item dropdown">
            <a id="cartDropList" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Varor i kundkorgen: ${cartSize}
          </a>
        </li>
        </ul>
  </button>
</div>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./">Hem</a>
        </li>
  <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Produkter & Tjänster
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="./products.html">Produkter</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./about.html">Om oss</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasUser" aria-labelledby="offcanvasUserLabel">
  <div class="offcanvas-header text-black " style="background-color: #f0ead6;">
      <h5 class="offcanvas-title" id="offcanvasUserLabel">Varukorg</h5>
      <button type="button" class="btn-close btn-close-black text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body" style="background-color: #f0ead6; ">
      <p style="border-top: 1px solid black;"></p>
      <ul id="navItemsCart" class="list-group" aria-labelledby="navbarDropdown">
          <li class="list-group-item"><a href="#">Gå till kassan</a></li>
          <li class="list-group-item"></li>
          <li class="list-group-item"><u>Varor i kundkorgen</u></li>
      </ul>
  </div>
</div>
`
document.getElementById("nav-container").insertAdjacentHTML('afterbegin', navigation);

const APIURL = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=57.70382156832511&lon=11.962716726049132"

fetch(APIURL)
.then((response) => response.json())
.then((tempData) => {
  return tempData
})
.then((dataResult) => {
  stickyfooter(dataResult.properties.timeseries[1].data.instant.details.air_temperature)
})


function stickyfooter(apiresult) {
  let footLoc = document.getElementById("stickyfoot")
  let stickyfoot = (`
    <div class="container" style="background-color: #f0ead6;">
        <span class="text-muted">Temperatur ute vid butiken: ${apiresult} C</span>
    </div>
    `)
footLoc.insertAdjacentHTML('afterbegin', stickyfoot)
}