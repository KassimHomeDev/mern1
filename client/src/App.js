import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./404";
import AddPost from "./addpost";
import Home from "./home";
import styled from "styled-components";

function App() {
  return (
    <Contenair>
      <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/addpost" element={<AddPost/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </Router>
      </div>
    </Contenair>
  );
}


const Contenair = styled.div`
`
export default App;
