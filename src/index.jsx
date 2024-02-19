import Display from "./Display.jsx"
import Form from "./Form.jsx"
import React from "react"
import {createRoot} from "react-dom/client"
import { AppStateProvider } from "./AppStateContext.jsx";

const root = createRoot(document.getElementById("root"));
root.render(<AppStateProvider><><Display/><Form/></></AppStateProvider>)