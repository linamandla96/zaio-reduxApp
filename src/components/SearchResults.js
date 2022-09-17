import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './SearchResults.css'
const SearchResults = ({img, location, title, description,star, price, total}) => {
  return (
    <div className='searchResults'>
      <img src='https://th.bing.com/th/id/R.38a2b1a0d33a427c6c420b8ff8576fa6?rik=o01CYj%2bxutOnww&pid=ImgRaw&r=0' alt=''/>
      <FavoriteBorderIcon className='searchResults_heart'/>
      <div className='searchResults_info'>
        <div className='searchResults_infoTop'>
        <p>{location}</p>
        <h3>{title}</h3>
        <p>---</p>
        <p>{description}</p>
        </div>
        <div className='searchResults_infoBottom'>
            <div className='searchResults_stars'>
                <p><strong>{star}</strong></p>
            </div>
            <div className='searchResults_price'>
                <h2>{price}</h2>
                <p>{total}</p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default SearchResults
