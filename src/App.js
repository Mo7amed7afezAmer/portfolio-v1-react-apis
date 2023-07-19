import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import asideLinks from "./data-configuration";

// nice scroll
import { ScrollContainer } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";

// components
import NavbarTop from './components/NavbarTop';
import SideNavbar from "./components/SideNavbar";

// pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {

  const [ isOpen, setOpen ] = useState(false);

  function changeOpenStatus() {
    console.log("before  " + isOpen);
    setOpen(!isOpen);
    console.log("after  " + isOpen);
  }

  return (
    <div className="App">
      <ScrollContainer>
        <header className='app-header container'>
          <NavbarTop cha={ changeOpenStatus } ></NavbarTop>
          <SideNavbar op={ isOpen } />
        </header>
        <div className='app-body container'>
            <Router basename="/portfolio-v1-react-apis">
              <Routes>
                <Route path="/" Component={ Home }></Route>
                <Route exact path="/portfolio" Component={ Portfolio }></Route>
                {
                  asideLinks &&
                  asideLinks.map((el) => {
                    return (
                      <Route path={`/${el}`} Component={ Portfolio } key={ el }></Route>
                    )
                  })
                }
              </Routes>
            </Router>
        </div>
      </ScrollContainer>
    </div>
  );
}

export default App;
