import React from 'react'
import { useState } from 'react'
import { FaTimes } from "react-icons/fa"
import ContentEditable from 'react-contenteditable'

const PlayerInstance = ({player, onDelete, onAdd, isDark}) => {
    const [nameText, setNameText] = useState(player.name)
    const [damageText, setDamageText] = useState(player.damage)
    const [contentEditable, setContentEditable] = useState(React.createRef())
    const [contentEditable2, setContentEditable2] = useState(React.createRef())

    const handleChangeName = evt => { setNameText(evt.target.value) }
    const handleChangeDamage = evt => { setDamageText("" + evt.target.value) }

    return (
        <div className="m-2" style={{display:"flex"}}>
            <FaTimes style={{color:"red", cursor:"pointer"}} onClick={() => onDelete(player.id)}/> 
            <ContentEditable className="h-100 m-1" 
                style={{textAlign:"center", fontSize:"150%", flex:"33%"}}
                innerRef={contentEditable}
                html={nameText}
                onChange={handleChangeName}
                />
            
            <ContentEditable className="h-100 m-1" 
                style={{textAlign:"center", fontSize:"150%", flex:"33%"}}
                innerRef={contentEditable2}
                html={"" + damageText}
                onChange={handleChangeDamage}
                />
            <button className={`btn btn-primary ${isDark?"dark":""}`} style={{textAlign:"center", fontSize:"150%", flex:"33%"}} onClick={() => onAdd(nameText)}>Add</button>
        </div>
    )
}

export default PlayerInstance