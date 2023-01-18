import React from "react"
import { Fragment } from "react"

const Footer = () => {

    return (
        <Fragment>
            <div className="log-section">
                <div className="Login">
                    <h1>Login</h1>
                </div>
                <div className="userLogin">
                    <form>
                        <p>
                            <label style={{ padding: "10px", fontWeight: "bold" }}>Email</label>
                            <input style={{ marginLeft: '2rem' }} className="inputs mail" type='email' placeholder="email@domain.com" />
                        </p>
                        <p>
                            <label style={{ fontWeight: "bold" }}>Password</label>
                            <input className="inputs" type='password' placeholder="***********" />
                        </p>
                        <p>
                            <input className="checkLog" type='checkbox' />
                            <label>remember me</label>
                        </p>
                        <button className="buttonLogin">Login</button>
                    </form>
                </div>
            </div>
            <footer style={{ backgroundColor: "white" }} >
                <div className="contact">
                    <p>
                        <img src={
                            process.env.PUBLIC_URL +
                            "/maps-and-flags.png"
                        } alt="" />
                        Tripoli - Al Mina
                    </p>
                    <p>
                        <img src={
                            process.env.PUBLIC_URL +
                            "/phone-call.png"
                        } alt="" />
                        +1 555 123456
                    </p>
                    <p>
                        <img src={
                            process.env.PUBLIC_URL +
                            "/email.png"
                        } alt="" />
                        zalisko@gmail.com
                    </p>
                </div>
                <div className="about">
                    <h1>About the Gallery</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat natus labore voluptas et. Natus, provident tenetur?
                    </p>
                    <div>
                    <img src={
                        process.env.PUBLIC_URL +
                        "/facebook.png"
                    } alt="" />
                    <img src={
                        process.env.PUBLIC_URL +
                        "/instagram.png"
                    } alt="" />
                    <img src={
                        process.env.PUBLIC_URL +
                        "/twitter-sign.png"
                    } alt="" />
                    </div>
                </div>
                {/* <p>Copyright © 2022</p> */}
            </footer>
        </Fragment >
    )
}

export default Footer;