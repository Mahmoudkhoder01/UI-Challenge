import React from "react"
import { Fragment } from "react"

const Main = () => {

    return (
        <Fragment>
            <main style={{ backgroundColor: "white", paddingLeft: "10%" }}>
                <div className='row check'>
                    <div className="col-lg-6">
                        <img src={
                            process.env.PUBLIC_URL +
                            "/checked.png"
                        } alt="" />
                        <h3>Elite Citentele</h3>
                        <p>We have all dresses, the greatest dresses</p>
                    </div>
                    <div className="col-lg-6">
                        <img src={
                            process.env.PUBLIC_URL +
                            "/heart.png"
                        } alt="" />
                        <h3>Guaranteed to work</h3>
                        <p>Find the love of your best dress</p>
                    </div>
                </div>
            </main>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={
                            process.env.PUBLIC_URL +
                            "/carousel1.jpeg"
                        } className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={
                            process.env.PUBLIC_URL +
                            "/carousel2.jpeg"
                        } className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={
                            process.env.PUBLIC_URL +
                            "/carousel3.jpeg"
                        } className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </Fragment >
    )
}

export default Main;