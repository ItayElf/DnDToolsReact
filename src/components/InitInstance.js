import React from 'react'
import { useState } from 'react'
import ContentEditable from 'react-contenteditable'

const InitInstance = ({init, onDelete, onInitChange, number, isDark}) => {
    const [initiative, setInitiative] = useState(init.init)
    const [contentEditable, setContentEditable] = useState(React.createRef())

    const handleChangeInit = (evt) => {
        if (!isNaN(evt.target.value)) {
            onInitChange(number-1, evt.target.value)
        }
        setInitiative(evt.target.value)
    }

    return (
        <div className="m-2" style={{display:"flex"}}>
            {/* <FaTimes style={{color:"red", cursor:"pointer"}} onClick={() => onDelete(init.id)}/>  */}
            <p style={{textAlign:"center", fontSize:"150%", flex:"10%"}}>{number}</p>
            <p style={{textAlign:"center", fontSize:"150%", flex:"40%"}}>{init.name}</p>
            
            <ContentEditable className="h-100 m-1"
                style={{textAlign:"center", fontSize:"150%", flex:"40%"}}
                innerRef={contentEditable}
                html={"" + initiative}
                onChange={handleChangeInit}
                />
            <button className={`btn btn-danger ${isDark?"dark":""}`} style={{textAlign:"center", fontSize:"150%", flex:"10%"}} onClick={() => onDelete(init.id)}>Remove</button>
        </div>
    )
}

export default InitInstance
