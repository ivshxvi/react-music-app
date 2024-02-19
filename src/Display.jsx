import React from "react";
import { useAppState } from "./AppStateContext.jsx";

export default function Display() {
  const { entries } = useAppState();

  const [likes, setLikes] = React.useState({});

  const addLikes = (index) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [index]: (prevLikes[index] || 0) + 1,
    }));
  };

  return (
    <div className="Display">
      {entries.map((entry, index) => (
        <div key={index}>
          <p>Album: {entry.album}</p>
          <p>Year: {entry.year}</p>
          <p>Song: {entry.song}</p>
          <h4>Likes: {likes[index] || 0}</h4>
          <button onClick={() => addLikes(index)}>Like</button>
        </div>
      ))}
    </div>
  );
}