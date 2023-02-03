import { Button } from 'antd';
import Searchbar1 from './Searchbar1';
import {
   BellFilled,
   UserOutlined,
   CameraOutlined,
   MenuOutlined,
   SearchOutlined
  } from '@ant-design/icons';
import logo from '../images/logo.png';
import { Select } from 'antd';
const { Option } = Select;
const selectBefore = (
  <Select 
  suffixIcon={<SearchOutlined style={{fontSize: "22px"}}/>}
//   style={{ width: 500, heigth: 500 }}
   >
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select suffixIcon={<CameraOutlined style={{fontSize: "22px"}}/>}>
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);


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
        <a class="nav-link" href="/following" style={{textTransform: "capitalize", color: "#000", fontSize: "15px"}}>Advertise</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/following" style={{textTransform: "capitalize", color: "#000", fontSize: "15px"}}>Blog</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/following" style={{textTransform: "capitalize", color: "#000", fontSize: "15px"}}>Unsplash+</a>
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