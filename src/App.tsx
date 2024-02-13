import './App.css'
import {Route, HashRouter as Router, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";

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
                <Route path="/" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default App
