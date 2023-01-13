import React from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./componets/Header/Header";
import Sidebar from "./componets/Sidebar/Sidebar";
import Page from "./componets/Page/Page";
import "./styles/styles.scss";


const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<Header/>
				<div className="page-wrapper">
					<Sidebar/>
					<Page />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
