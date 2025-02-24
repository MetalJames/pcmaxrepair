import { Route, Routes } from "react-router-dom";
import { ContactUs, AboutUs, Home, FAQ, Services } from "../pages";

export const Router = () => {
    return (
        <Routes>
            <Route path="/active_tab?" element={<Home />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/:id" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact_us" element={<ContactUs />} />
        </Routes>
    )
};