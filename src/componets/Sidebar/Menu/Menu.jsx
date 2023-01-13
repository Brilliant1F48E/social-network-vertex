import React from "react";
import styles from "./Menu.scss";
import {NavLink} from "react-router-dom";

const Menu = () => {
	return (
		<nav className={styles.menu}>
			<ul className={styles.menu__wrapper}>
				<li><NavLink className={styles.menu__item} to="/news">Новости</NavLink></li>
				<li><NavLink className={styles.menu__item} to="/chats">Чаты</NavLink></li>
				<li><NavLink className={styles.menu__item} to="/profile">Профиль</NavLink></li>
			</ul>
		</nav>
	);
};

export default Menu;