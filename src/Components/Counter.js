import {useEffect, useState} from "react";

export const Counter = () =>
{
    const [Count, setCount] = useState(0);
    function onClick()
    {
        setCount(Count+1)
    }

    useEffect(() => {
        alert('updated')
        
    }, []);

    return (
        <>
            <button type="button" className="btn btn-primary" onClick={onClick}>{Count}</button>
        </>
    )
}