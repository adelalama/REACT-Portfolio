import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import GithubImg from '../Assets/github.png';
import LinkedinImg from '../Assets/linkedin.png';

const Footer = () => (
    <>
  <div className="footer">
    <a href="https://github.com/adelalama" target="_blank" rel="noopener noreferrer">
        <img alt="Github" className="footer-img" src={GithubImg} />
    </a> 

    <a href="" target="_blank" rel="noopener noreferrer">
        <img alt="LinkedIn" className="footer-img" src={LinkedinImg} />
    </a> 

  </div>
  </>
);

export default Footer;