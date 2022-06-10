import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/globalUserContext'
import './Navbar.css';

const Navbar = () => {
  let navigate = useNavigate();
  const [search, setSearch] = useState('');
  const { setProductSearch } = useGlobalContext();

  const onClickHandler = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/products/search`, { search })
      .then((data) => {
        setProductSearch(data.data);
        navigate('/search');
      });
  };

  return (
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Bierfass
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cervezas
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Lager
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#">
                      Ale
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="navbar-nav mv-auto mb-2 mb-lg-0">
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                size="40"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                onClick={onClickHandler}
                class="btn btn-outline-light"
                type="submit"
              >
                Search
              </button>
            </form>
            <div class="navbar-nav ml-auto">
              <a class="nav-link" aria-current="page" href="/register">
                Registrarse
              </a>

              <a class="nav-link" aria-current="page" href="/login">
                Loguearse
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div class="welcome">
        <h1 class="display-4">Bierfass</h1>
        <p class="lead">
          Bierfass es una tienda de cervezas, donde puedes encontrar cervezas de
          todo tipo.
        </p>
      </div>
    </header>
  );
};

export default Navbar;
