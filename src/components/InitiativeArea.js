import React from 'react'
import InitInstance from './InitInstance'

const InitiativeArea = ({inits, onInitChange, onDelete, isDark={isDark}}) => {
    const border = false

    return (
        <div className={`w-100 ${border ? "rounded border " : ""}`}>
            <h1 style={{textAlign:"center"}}>Initiative</h1>
            {inits.map((i) => (
                <InitInstance key={i.id} 
                    init={i} 
                    number={inits.indexOf(i) + 1}
                    onInitChange={onInitChange}
                    onDelete={onDelete}
                    isDark={isDark}/>
            ))}
        </div>
    )
}

export default InitiativeArea
