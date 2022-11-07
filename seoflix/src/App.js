import {
    BrowserRouter as Router,
    Routes,
    Route,
 } from "react-router-dom";
 import { RecoilRoot } from 'recoil';
 import Home from "./routes/Home";
 import Detail from "./routes/Detail";
 import Nav from "./components/Nav";

function App() {
    return (
        <RecoilRoot>
            <Router basename={process.env.PUBLIC_URL}>
                {/* <Nav /> */}
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={`/movie/:id`} element={<Detail />} />
                </Routes>
            </Router>
        </RecoilRoot>
    );
}

export default App;
