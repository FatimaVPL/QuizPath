import ReactDOM from "react-dom/client";
import React from "react";
import App from "./Components/App";
import './index.css';
import 'semantic-ui-css/semantic.min.css';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(<App/>);