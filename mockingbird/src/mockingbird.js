import React from "react";

export default function Mockingbird() {
    const hours = 40;
    const rate = 40;
    const pay = hours * rate;
    for (let i = 0; i < 10; i++) {
        console.log(i);
        while (i < 5) {
            console.log(i);
            i++;
        }
    }
    return (
        <div>
            <h1>Mockingbird</h1>
            <p>Hours: {hours}</p>
            <p>Rate: ${rate}</p>
            <p>Pay: ${pay}</p>
        </div>
    );

}