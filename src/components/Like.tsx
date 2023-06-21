import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
	onClick: () => void;
}

const Like = ({ onClick }: Props) => {
	let [like, setLike] = useState(false);

	const toggle = () => {
		setLike(!like);
		onClick();
	};
	if (like) return <AiFillHeart onClick={toggle} color="red" size={30} />;
	return <AiOutlineHeart onClick={toggle} size={30} />;
};

export default Like;
