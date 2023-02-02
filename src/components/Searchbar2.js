import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux"
import { getCollections } from '../redux/actions/test.action';
import {
    BellFilled,
    UserOutlined,
    CameraOutlined,
    MenuOutlined,
    SearchOutlined
   } from '@ant-design/icons';
import { red } from '@mui/material/colors';
import { Cascader, Input, Select, Space, TreeSelect } from 'antd';

const { Option } = Select;

const Searchbar2 = ({searchtext, onChangeSearch, onSelect}) => {

  // const [searchtext, setSearchText] = useState();
  // const onChangeSearch = (newValue) => {
  //   setSearchText(newValue);
  // };

     // redux actions & states //////////////////////////
     const dispatch = useDispatch();

     useEffect(() => {
         dispatch(getCollections());
     }, [])
 
     const { collections } = useSelector((state) => state.faq);
 
     //////////////////////////////////////////////////

console.log("collections", collections)

  return (
    <>
    <TreeSelect
    showSearch
    style={{
      width: '100%',
    }}
    value={searchtext}
    dropdownStyle={{
      maxHeight: 400,
      overflow: 'auto',
      color: "black"
    }}
    placeholder="Search high-resolution images"
    allowClear
    treeDefaultExpandAll
    onChange={onChangeSearch}
    treeData={collections}
    onSelect={(o, key) => {
      onSelect(key)
      //console.log("O", o, key);
    }}
  />
    </>
  )
}
export default Searchbar2;