import React, { useState } from "react";

import { Form, List } from "../../components";

const FavPage = () => {
  const [formData, setFormData] = useState({ album: "", year: "", song: "" });
  const [entries, setEntries] = useState([]);

  const addEntry = () => {
    setEntries((prevEntries) => [...prevEntries, formData]);
  };

  return (
    <div>
    <Form formData={formData} setFormData={setFormData} addEntry={addEntry} />
    <List entries={entries} />
    </div>
  )

}

export default FavPage