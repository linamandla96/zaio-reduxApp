import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Banner from './Banner'
import Card from './Card'
import "./Home.css";
import {listListing} from '../actions/listingActions'



const Home = () => {
     const dispatch = useDispatch();

     const listingList = useSelector(state => state.listingList)
     const {listings, error, loadings} = listingList;

    useEffect(() => {
     dispatch(listListing());


     }, [dispatch])

  return (
    <div className='home'>
      <Banner />
     {loadings? (<h2>Loadings...</h2>): error?(<h3>{error}</h3>): (<div className='home_section'>
      {listings.map((listing) =>(
      <Card
        src={listing.img}
        title={listing.title}
        description= {listing.description}
        price = {listing.price}
        
        /> ))}
      
      
        </div> 
        )} 
      
      
      
      
      {/* <div className='home_section'>
        <Card
        src="https://www.jonesaroundtheworld.com/wp-content/uploads/2020/10/Texas-Airbnb.jpg"
        title="Safety House"
        description= "Beautiful place,with good views"
        
        />
        <Card
        src="https://media.apnarm.net.au/media/images/2017/01/23/b88547415z1_20170123161130_000gq0ft2ta3-0-hldonpsyxjkeyzbbmn2_fct1036x770x7x39_ct1880x930.jpg"
        title="Great Place"
        description= "Great! place to visit and enjoy yourself"
        
        />
        <Card
        src="https://swirled.com/wp-content/uploads/2017/03/717f5adc_original.jpg"
        title="Enjoy Holidays"
        description= "Enjoy your time with peace and happiness"
        
        />
      </div> */}
      {/* <div className='home_section'>
        <Card
        src="https://th.bing.com/th/id/OIP.kUF8WTfjeymiPeunfFqDIwHaE2?pid=ImgDet&rs=1"
        title="Bedroom"
        description= "Feel at home all the time with great,peacefull night"
        price = "R300/night"
        />
        <Card
        src="https://photos.zillowstatic.com/fp/5a27a4f2f727dce712afebbfee1ee895-p_h.jpg"
        title="Hotel Online"
        description= "Great! place to visit and enjoy yourself"
        price="R600/night"
        />
        <Card
        src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/5/5/0/HUHH2017-Modern-Masterpieces_Corossol-StBart_1.jpg.rend.hgtvcom.406.406.suffix/1493990115767.jpeg"
        title="Enjoy Holidays"
        description= "Enjoy your time with peace and happiness"
        price="R450/night"
        />
      </div> */}
    </div>
  )
}

export default Home;
