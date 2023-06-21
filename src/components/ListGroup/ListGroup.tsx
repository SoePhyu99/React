import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

let List = styled.ul`
	list-style: none;
	padding: 0;
	background: yellow;
`;
interface Active {
	active: boolean;
}
let ListItem = styled.li<Active>`
	padding: 5px 0;
	background: ${(props) => (props.active ? "blue" : "red")};
`;

interface Props {
	items: string[];
	heading: string;
	onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
	let [selectedIndex, setSelectedIndex] = useState(-1);

	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 && <p>No item found</p>}
			<List>
				{items.map((item, index) => (
					<ListItem
						active={selectedIndex === index}
						key={index}
						onClick={() => {
							setSelectedIndex(index);
							onSelectItem(item);
						}}
					>
						{item}
					</ListItem>
				))}
			</List>
		</>
	);
}

export default ListGroup;
