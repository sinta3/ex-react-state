import React, { Component } from "react";
import "../styles/Container.css";

export default class Container extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>What We Offer</h2>
                    <div class="sp"></div>
                    <br />
                    <br />
                    <div class="container2">
                        <div class="box"></div>
                        <h4>Coffee</h4>
                        <div class="box"></div>
                        <h4>Cake and Pastry</h4>
                        <div class="box"></div>
                        <h4>Indonesian Dishes</h4>
                    </div>
                </div>
            </div>
        );
    }
}
