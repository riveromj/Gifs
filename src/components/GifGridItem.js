import React from 'react'


export const GifGridItem = ({id, title, url}) => {

    return (
        <div className="card animate__backInDown">
           <img className='gif' src={url} alt={title}/>
           <p>{title}</p>
        </div>
    )
}
