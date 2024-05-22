import { Route, Routes } from "react-router-dom";
import { Contents } from "../navbars/Contents";

export const Content = () => {
  return (
    <div className="content-container">
            <Routes>
                <Route path="content" element={<Contents/>} />
            </Routes>

        </div>
  )
}
