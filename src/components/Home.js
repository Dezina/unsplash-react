import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import MasonryImageList from "./MasonaryImageList";
import SearchImageList from "./SearchImageList";
import bghome from '../images/bg-home.jpg';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import Searchbar2 from "./Searchbar2";
import { searchCollection, getFaqs } from "../redux/actions/test.action";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () => {

  const dispatch = useDispatch()

  const {collection} = useSelector((state) => state.faq)

  const { faqs } = useSelector((state) => state.faq);

  const [searchtext, setSearchText] = useState("");

  useEffect(() => {
    dispatch(getFaqs());
}, [])

  const onChangeSearch = (newValue) => {
    
    setSearchText(newValue);
  };
  const onSelect = (selectedItem) => {
    dispatch(searchCollection(selectedItem.id))
  }

    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container>
        <Grid item xs={12}>
          <Item>
          <img
              src={bghome}
              srcSet={bghome}
              loading="lazy"
              alt="home images"
              height="500px"
              width="100%"
              style={{objectFit: "cover", opacity: "0.7"}}
            />
            
          <div 
            class="centered"
            style={{position: "absolute", top: "50%", left: "30%", transform: "translate(-50%, -50%)"}}
            >
            <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ color: "#fff", alignItems: "left", left: "-5%", position: "relative" }}
          >
           Unsplash
          </Typography>
            <Typography
            variant="h6"
            Wrap
            component="div"
            sx={{ color: "#fff", alignItems: "left", left: "27%", position: "relative",
             maxWidth: 350, justifyContent: "end", marginTop: "20px" }}
          >
           The internet’s source for visuals.
            Powered by creators everywhere.
          </Typography>
          <div style={{alignItems: "left", left: "30%", position: "relative",
             width: 700, justifyContent: "end", marginTop: "20px", background: "#D3D3D3"}}>
            <Searchbar2 
            searchtext={searchtext}
            onChangeSearch={onChangeSearch}
            onSelect={onSelect}
            /> 
          </div>
          </div>
          </Item>
        </Grid>
      </Grid>
    </Box>

    {
      searchtext === "undefined" || searchtext === ""?(
        <MasonryImageList faqs={faqs}/>
      ):
     (
        <SearchImageList  collection={collection?collection:null}/>
      )
    }
       
        </>
    )
}
export default Home;