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
          <li class="nav-item p-1">
          <a class="nav-link text-capitalize fs-6" href="/editorial">Editorial</a>
          </li>
          <li class="nav-item p-1">
          <a class="nav-link text-capitalize fs-6" href="/following">Following</a>
          </li>
        </Tabs>

        </Box>
        <div style={{borderRight: "2px solid gray", height: "25px", marginTop: "15px", marginLeft: "20px"}}></div>
        <Box sx={{ maxWidth: 1100, bgcolor: 'background.paper' }}>
        <Tabs
            value={tab}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
        >
          <li class="nav-item p-1">
          <a class="nav-link" href="/new">Wallpapers</a>
          </li>
          <li class="nav-item p-1">
          <a class="nav-link text-capitalize fs-6" href="/new">3D Renders</a>
          </li>
          <li class="nav-item p-1">
          <a class="nav-link text-capitalize fs-6" href="/new">Travel</a>
          </li>
          <li class="nav-item p-1">
          <a class="nav-link text-capitalize fs-6" href="/new">Nature</a>
          </li>
          <li class="nav-item p-1">
          <a class="nav-link text-capitalize fs-6" href="/new">Street Photograph</a>
          </li>
          <li class="nav-item p-1">
          <a class="nav-link text-capitalize fs-6" href="/new">Experimental</a>
          </li>
          <li class="nav-item p-1">
          <a class="nav-link text-capitalize fs-6" href="/new">Textures & Patterns</a>
          </li>
          <li class="nav-item p-1 text-capitalize fs-6">
          <a class="nav-link" href="/new">Animals</a>
          </li>
          <li class="nav-item p-1">
          <a class="nav-link text-capitalize fs-6" href="/new">Architecture & Interiors</a>
          </li>
          <li class="nav-item p-1">
          <a class="nav-link text-capitalize fs-6" href="/new">Fashion & Beauty</a>
          </li> 
        </Tabs>
        </Box>
      </ul>
    
    </div>
  </div>
</nav>
  
  )
}

export default SecondNav;