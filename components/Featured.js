import styled from 'styled-components';
import Center from './Center';

const Bg = styled.div`
	background-color: #222;
	color: #fff;
	padding: 50px 0;
`;
const Title = styled.h1`
	margin: 0;
	font-weight: normal;
`;
const Desc = styled.p`
	color: #aaa;
	font-size: 0.8rem;
`;
const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 0.8fr 1.2fr;
	gap: 40px;
	img {
		max-width: 100%;
	}
`;
const Column = styled.div`
	display: flex;
	align-items: center;
`;

export default function Featured() {
	return (
		<Bg>
			<Center>
				<Wrapper>
					<Column>
						<Title>Pro anywhere</Title>
						<Desc>Get the pro experience with our new Pro plan</Desc>
					</Column>
					<Column>
						<img
							src='http://localhost:3000/_next/image?url=https%3A%2F%2Fnext-ecomercity-alinukes.s3.amazonaws.com%2F1742379958228.webp&w=1920&q=75'
							alt=''
						/>
					</Column>
				</Wrapper>
			</Center>
		</Bg>
	);
}
