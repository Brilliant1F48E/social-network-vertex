import React from "react";
import styles from "./Sidebar.scss";
import Menu from "./Menu/Menu";
const Sidebar = () => {
	return (
		<aside className="sidebar">
			<Menu />
		</aside>
	);
};

export default Sidebar;