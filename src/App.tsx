import { useState } from "react";

function App() {
	const [game, setGame] = useState({
		id: 1,
		player: {
			name: "John",
		},
	});
	const handle = () => {
		setGame({ ...game, player: { ...game.player, name: "Bob" } });
	};
	return (
		<>
			<h2>Game ID : {game.id}</h2>
			<p>Player Name : {game.player.name}</p>

			<button onClick={handle}>Change</button>
		</>
	);
}

export default App;
