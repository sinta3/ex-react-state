import React from "react";

function StudentInfo({ name, address }) {
    return (
        <div>
            <h3>{name}</h3>
            <h3>{address}</h3>
        </div>
    );
}

export default StudentInfo;
