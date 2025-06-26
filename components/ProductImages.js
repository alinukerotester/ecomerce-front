export default function ProductImages({ images, title }) {
	return (
		<>
			<img style={{ maxWidth: '100%' }} src={images?.[0]} alt={title} />
		</>
	);
}
