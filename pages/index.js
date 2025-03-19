import Featured from '@/components/Featured';
import Header from '@/components/Header';
import { Product } from '@/models/Product';

export default function HomePage({ product }) {
	return (
		<div>
			<Header />
			<Featured />
		</div>
	);
}

export async function getServersideProps() {
	const featuredProductId = '67613e79a0c0e31167663878';
	await mongooseConnect();
	const product = await Product.findById(featuredProductId);
	return {
		props: {
			product,
		},
	};
}
