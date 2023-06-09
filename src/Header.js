import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
  return (
    <nav class="navbar bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand"></a>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
