import {investors} from "./data";
import {useEffect, useState} from "react";

export const Investor = () => {
    const [investor, setInvestor] = useState([])
    useEffect( () => {

        //2 lines
        // setInvestor(investors)
        investors.map((res)=>{console.log(res)})

         // console.log(investors)


    }, [])
    return (
        <>

        </>
    )
}