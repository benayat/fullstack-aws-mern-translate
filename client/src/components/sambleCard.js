import React from "react"

const Card = ({data}) => {
    return data.map((item, id) => {
        return <div key={id}>{item.title}</div>
    })
}

export default Card