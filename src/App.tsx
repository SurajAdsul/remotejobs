import './App.css'
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import {createServer} from "miragejs"
import JobContextProvider from "./context/JobContext.tsx";

createServer({
    routes() {
        this.get("/api/users", () => [
            {id: "1", name: "Luke"},
            {id: "2", name: "Leia"},
            {id: "3", name: "Anakin"},
        ])
        this.passthrough("https://remotive.com/**")
    },
})

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
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </JobContextProvider>
    )
}

export default App
