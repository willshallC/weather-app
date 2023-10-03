import React, { useEffect, useState } from "react";

const Tempapp = () => {

    const [city, setCity] = useState('');
    const [search, setSearch] = useState('Chandigarh')

    useEffect(()=>{
        const fetchApi =async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=40c3345589e63b8a91dce2a934daf9c5`
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson)
        }
        fetchApi();
    },[search]);
    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputFeild" onChange={(e)=>e.target.value}/>
                    
                </div>
                <div className="info">
                    <h2 className="location"><i class="fa-solid fa-street-view"></i>{city}</h2>
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