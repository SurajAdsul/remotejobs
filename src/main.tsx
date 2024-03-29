import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {makeServer} from "./server.ts";

makeServer({environment: "development"})
ReactDOM.createRoot(document.getElementById('root')!).render(
    <App/>
)
