import { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Form';
import Giphy from './Components/Giphy';

export default function App() {
  const [giphyURL, setGiphyURL] = useState({});
  useEffect(() => {
    const giphyURL = `https://api.giphy.com/v1/gifs/random?api_key=Y5Sd3PFb6nyBIWwJwgkbwvknA0IVOuO6&tag=&rating=g`;
    async function getGiphy() {
      try {
        const response = await fetch(giphyURL);
        const data = await response.json();
        console.log('getGiphy', data);
        setGiphyURL({ video_url: data.data.images.looping
          .mp4, image_url: data.data.images.fixed_height.url });
      } catch (err) {
        console.log(err);
      }
    };
    getGiphy();
  }, []);

    async function Randomizer(){
      const giphyURL = `https://api.giphy.com/v1/gifs/random?api_key=Y5Sd3PFb6nyBIWwJwgkbwvknA0IVOuO6&tag=&rating=g`;
   
        const response = await fetch(giphyURL);
        const data = await response.json();
        console.log('getGiphy', data);
        setGiphyURL({ video_url: data.data.images.looping
        .mp4, image_url: data.data.images.fixed_height.url, img_height: 350 });
     
    }

    const handleSubmit = async (val) => {
    if(val) {
      const giphyURL = `https://api.giphy.com/v1/gifs/search?api_key=Y5Sd3PFb6nyBIWwJwgkbwvknA0IVOuO6&q=${val}&limit=25&offset=0&rating=g&lang=en`;
      const response = await fetch(giphyURL);
      const data = await response.json();
      console.log('handleSumbit', data.data[0].images.looping
      .mp4);
      setGiphyURL({ video_url: data.data[0].images.looping
        .mp4, image_url: data.data[0].images.fixed_height.url });
    } else {
      Randomizer();
    }
  };
  return (
    <div className="App">
      <h2>Giphy REACT Lab</h2>
      <Form  search={handleSubmit}/>
      {giphyURL.image_url ? (
        <Giphy giphyURL={giphyURL} />
      ) : (
        <></>
      )}
      </div>
    
  );
}