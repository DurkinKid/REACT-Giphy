import React from 'react';

export default function Giphy({giphyURL}){
    return (
        <>
        <div>
            <video src={giphyURL.video_url} alt="Gif" height={`${giphyURL.height}`} autoPlay />
            <img src={giphyURL.image_url} alt="Gif" height={giphyURL.height}/>
        </div>
        </>
    )
   
}
