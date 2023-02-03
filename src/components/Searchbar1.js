import React from "react";
import {Input, Select} from 'antd';
import {
    CameraOutlined,
    SearchOutlined
   } from '@ant-design/icons';

const { Option } = Select;

const selectBefore = (
  <Select 
  suffixIcon={<SearchOutlined style={{fontSize: "22px"}}/>}
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

const Searchbar1 = () => {

  return (
    <Input 
        addonBefore={selectBefore} 
        addonAfter={selectAfter} 
        defaultValue="Search high-resolution images"
        size="large"
         />
  )
}
export default Searchbar1;