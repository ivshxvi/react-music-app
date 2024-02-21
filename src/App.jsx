import React, { useState } from "react";
import Nav from './Nav';
import { Form, List } from "./components";
import { Home, About } from "./pages"
import { Routes, Route } from "react-router-dom"


const App = () => {
  const [formData, setFormData] = useState({ album: "", year: "", song: "" });
  const [entries, setEntries] = useState([]);

  const addEntry = () => {
    setEntries((prevEntries) => [...prevEntries, formData]);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/favorites">
            <div>
              <Form formData={formData} setFormData={setFormData} addEntry={addEntry} />
              <List entries={entries} />
            </div>
          </Route>
          <Route path="*" element={<h1>Not Found</h1>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;