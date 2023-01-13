import React from 'react';
import styles from "./Logos.scss";
import {NavLink} from "react-router-dom";
import {HandySvg} from "handy-svg";
import IconLogo from "../../assets/icons/icon-logo.svg";

const Logo = () => {
	return (
		<NavLink className={styles.logo} to="/">
			<HandySvg className={styles.logo__icon} src={IconLogo} />
			VERTEX
		</NavLink>
	);
};

export default Logo;