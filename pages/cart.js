import Button from '@/components/Button';
import { CartContext } from '@/components/CartContext';
import Center from '@/components/Center';
import Header from '@/components/Header';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

const ColumnsWrapper = styled.div`
	display: grid;
	grid-template-columns: 1.3fr 0.7fr;
	gap: 40px;
	margin-top: 40px;
`;

const Box = styled.div`
	background-color: #fff;
	border-radius: 10px;
	padding: 30px;
`;

export default function CartPage() {
	const { cartProducts } = useContext(CartContext);
	const [products, setProducts] = useState([]);
	useEffect(() => {
		if (cartProducts.length > 0) {
			axios
				.post('/api/cart', { ids: cartProducts })
				.then((response) => setProducts(response.data));
		}
	}, [cartProducts]);
	return (
		<>
			<Header />
			<Center>
				<ColumnsWrapper>
					<Box>
						{!cartProducts?.length && <div>Your cart is empty</div>}
						{products?.length > 0 && (
							<>
								<h2>Cart</h2>
								{products.map((product) => (
									<div>{product.title}</div>
								))}
							</>
						)}
					</Box>
					{!!cartProducts?.length && (
						<Box>
							<h2>Order info</h2>
							<input type='text' placeholder='Address' />
							<input type='text' placeholder='Address 2' />
							<Button black block>
								Continue to next step
							</Button>
						</Box>
					)}
				</ColumnsWrapper>
			</Center>
		</>
	);
}
