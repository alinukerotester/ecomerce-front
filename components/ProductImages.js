export default function ProductImages({ images, title }) {
	return (
		<>
			<img src={images?.[0]} alt={title} />
		</>
	);
}
