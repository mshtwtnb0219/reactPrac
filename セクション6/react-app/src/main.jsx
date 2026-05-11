import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  // 厳密にルールを適用する
  <StrictMode>
    {/*  コンポーネント名は大文字始まりのパスカルケースにすること ファイル名は小文字でもok */}
    <App/>
  </StrictMode>,
);
