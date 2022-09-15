import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
      // document.title("TextUtils - Dark Mode");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title("TextUtils - Light Mode");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="TextUtils - Word Counter, Character Counter, Remove Extra Space "
                mode={mode}
              />
            }
          />
          <Route path="/About" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>
      {/* <div className="container my-3">
        <About />
      </div> */}
    </>
  );
}

export default App;
