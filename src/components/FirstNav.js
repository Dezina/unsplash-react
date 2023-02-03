import { Button } from 'antd';
import Searchbar1 from './Searchbar1';
import {
   BellFilled,
   UserOutlined,
   MenuOutlined,
  } from '@ant-design/icons';
import logo from '../images/logo.png';

const FirstNav = () => (

    <nav class="navbar navbar-expand-lg bg-white">
    <div class="container-fluid">
    <a class="navbar-brand" href="/">
    <img
              src={logo}
              alt="logo"
              height="30px"
              width="30px"
              style={{objectFit: "contain"}}
            />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" style={{width: "800px"}}>
         <Searchbar1 />
        </li>
      
        <li class="nav-item">
        <a class="nav-link text-capitalize fs-6" href="/following">Advertise</a>
        </li>
        <li class="nav-item">
        <a class="nav-link text-capitalize fs-6" href="/following">Blog</a>
        </li>
        <li class="nav-item">
        <a class="nav-link text-capitalize fs-6" href="/following">Unsplash+</a>
        </li>
        <li class="nav-item">
        <Button>Submit a photo</Button>
        </li>
        <li class="nav-item">
        <Button type='text'><BellFilled style={{fontSize: "22px"}} /></Button>
        </li>
        <li class="nav-item">
        <Button shape="circle" type='text' icon={<UserOutlined />} />
        </li>
        <li>
        <Button type='text'><MenuOutlined style={{fontSize: "22spx"}} /></Button>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
  )

export default FirstNav;