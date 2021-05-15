import React from "react";

import { Home } from "./screens";
import ThemeContext from "./context/ThemeContext";

const App = () => {
	return (
		<ThemeContext>
			<Home />
		</ThemeContext>
	);
};

export default App;
