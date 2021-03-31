import React from 'react'
import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from 'react'

const DarkModer = ({onClick, isDark}) => {
    const [clickedFirst, setClickedFirst] = useState(false)
    
    useEffect(() => {
        if (!clickedFirst) {
            document.getElementById("darkmoder").click()
            setClickedFirst(true)
        }
    })
    return (
        <button className="btn" onClick={onClick} id="darkmoder">
            {!isDark ? <FaMoon /> : <FaSun color="white"/>}
        </button>
    )
}

export default DarkModer
