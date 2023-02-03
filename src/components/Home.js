import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import MasonryImageList from "./MasonaryImageList";
import SearchImageList from "./SearchImageList";
import bghome from '../images/bg-home.jpg';
// import { styled } from '@mui/material/styles';
import Searchbar2 from "./Searchbar2";
import { searchCollection, getFaqs } from "../redux/actions/test.action";


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
        <div className="container-fluid p-5 text-center" 
        style={{backgroundImage: `url(${bghome})`, color: "#fff", width: "auto", height: "500px"}}>
           <div className="row">
            <div className="col-2">

            </div>
            <div className="col-8">
            <div className="row">
            <div className="col-4">
            <div className="mt-5 mb-3">
            <h1 className="text-center fw-bolder">Unsplash</h1>
            </div>
            </div>
            </div>
            <div className="row">
           
            <div className="col-12">
            <h5 className="text-center mb-4" style={{maxWidth: "370px", overflowWrap: "break-word"}}>
            The internet’s source for visuals.
            Powered by creators everywhere.
            </h5>
            <Searchbar2 
            searchtext={searchtext}
            onChangeSearch={onChangeSearch}
            onSelect={onSelect}
            /> 
            </div>
            </div>
           
            </div>
            <div class="col-2"> </div>
           </div>
            
        </div>

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