import React, { useState } from "react";

interface Props {
	ends?: number;
}

const ExpandableText = ({ ends = 100 }: Props) => {
	let [end, setEnd] = useState(ends);
	let [state, setState] = useState(false);
	let text =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
	let showMore = () => {
		setEnd(!state ? text.length : ends);
		setState(!state);
	};
	return (
		<>
			{text.slice(0, end)}
			{!state ? "..." : ""}
			<button onClick={showMore}>See {!state ? "More" : "Less"}</button>
		</>
	);
};

export default ExpandableText;
