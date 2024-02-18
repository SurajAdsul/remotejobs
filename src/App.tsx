import './App.css'
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import JobContextProvider from "./context/JobContext.tsx";
import Pricing from "./pages/Pricing.tsx";

function NotFound() {
    return (
        <div style={{padding: 20}}>
            NotFound
        </div>
    );
}

function App() {

    return (
        <JobContextProvider>
            <Router basename="/">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/pricing" element={<Pricing/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </JobContextProvider>
    )
}

export default App
