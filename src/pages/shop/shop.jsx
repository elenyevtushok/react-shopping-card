import React, {useState, useEffect} from 'react'
import { Product } from './Product'
import "./shop.css"

export const Shop = () => {
	const [products, setProducts] = useState([])
	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(data => {
				setProducts(data)
			})
	}, [])

	return (
		<div className = "shop">
			<div className = "shopTitle">
				<h1>Cool Shop</h1>
			</div>
			<div className="products">
				{products.map((product) => (
					<Product info = {product} />
				))}
			</div>
		</div>
	)
}
