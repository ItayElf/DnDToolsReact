import React from 'react'
import { useState } from 'react'
import PlayerAdder from './PlayerAdder'
import PlayerInstance from './PlayerInstance'

const PlayerPanel = ({title, onAddInit, isDark}) => {
    const border = false
    const [players, setPlayers] = useState([])
    const [id, setId] = useState(0)

    const onAdd = (namevar, damagevar) => {
        setPlayers([...players, {name: namevar, damage: damagevar, id:id}])
        setId(id+1)
    }

    const onDelete = (id) => {
        setPlayers(players.filter((p) => p.id !== id))
    }

    return (
        <div className={`w-100 ${border ? "rounded border border-dark" : ""}`} style={panelStyle}>
            <h1 style={{textAlign:"center"}}>{title}</h1>
            {players.map((p) => (
                <PlayerInstance key={p.id} player={p} onDelete={onDelete} onAdd={onAddInit} isDark={isDark}/>
            ))}
            <PlayerAdder onAdd={onAdd}/>
        </div>
    )
}

export default PlayerPanel

const panelStyle = {position: "sticky"}