  let productArray = []
  let rowNum = 0;

let prod1 = {
  prodImg : "prod1.webp",
  prodName : "Blomma",
  prodPrice : 21
}
let prod2 = {
  prodImg : "prod2.webp",
  prodName : "Blommor",
  prodPrice : 44
}
let prod3 = {
  prodImg : "prod3.webp",
  prodName : "Liten Bukett",
  prodPrice : 64
}
let prod4 = {
  prodImg : "prod4.webp",
  prodName : "Stor Bukett",
  prodPrice : 92
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
}}

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
    document.getElementById("cartDropList").textContent = `Varor i kundkorgen: ${cartSize}`;
    document.getElementById("navItemsCart").innerHTML += `<li class="dropdown-item"> ` + cartSize + ". " + prod1.prodName + " | " + prod1.prodPrice + " SEK" + " </li>"
  }
  else if (document.getElementById("productModal").textContent == prod2.prodName)
  {
    cartArray[cartSize] = prod2;
    ++cartSize;
    document.getElementById("cartDropList").textContent = `Varor i kundkorgen: ${cartSize}`;
    document.getElementById("navItemsCart").innerHTML += `<li class="dropdown-item"> ` + cartSize + ". " + prod2.prodName + " | " + prod2.prodPrice + " SEK" + " </li>"
  }
  else if (document.getElementById("productModal").textContent == prod3.prodName)
  {
    cartArray[cartSize] = prod3;
    ++cartSize;
    document.getElementById("cartDropList").textContent = `Varor i kundkorgen: ${cartSize}`;
    document.getElementById("navItemsCart").innerHTML += `<li class="dropdown-item"> ` + cartSize + ". " + prod3.prodName + " | " + prod3.prodPrice + " SEK" + " </li>"
  }
  else
  {
    cartArray[cartSize] = prod4;
    ++cartSize;
    document.getElementById("cartDropList").textContent = `Varor i kundkorgen: ${cartSize}`;
    document.getElementById("navItemsCart").innerHTML += `<li class="dropdown-item"> ` + cartSize + ". " + prod4.prodName + " | " + prod4.prodPrice + " SEK" + " </li>"
  }
})
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

let cartItem = 
`
                          <div class="card rounded-3 mb-4">
                            <div class="card-body p-4">
                              <div class="row d-flex justify-content-between align-items-center">
                                <div class="col-md-2 col-lg-2 col-xl-2">
                                  <img
                                    src="./media/${prod4.prodImg}"
                                    class="img-fluid rounded-3" alt="${prod4.prodName}">
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-3">
                                  <p class="lead fw-normal mb-2">${prod4.prodName}</p>
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                  <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                    <i class="fas fa-minus"></i>
                                  </button>
                  
                                  <input id="quantity" min="0" name="quantity" value="1" type="number"
                                    class="form-control form-control-sm" />
                  
                                  <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                    <i class="fas fa-plus"></i>
                                  </button>
                                </div>
                                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                  <h5 class="mb-0">${prod4.prodPrice} SEK</h5>
                                </div>
                                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                  <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
`

let cartItemArray = []

cartItemArray.push(cartItem);

document.getElementById("cartItems").insertAdjacentHTML("afterbegin", cartItemArray)
}

const navigation = `
<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #f0ead6;">
  <div class="container-fluid">
    <a class="navbar-brand" href="./">Fina Blommor</a>
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
            <!-- <li><hr class="dropdown-divider"></li> -->
            <!-- <li><a class="dropdown-item" href="./services.html">Tjänster</a></li> -->
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./about.html">Om oss</a>
        </li>
      </ul>
      <ul class="navbar-nav me-right mb-2 mb-lg-0">
            <li class="nav-item dropdown">
          <a id="cartDropList" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Varor i kundkorgen: ${cartSize}
          </a>
          <ul id="navItemsCart" class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="./cart.html">Gå till kassan</a></li>
            <li><hr class="dropdown-divider"></li>
            <li class="dropdown-item"><u>Varor i kundkorgen<u></li>
            <li><hr class="dropdown-divider"></li>
          </ul>
        </li>
        </ul>
    </div>
  </div>
</nav>
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
        <span class="text-muted">Current Temperature at location: ${apiresult} C</span>
    </div>
    `)
footLoc.insertAdjacentHTML('afterbegin', stickyfoot)
}