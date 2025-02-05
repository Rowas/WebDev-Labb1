document.addEventListener("DOMContentLoaded", () => {

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

const stickyfoot = `
<footer class="footer mt-auto py-3 bg-light">
    <div class="container">
        <span class="text-muted">Place sticky footer content here.</span>
    </div>
</footer>
`


document.getElementById("nav-container").insertAdjacentHTML('afterbegin', navigation);
document.getElementById("stickyfoot").insertAdjacentHTML('afterbegin', stickyfoot);
})