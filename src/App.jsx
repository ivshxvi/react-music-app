import React, { useState } from "react";
import { Form, List } from "./components"

const App = () => {
    const [formData, setFormData] = useState({ album: "", year: "", song: "" });
    const [entries, setEntries] = useState([]);

    return(
        <>
        <header>Kanye West Fan Page</header>
        <Form formData = {formData} setFormData = {setFormData} entries = {entries} setEntries = {setEntries}/>
        <List formData = {formData} setFormData = {setFormData} entries = {entries} setEntries = {setEntries}/>
        </>
    )
}


export default App