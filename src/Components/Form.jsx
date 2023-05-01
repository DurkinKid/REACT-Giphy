import React, { useState } from 'react';

export default function Form({getGiphy, search}){
    const [gifUrl, setGifUrl] = useState("")
    function handleSubmit(e){
        e.preventDefault();
        search(gifUrl);
        setGifUrl("")
    }

    function handleChange(e){
        setGifUrl(e.target.value)
    }

return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} placeholder="Randomizer" value={gifUrl}/>
            <button type='Submit'>{gifUrl ? "Search" : "Random"}</button>
        </form>
        </>
    )
}