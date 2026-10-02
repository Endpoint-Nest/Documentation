import { Link } from "react-router";
import "./Topbar.css";

import whiteLogo from "../assets/logos/logo.white.png";

export function Topbar({ left = null, right = null }) {
	return (
		<header className="topbar">
			{left && <div className="topbar-left">{left}</div>}
			{right && <div className="topbar-right">{right}</div>}
		</header>
	);
}

export function DefaultTopBar() {
	return (
		<Topbar
			left={
				<>
					<Link to="/home">
						<img
							src={whiteLogo}
							alt="Endpoint Nest Logo in White"
							height="50px"
						/>
					</Link>
					<Link to="/home" className="h">
						Child 1
					</Link>
					<Link to="/home" className="h">
						Child 2
					</Link>
				</>
			}
			right={
				<>
					<Link to="/home" className="h">
						Child 1
					</Link>
					<Link to="/home" className="h">
						Child 2
					</Link>
				</>
			}
		/>
	);
}
