import React, {useState, useEffect} from "react";
import SongList from '../components/SongList'

const ChartsContainer = () => {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getSongs();
  }, [])

  const getSongs = function(){
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(res => res.json())
    .then(songs => setSongs(songs['feed']['entry']))
}
    
  return (
    <div>
    <h1>Itunes Top20</h1>
    <SongList songsAsAProp={songs}/>
    </div>
  );

}

export default ChartsContainer;
   

   

