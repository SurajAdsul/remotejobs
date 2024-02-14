import './App.css'
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";

function NotFound() {
    return (
        <div style={{ padding: 20 }}>
            NotFound
        </div>
    );
}
function App() {
    return (
        <Router basename="/">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default App
