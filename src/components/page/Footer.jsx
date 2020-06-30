import React, { Component } from "react";
import "../styles/Footer.css";
export default class Footer extends Component {
    render() {
        return (
            <div>
                <div class="container4">
                    <div class="satu">
                        <nav>
                            <a href="/">Menu</a>
                            <br />
                            <a href="/">Menu</a>
                            <br />
                            <a href="/">Menu</a>
                            <br />
                            <a href="/">Menu</a>
                            <br />
                        </nav>
                    </div>
                    <div class="dua">
                        <h4>FIND US</h4>
                        <br />
                        <iframe
                            title={maps}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0516997983123!2d106.8124688143105!3d-6.256920063000264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f17f0bda2d5f%3A0x198e08030d45c3e5!2sJl.%20Kemang%20Raya%20No.10%2C%20RT.3%2FRW.2%2C%20Bangka%2C%20Kec.%20Mampang%20Prpt.%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012730!5e0!3m2!1sen!2sid!4v1593493673548!5m2!1sen!2sid"
                        ></iframe>
                        <p>
                            Jl.Kemang Raya No.10 <br /> Jaksel - 17343 <br />
                            Indonesia
                        </p>
                    </div>
                    <br />
                </div>
                <hr />
                <footer>
                    Photo by Emre Gencer on Unsplash. Photo by David Holifield
                    on Unsplash. Photo by Baiq Daling on Unsplash.
                </footer>
            </div>
        );
    }
}
