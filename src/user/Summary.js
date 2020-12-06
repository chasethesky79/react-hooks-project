import React from 'react'

export default function Summary({name, index}){
    return <React.Fragment>
        <tr key={name}>
            <td>{index+1}</td>
            <td>{name}</td>
            <td>{name.length}</td>
        </tr>
        </React.Fragment>
}