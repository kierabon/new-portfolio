import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <footer className=" bg-dark fixed-bottom">
        <div className="container">
          <p className="text-center text-white">
            <a href="https://github.com/kierabon/new-portfolio">View code on gitHub</a>
            <br />
            Copyright &copy; Your Website 2021
          </p>
        </div>
      </footer>
    </div>
  );
}

