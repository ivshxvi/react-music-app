import React from "react"
import { useAppState } from "./AppStateContext.jsx";


export default function Form() {
    const { formData, updateFormData } = useAppState();

    const handleSubmit = (event) => {
      event.preventDefault();
      updateFormData(formData);
    };
  
    return (
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={(event) => updateFormData({ ...formData, name: event.target.value })}
        placeholder="Name"
      />
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