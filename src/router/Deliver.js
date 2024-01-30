import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "../views/page"
import BulletinBack from "../views/BulletinBack";

export default function Deliver(){
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<BulletinBack/>}></Route>
                <Route path="/" element={<Page/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
}