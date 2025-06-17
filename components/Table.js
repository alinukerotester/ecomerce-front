import styled from 'styled-components';

const StyledTable = styled.table`
	width: 100%;
`;

export default function Table(props) {
	return <StyledTable {...props} />;
}
