import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: #5542f6;
`;

export default function PrimaryBtn({ children }) {
	return <StyledButton>{children}</StyledButton>;
}
