import React from "react";
import { Link } from "gatsby";

import logo from "../../img/logo.png";
import logoWhite from "../../img/logo-white.png";

const Logo = ({ white, height, className = "", ...rest }) => {
	return (
		<Link to="/" className={`${className}`} {...rest}>
			{/* {white ? <img src={logoWhite} alt="" /> : <img src={logo} alt="" />} */}
			<span className={`h4 text-${white ? "white" : "dark"}`}>DMFNP</span>
		</Link>
	);
};

export default Logo;
