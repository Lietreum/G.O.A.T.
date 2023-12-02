import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/home" className="navbar-item">
            Home
          </Link>
          <Link to="/about" className="navbar-item">
            About
          </Link>
          {/* Removed the Features link */}
          <Link to="/list" className="navbar-item">
            Restaurant Inventory
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">WELCOME TO G.O.A.T WEBSITE</h1>
            <h2 className="subtitle is-4">Restaurant Inventory </h2>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              {/* Removed the Features section */}
            </div>
            <div className="column">
              <h2 className="title is-2">Discover Our FoodList</h2>
              <p className="subtitle is-5">
                Curabitur a nulla ex. Nam a tincidunt ante. Vitae gravida turpis. Donec ullamcorper quam felis, a
                fringilla purus efficitur.
              </p>
              <Link to="/list" className="button is-primary">
                Explore List
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
