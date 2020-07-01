import React from "react";
import url from "../assets/avatar.JPG";
import Avatar from "../components/Avatar/Avatar";
import StudentInfo from "../components/StudentInfo/StudentInfo";

function Profil() {
    //state
    let name = "Sinta Tri Astuti";
    let address = "Grobogan, Central Java";

    return (
        <div>
            <div class="ava">
                <Avatar src={url} />
            </div>
            <div class="info">
                <StudentInfo name={name} address={address} />
            </div>
        </div>
    );
}

export default Profil;
