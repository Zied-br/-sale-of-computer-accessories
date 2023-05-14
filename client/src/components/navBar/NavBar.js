import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authActions";

const NavBar = () => {
  const auth = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.authReducer.user);
  const [accessoriesOpen, setAccessoriesOpen] = useState(false);
  const accessoriesRef = useRef(null);

  useEffect(() => {
    if (!auth.isAuth) {
      navigate("/");
    }
  }, [auth.isAuth]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (accessoriesRef.current && !accessoriesRef.current.contains(event.target)) {
        setAccessoriesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleAccessoryClick = (accessory) => {
    navigate(`/posts/${accessory}`);
    setAccessoriesOpen(false);
  };
  
   

  const toggleAccessoriesMenu = () => {
    setAccessoriesOpen(!accessoriesOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="container-fluid">
        <span className="navbar-brand" href="#">
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/218/431/non_2x/q-initial-letter-monogram-esport-and-gaming-logo-template-free-vector.jpg"
            width="200"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">
                <span className="nav-link" aria-current="page">
                  Home
                </span>
              </Link>
            </li>

            {auth.isAuth ? (
              <>
                <li className="nav-item">
                  <Link to="/Profile">
                    <span className="nav-link">Add Posts</span>
                  </Link>
                </li>

                <li className="nav-item dropdown">
                <Link to="/AllPost">
                  <span
                    className="nav-link dropdown-toggle"
                    id="accessoriesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded={accessoriesOpen ? "true" : "false"}
                    onClick={toggleAccessoriesMenu}
                  >
                    Posts
                  </span>
                  </Link>
                  <ul
                    className={`dropdown-menu${accessoriesOpen ? " show" : ""}`}
                    aria-labelledby="accessoriesDropdown"
                    style={{ cursor: "pointer" }}
                    ref={accessoriesRef}
                  >
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleAccessoryClick("laptop-stand")}
                      >
                        Laptop Stand
                      </span>   
                                       </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleAccessoryClick("keyboard")}
                      >
                        Keyboard
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleAccessoryClick("mouse")}
                      >
                        Mouse
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleAccessoryClick("headphones")}
                      >
                        Headphones
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleAccessoryClick("external-drive")}
                      >
                        External Drive
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleAccessoryClick("usb-hub")}
                      >
                        USB Hub
                      </span>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/login">
                    <span
                      className="nav-link"
                      onClick={() => dispatch(logout())}
                    >
                      Logout
                    </span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login">
                    <span className="nav-link">Login</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register">
                    <span className="nav-link">Register</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
          {auth.isAuth && (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <span className="user">{userName && userName.name}</span>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

