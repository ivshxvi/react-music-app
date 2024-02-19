import Display from "./Display.jsx"
import Form from "./Form.jsx"
import React from "react"
import {createRoot} from "react-dom/client"

const root = createRoot(document.getElementById("root"));
root.render(<><Display/><Form/></>)