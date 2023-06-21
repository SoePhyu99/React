interface Props {
	itemsCount: number;
}

const Navbar = ({ itemsCount }: Props) => {
	return <div>Navbar : {itemsCount}</div>;
};

export default Navbar;
