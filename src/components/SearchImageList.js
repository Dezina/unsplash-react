import React, {useState} from 'react';
import { Image } from 'antd';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button } from 'antd';
import {
  ArrowDownOutlined,
  HeartFilled,
  PlusOutlined
 } from '@ant-design/icons';

export default function SearchImageList({collection}) {

  const [hoverid, setHoverid] = useState(null);

  return (
    <>
    <div class="container-fluid mt-5">

   {collection && collection.map((item) => (
         <ImageList variant="masonry" cols={3} gap={8}>
      
            {item?.preview_photos?.map((item) => (
            <ImageListItem 
            key={item.img} 
            style={{position: "relative"}}
            onMouseEnter={e => {
              setHoverid(item.id)
          }}
          onMouseLeave={e => {
              setHoverid(null)
          }}
          >
                 <Image
                  src={item?.urls?.raw}
                />
                {/* on hover layout */}
                <div 
                  style={item.id === hoverid? {position: "absolute", top: "5%", right: "15%", display: 'block'}: 
                  {position: "absolute", top: "5%", right: "15%", display: 'none'}}
                >
                <Button type="default" icon={<HeartFilled/>} size={10} 
                />
                </div>
                <div 
                style={item.id === hoverid? {position: "absolute", top: "5%", right: "5%", display: 'block'}: 
                  {position: "absolute", top: "5%", right: "5%", display: 'none'}}
                >
                <Button type="default" icon={<PlusOutlined />} size={10} />
                </div>
                <div
                style={item.id === hoverid? {position: "absolute", bottom: "5%", left: "5%", display: 'block'}: 
                {position: "absolute", bottom: "5%", left: "5%", display: 'none'}}
                >
            
                  <img src={collection[0]?.user?.profile_image?.small} 
                  width="30px" height="30px"
                  style={{borderRadius: "50%"}}
                  alt="user"
                  />
                  <span className='ps-2' style={{color: "#fff"}}>{collection[0]?.user?.username}</span>
                </div>
                <div
                style={item.id === hoverid? {position: "absolute", bottom: "5%", right: "5%", display: 'block'}: 
                {position: "absolute", bottom: "5%", right: "5%", display: 'none'}}
                >
                <Button type="default" icon={<ArrowDownOutlined />} size={10} />
                </div>
                {/* /////////////////////////////////// */}
            </ImageListItem>
            ))}
        </ImageList>
           
            ))}

    </div>
    </>
    
  );
}
