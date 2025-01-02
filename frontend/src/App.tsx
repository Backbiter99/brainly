import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { ShareContent } from "./pages/ShareContent";
import Tweet from "./pages/Tweets";
import Video from "./pages/Videos";
import Document from "./pages/Documents";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/signin" />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/tweet" element={<Tweet />} />
                <Route path="/video" element={<Video />} />
                <Route path="/document" element={<Document />} />
                <Route path="/brain/:shareId" element={<ShareContent />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
