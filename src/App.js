import "./App.css";
import { Carousel } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Alert from "./Components/Alert";
import Fake from "./Components/Fake";
import Login from "./Components/Login";
import About from "./Components/About";
import Find from "./Components/Find";
import Form from "./Components/Form";
import Criminals from "./Components/Criminals";
import Search from "./Components/Search";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                </Routes>
                <Routes>
                    <Route exact path="/about" element={<About />} />
                </Routes>
                <Routes>
                    <Route exact path="/criminals" element={<Criminals />} />
                </Routes>
                <Routes>
                    <Route exact path="/find" element={<Find />} />
                </Routes>
                <Routes>
                    <Route exact path="/form" element={<Form />} />
                </Routes>
                <Routes>
                    <Route exact path="/search" element={<Search />} />
                </Routes>
                <Routes>
                    <Route exact path="/alert" element={<Alert />} />
                </Routes>
                <Routes>
                    <Route exact path="/fake" element={<Fake />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
