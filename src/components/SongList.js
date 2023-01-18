import React from "react";
import ListItem from "./ListItem";

const SongList = ({songsAsAProp}) => {

    const songNodes = songsAsAProp.map(song => {
        return (
        <ListItem artist={song.title.label} key={song['id']['attributes']['im:id']}></ListItem>
        );
        
      });
    
  return (
    <ol>
    <>
    {songNodes}
    </>
    </ol>
  );

}

export default SongList;