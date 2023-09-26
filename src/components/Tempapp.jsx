import React, { useState } from "react";

const Tempapp = () => {

    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputFeild" onChange={(e)=>e.target.value}/>
                </div>
                <div className="info">
                    <h2 className="location"><i class="fa-solid fa-street-view"></i></h2>
                    <h1 className="temp">7.3&#xb0;C</h1>
                    <h3 className="tempmin_max">Min: 5.23&#xb0;C | Max: 10.0&#xb0;C</h3>
                    <div className="wave-one"></div>
                    <div className="wave-two"></div>
                    <div className="wave-three"></div>
                </div>
            </div>
        </>
    )
}

export default Tempapp;