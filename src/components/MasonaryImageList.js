import React, {useState} from 'react';
import { Image } from 'antd';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button } from 'antd';
import {
  ArrowDownOutlined,
  HeartFilled,
  PlusOutlined
 } from '@ant-design/icons';

export default function MasonryImageList({faqs}) {

  const [hoverid, setHoverid] = useState(null);

  return (
    <>
    <div class="container-fluid mt-5">
    {
      faqs.length === 0? null: (
        <Box sx={{ width: "100%", height: "100%", overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={3} gap={8}>
            {faqs.map((item) => (
            <ImageListItem 
            key={item.id} 
            style={{position: "relative"}}
            onMouseEnter={e => {
              setHoverid(item.id)
          }}
          onMouseLeave={e => {
              setHoverid(null)
          }}
            >
                {/* <img
                src={item?.urls?.raw}
                srcSet={item?.urls?.small}
                alt={item.title}
                loading="lazy"
                /> */}
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
                  <img src={item?.user?.profile_image?.small} 
                  width="30px" height="30px"
                  style={{borderRadius: "50%"}}
                  alt="user"
                  />
                  <span className='ps-2' style={{color: "#fff"}}>{item?.user?.first_name}</span>
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
        </Box>
      )
    }
    </div>
    </>
    
  );
}
