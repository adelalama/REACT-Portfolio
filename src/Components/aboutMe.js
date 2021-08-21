import React from "react";
import coverImage from '../Assets/cover4.jpg';
import userImage from '../Assets/prof.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';


function About() {
    return (
        <section className="">
            <h1 id="about">Alejandro De La Lama</h1>
            <img src={coverImage} className="hero"  alt="cover" />

            <div className="row">

                <div className="col-4 ip-picture">
                    <img src={userImage} className="ip-picture" alt="" />
                </div>

                <div className="col-7 ip-desc">
                    <h4>About me</h4>
                    <p>
                    My name is Alejandro, im a 27 year old from Mexico City. Helvetica put a bird on it church-key Blue Bottle
            banjo bespoke brunch Etsy authentic Marfa quinoa typewriter
            plaid
            direct trade small batch wayfarers bicycle rights cliche craft beer gastropub single-origin coffee Godard
            Carles you
            probably haven't heard of them irony pickled kitsch synth sriracha gentrify literally heirloom blog Truffaut
            paleo
            scenester 
                    </p>
                </div>


            </div>

        </section>
    )
}

export default About;