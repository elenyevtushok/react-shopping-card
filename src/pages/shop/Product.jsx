import React from 'react'
import { useContext } from 'react';
import { ShopContext, ShopContextProvider } from '../../context/ShopContextProvider'

export const Product = (props) => {
	const { id, title, price, description, image } = props.info;
	const { addToCart, cartItems } = useContext(ShopContext)

	const cartItemAmount = cartItems[id]
	return (
		<div className='product'>
			<img src={image} />
			<div className="description">
				<p>
					<b>{title}</b>
				</p>
				<p>${price}</p>
			</div>
			<button className="addToCartBttn" onClick={() => addToCart(id)}>
				Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
			</button>
		</div>
	)
}
