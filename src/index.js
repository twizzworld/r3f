import { createRoot } from "react-dom/client"
import { Suspense } from "react"
import App from "./App.js"
import { Overlay } from "./DirtyFigmaExport"
import "./style.css"
import "./tailwind.css"

createRoot(document.getElementById("root")).render(
  <>
      <App />
    <Overlay />
  </>,
)