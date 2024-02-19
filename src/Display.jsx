import React from "react"
import { useState } from "react"
import { useAppState } from "./AppStateContext.jsx";

export default function Display(){
    const { formData } = useAppState();
    
    const [likes, setLikes] = useState(0)

    const addLikes = () => {
        setLikes(prevState => prevState + 1)
    }

    return (
        <div className="Display">
        <h1>{formData.name}</h1>
        <h2>Popular</h2>
        <div>
          <h3>{formData.album}</h3>
          <h3>{formData.year}</h3>
          <h3>{formData.song}</h3>
          <h4>{likes}</h4>
          <button onClick={addLikes}>Like</button>
        </div>
      </div>
    )
}