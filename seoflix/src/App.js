import {
    BrowserRouter as Router,
    Routes,
    Route,
 } from "react-router-dom";
 import { RecoilRoot } from 'recoil';
 import Home from "./routes/Home";
 import Group from "./routes/Group";
 import Detail from "./routes/Detail";
 import Search from "./routes/Search";
 import Nav from "./components/Nav";

function App() {
    return (
        <RecoilRoot>
            <Router basename={process.env.PUBLIC_URL}>
                <Nav />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={`/:group/:page`} element={<Group />} />
                    <Route path={`/search/:search`} element={<Search />} />
                    <Route path={`/movie/:id`} element={<Detail />} />
                </Routes>
            </Router>
        </RecoilRoot>
    );
}

export default App;
