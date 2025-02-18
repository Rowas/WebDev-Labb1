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