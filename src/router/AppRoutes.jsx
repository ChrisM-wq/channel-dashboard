import { Routes, Route } from "react-router-dom";
import Content from "../containers/Content/Content";
import Dashboard from "../containers/Dashboard/Dashboard";
import Analytics from "../containers/Analytics/Analytics";
import Customization from "../containers/Customization/Customization";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/content" element={<Content />}/>
            <Route path="/analytics" element={<Analytics />}/>
            <Route path="/customization" element={<Customization />}/>
        </Routes>
    )
};

export default AppRoutes;