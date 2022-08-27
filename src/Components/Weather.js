import "../Css/Style.css"
import {useEffect, useState} from "react";

export const Weather = () => {
    const [city, setCity] = useState('');
    const [search, setSearch] = useState("Mumbai");

    useEffect( () => {
        const fetchApi = async ()=>
        {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b193045009cc8e18b52f114f5fcbfafc`
            const response = await fetch(url)
            // console.log(response)
            const resJson = await response.json()
            // console.log(resJson)
            setCity(resJson.main)
        }
        fetchApi();
    },[search]);
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="text" onChange={(e) => {
                        setSearch(e.target.value)
                    }} className="form-control form-rounded" style={{width: 250, height: 30}} placeholder="Text input"/>

                </div>
                {!city ? (<p>Data not found</p>) : (<div>
                    <div className="info">
                        <h1><i className="fa-solid fa-street-view">{search}</i>
                        </h1>
                        <h5 className="temp">
                            {city.temp} Cel
                        </h5>
                        <h3 className="tempmin_max">Min : {city.temp_min} Cel | Max : {city.temp_max} Cel </h3>
                    </div>

                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>

                </div>)}

            </div>

        </>
    )
}