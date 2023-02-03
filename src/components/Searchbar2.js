import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux"
import { getCollections } from '../redux/actions/test.action';
import { TreeSelect } from 'antd';


const Searchbar2 = ({searchtext, onChangeSearch, onSelect}) => {

     // redux actions & states //////////////////////////
     const dispatch = useDispatch();

     useEffect(() => {
         dispatch(getCollections());
     }, [dispatch])
 
     const { collections } = useSelector((state) => state.faq);
 
     //////////////////////////////////////////////////

  return (
    <TreeSelect
    showSearch
    style={{
      width: '100%',
      maxWidth: "700px", 
      background: "#D3D3D3",
      paddingLeft: "0px",
      paddingRight: "0px",
      marginLeft: "-50px"
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
    }}
  />
  )
}
export default Searchbar2;