import React, { useEffect, useState } from "react";
import "./tempapp.css"

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('mohali')

    useEffect(()=>{
        const fetchApi =async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=40c3345589e63b8a91dce2a934daf9c5`
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson)
            setCity(resJson.main);
        }
        fetchApi();
    },[search]);
    return(
        <>
            <div className="box">
                <h1>Weather App</h1>
                <div className="inputData">
                    <input type="search" placeholder="City" className="inputField" onChange={(e)=>setSearch(e.target.value)}/>
                    
                </div>
                {
                    !city ? (<h3>No Data Found</h3>) :
                    (
                        <div className="info">
                            <h2 className="location"><i className="fa-solid fa-street-view"></i>{search}</h2>
                            <h1 className="temp">{city.temp}&#xb0;C</h1>
                            <h3 className="tempmin_max">Min: {city.temp_min}&#xb0;C | Max: {city.temp_max}&#xb0;C</h3>
                            <h3>Feels like: {city.feels_like}&#xb0;C</h3>
                            <div className="ocean">
                                <div className="wave"></div>
                                <div className="wave"></div>
                                
                            </div>
                            
                        </div>
                    )
                }
                
            </div>
        </>
    )
}

export default Tempapp;