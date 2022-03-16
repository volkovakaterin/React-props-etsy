import React from 'react';

function Listing (props) {
const urlImage = props.image;
const listing_id = props.listing_id
const url = props.url
const title = props.title
const currency_code = props.currency_code
const price = props.price
const quantity = props.quantity
    return (
        <div className='item-list'>
  <div className='item'>
    <div className='item-image'>
      <a href = {url}>
        <img src= {urlImage}/>
      </a>
    </div>
    <div className='item-details'>
      <p className='item-title'>{(title.length > 50)? `${title.split('', 50).join('')}...` : title}</p>
      <p className='item-price'>{(currency_code === "USD")? `$${price}`: (currency_code === "EUR")? `€${price}` : price }</p>
      <p className={(quantity < 10 || quantity === 10)? "item-quantity level-low" : (quantity < 20 || quantity === 20)? "item-quantity level-medium" : "item-quantity level-high"}>{quantity} left</p>
    </div>
  </div>
</div>
    ) 
}

export default Listing;

Listing.defaultProps = {
    items: []
}