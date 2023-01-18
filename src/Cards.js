import React from "react"
import { Fragment, useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Fragment>
            <div className="container text-center z" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <div className="row">
                    <div className="card col" style={{ width: "18rem" }}>
                        <img src={
                            process.env.PUBLIC_URL +
                            "/card1.jpeg"
                        } className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempore omnis quasi temporibus.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card col" style={{ width: "18rem" }}>
                        <img src={
                            process.env.PUBLIC_URL +
                            "/card2.jpeg"
                        } className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempore omnis quasi temporibus.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card col" style={{ width: "18rem" }}>
                        <img src={
                            process.env.PUBLIC_URL +
                            "/card3.jpeg"
                        } className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempore omnis quasi temporibus.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default Card;