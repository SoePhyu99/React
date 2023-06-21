import { useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
	let [product, setProduct] = useState(["product1", "product2"]);
	return (
		<>
			<Navbar itemsCount={product.length}></Navbar>
			<Cart items={product} onClear={() => setProduct([])}></Cart>
		</>
	);
}

export default App;
