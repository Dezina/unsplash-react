import React, {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import "./Menu.css";

const SecondNav = () => {

    const [tab, setTab] = useState(0);

    const handleChange = (newValue) => {
      setTab(newValue);
    };

return(
    
  <nav class="navbar navbar-expand-lg bg-white">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <Box sx={{ bgcolor: 'background.paper' }}>
        <Tabs
            value={tab}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
        >
            <Tab label="Editorial" style={{textTransform: "capitalize", color: "#000"}} >
              <li className="nav-item">
              <a className="nav-link" href="/editorial" style={{fontFamily: "sans-serif"}}>Editorial</a>
              </li>
            </Tab>
            <Tab label="Following" style={{textTransform: "capitalize", color: "#000"}}>
              <li class="nav-item">
              <a class="nav-link" href="/following">Following</a>
              </li>
            </Tab>
        </Tabs>

        </Box>
        <Box sx={{ maxWidth: 1100, bgcolor: 'background.paper' }}>
        <Tabs
            value={tab}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
        >
            <Tab label="Wallpapers" style={{textTransform: "capitalize", color: "#000"}}>
              <li className="nav-item">
              <a className="nav-link" href="/following">Wallpapers</a>
              </li>
            </Tab>
            <Tab label="3D Renders" style={{textTransform: "capitalize", color: "#000"}}>
              <li class="nav-item">
              <a class="nav-link" href="/following">3D Renders</a>
              </li>
            </Tab>
            <Tab label="Travel" style={{textTransform: "capitalize", color: "#000"}}>
              <li class="nav-item">
              <a class="nav-link" href="/following">Travel</a>
              </li>
            </Tab>
            <Tab label="Nature" style={{textTransform: "capitalize", color: "#000"}}>
              <li class="nav-item">
              <a class="nav-link" href="/following">Nature</a>
              </li>
            </Tab>
            <Tab label="Street Photography" style={{textTransform: "capitalize", color: "#000"}}>
              <li class="nav-item">
              <a class="nav-link" href="/following">Street Photography</a>
              </li>
            </Tab>
            <Tab label="Experimental" style={{textTransform: "capitalize", color: "#000"}}>
              <li class="nav-item">
              <a class="nav-link" href="/following">Experimental</a>
              </li>
            </Tab>
            <Tab label="Textures & Patterns" style={{textTransform: "capitalize", color: "#000"}}>
              <li class="nav-item">
              <a class="nav-link" href="/following">Textures & Patterns</a>
              </li>
            </Tab>
            <Tab label="Animals" style={{textTransform: "capitalize", color: "#000"}}>
              <li class="nav-item">
              <a class="nav-link" href="/following">Animals</a>
              </li>
            </Tab>
            <Tab label="Architecture & Interiors" style={{textTransform: "capitalize", color: "#000"}}>
              <li class="nav-item">
              <a class="nav-link" href="/following">Architecture & Interiors</a>
              </li>
            </Tab>
            <Tab label="Fashion & Beauty" style={{textTransform: "capitalize", color: "#000"}}>
              <li class="nav-item">
              <a class="nav-link" href="/following">Fashion & Beauty</a>
              </li>
            </Tab>
        </Tabs>
        </Box>
      </ul>
    
    </div>
  </div>
</nav>
  
  )
}

export default SecondNav;