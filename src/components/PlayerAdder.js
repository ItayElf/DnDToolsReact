import React from 'react'
import { useState } from 'react'

const PlayerAdder = ({onAdd}) => {
    const [name, setName] = useState("")
    const [damage, setDamage] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert("Please enter a name")
        } else {
            onAdd(name, damage)

            setName("")
            setDamage(0) 
        }

        
    }

    return (
        <form onSubmit={onSubmit} style={{display:"flex"}}>
            <input className="m-1 rounded border" style={{flex:"33%"}} type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input className="m-1 rounded border" style={{flex:"33%"}} type="number" placeholder="Damage" value={damage} onChange={(e) => setDamage(e.target.value)} />

            <input className="btn btn-success m-1" type="submit" value="Create" />
        </form>
    )
}

export default PlayerAdder
