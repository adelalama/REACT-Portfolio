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
                    klwenfkrg erergnrelkgnerlkgnerlkger oiengweiognweiog er gijreglernglekrg 
                    </p>
                </div>


            </div>

        </section>
    )
}

export default About;