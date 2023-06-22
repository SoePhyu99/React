import React, { useEffect, useState } from "react";

const Product = ({ category }: { category: string }) => {
	let [product, setProduct] = useState<string>();
	useEffect(() => {
		console.log("Fetching product in ", category);
		setProduct(category);
	}, [category]);
	return <div>Product</div>;
};

export default Product;
