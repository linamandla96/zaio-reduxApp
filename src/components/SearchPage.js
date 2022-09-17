import React from 'react'
import {Button} from '@mui/material';
import "./SearchPage.css";
import SearchResults from './SearchResults';
const SearchPage = () => {
  return (
    <div className='searchPage'>
     <div className='searchPage_info'>
      <p>62 days . 26 August to 30 august . 2 guest</p>
      <h1>Stay nearby</h1>
      <Button variant='outlined'>Cancellation Flexibillity</Button>
      <Button variant='outlined'>Type of place</Button>
      <Button variant='outlined'>Price</Button>
      <Button variant='outlined'>Rooms and beds</Button>
      <Button variant='outlined'>More filters</Button>

     </div>
     <SearchResults
     img="https://th.bing.com/th/id/R.38a2b1a0d33a427c6c420b8ff8576fa6?rik=o01CYj%2bxutOnww&pid=ImgRaw&r=0"
     location ="Private room in center of London"
     title = "Stay at this spacious Edwaedian House"
     description = "1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . WiFi . Ketchen .Free parking"
     star = {3.80}
     price= "R100/night"
     total= "R310 total"

     />
    </div>
  )
}

export default SearchPage
