const StyledProductsGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 20px;
`;

export default function ProductsGrid() {
	return <StyledProductsGrid></StyledProductsGrid>;
}
