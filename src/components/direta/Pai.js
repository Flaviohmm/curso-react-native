import React from 'react'
import Filho from './Filho'

export default props => {
    let x = 11
    let y = 100
    return (
        <>
            <Filho a={x} b={y} />
            <Filho a={x + 100} b={y + 200} />
        </>
    )
}