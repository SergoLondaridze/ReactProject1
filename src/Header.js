import React from "react";
import img1 from "./img/imgsection1/Path.png"
import img2 from "./img/imgsection1/airpods.png"
import img3 from "./img/imgsection1/t1.png"
import "./style.css"
export default function Header() {
    return (
        <div className="container1">
            <div className="section1sircle"></div>
            <div className="header">
                <p>airmusic</p>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Specifications</li>
                    <li>Features</li>
                    <li>FAQ</li>
                    <li>Contact us</li>
                </ul>
                <div>ORDERT NOW</div>
            </div>
            <div className="section1">
                <div className="section1_1">
                    <p>Airmusic awesome sounds </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <div>ORDER NOW</div>

                </div>
                <div className="imgBox1">
                    <img src={img1} alt="" className="img1" />
                    <img src={img2} alt="" className="img2" />
                    <img src={img3} alt="" className="img3" />
                </div>
            </div>

        </div>

    )
}