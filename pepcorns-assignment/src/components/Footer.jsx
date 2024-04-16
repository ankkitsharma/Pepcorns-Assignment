import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10  bg-blue-950 text-gray-200">
      <aside>
        <img src="https://assets.republic.com/assets/logo/full/white/120x30/logo-54659cb6a37ad65e8e65799b0238c6ea0c0c4ed99ce66f7286fd1d175e718e73.svg"></img>
        <p>
          Republic Ltd.
          <br />
          Giving everyone access to early-stage startup investing
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
