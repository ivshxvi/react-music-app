import React from "react";
import { useAppState } from "./AppStateContext.jsx";

export default function Form() {
  const { formData, updateFormData, addEntry } = useAppState();

  const handleSubmit = (event) => {
    event.preventDefault();
    addEntry();
    updateFormData({  album: "", year: "", song: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <input
        type="text"
        name="album"
        value={formData.album}
        onChange={(event) => updateFormData({ ...formData, album: event.target.value })}
        placeholder="Album"
      />
      <input
        type="text"
        name="year"
        value={formData.year}
        onChange={(event) => updateFormData({ ...formData, year: event.target.value })}
        placeholder="Year"
      />
      <input
        type="text"
        name="song"
        value={formData.song}
        onChange={(event) => updateFormData({ ...formData, song: event.target.value })}
        placeholder="Song"
      />
      <input type="submit" value="Submit" />
    </form>
  );
}