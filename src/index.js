import ReactDOM from "react-dom/client";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./index.css";

import { ContextProvider } from "./context/AuthContext";
import App from './pages/App';

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <ContextProvider value={500}>
        <App />
    </ContextProvider>
);
