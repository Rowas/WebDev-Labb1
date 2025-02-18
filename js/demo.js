const navigation = `
<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #f0ead6;">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fina Blommor</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./index.html">Hem</a>
        </li>
<li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Produkter & Tjänster
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="./products.html">Produkter</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="./services.html">Tjänster</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./about.html">Om oss</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`

const APIURL = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=57.70382156832511&lon=11.962716726049132"

fetch(APIURL)
.then((response) => response.json())
.then((tempData) => {
  return tempData
})
.then((dataResult) => {
  stickyfooter(dataResult.properties.timeseries[1].data.instant.details.air_temperature)
})

document.getElementById("nav-container").insertAdjacentHTML('afterbegin', navigation);

function stickyfooter(apiresult) {
  let footLoc = document.getElementById("stickyfoot")
  let stickyfoot = (`
    <div class="container" style="background-color: #f0ead6;">
        <span class="text-muted">Current Temperature at location: ${apiresult} C</span>
    </div>
    `)
footLoc.insertAdjacentHTML('afterbegin', stickyfoot)
}

if (document.title == "Produkter")
{
let prodImg = "prod1.webp";
let prodName = "prod1";

let productArray = [15]
let rowNum = 0;

for (let i = 0; i < 15; ++i)
{
  let imgNum = Math.random();
if (imgNum > 0.75)
{
  prodImg = "prod4.webp"
  prodName = "prod4"
}
else if (imgNum < 0.75 && imgNum > 0.5)
{
  prodImg = "prod3.webp"
  prodName = "prod3"
}
else if (imgNum < 0.5 && imgNum > 0.25)
{
  prodImg = "prod2.webp"
  prodName = "prod2"
}
else
{
}

let productLayout = 
`
<div class="col"><img alt="${prodName}" src="./media/${prodImg}" height="307.23" width="245.85"></img><br>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style="background-color:burlywood; color:black" >${prodName}</button></div>
`

productArray[i] = productLayout
}

for (let i = 0; i < productArray.length / 4; ++i)
{
  let extraRow = 
`
<div class="row" id=Row${rowNum}>
`
  document.getElementById("productDiv").insertAdjacentHTML("beforeend", extraRow)
  for (let y = 0; y < 4; ++y)
  {
    document.getElementById('Row' + rowNum).insertAdjacentHTML("beforeend", productArray[i + y])
  }
  document.getElementById("productDiv").insertAdjacentHTML("beforeend","</div><br>")
  rowNum = rowNum + 1;
}
}

var modalButtons = document.querySelectorAll("button")

modalButtons.forEach((item) => {
  item.addEventListener("click", () => {
    var elem = item;
    var txt = elem.textContent || elem.innerText;
    if (txt == "Close" || txt == "Add to cart (not implemented)") {}
    else
    {
      let modalCode = document.getElementById("exampleModalLabel")
      modalCode.textContent = txt;
    }
  })
})