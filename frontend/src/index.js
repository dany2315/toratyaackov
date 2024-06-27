import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

//import context
import { SnackbarProvider } from "./context/snackbarContext";
import { AuthProvider } from "./context/authContext";
import { LoadingProvider } from "./context/loadingContext";
import { MenuProvider } from "./context/menuContext";
import { MesureProvider } from "./context/mesureContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <LoadingProvider>
        <SnackbarProvider>
          <MenuProvider>
            <MesureProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </MesureProvider>
          </MenuProvider>
        </SnackbarProvider>
      </LoadingProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
