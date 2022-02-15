import React from 'react';
import {ReactComponent as GithubIcon } from 'assets/github.svg';
import './styles.css';

const Header : React.FC = () => {
	return (
		<>
			<header>
				<nav className="container">
					<div className="wsmovie-nav-content">
						<h1>WS Movie</h1>
						<a href="https://github.com/rabispedro" target="_blank" rel="noreferrer">
							<div className="wsmovie-contact-container">
								<GithubIcon />
								<p className="wsmovie-contact-link">/rabispedro</p>
							</div>
						</a>
					</div>
				</nav>
			</header>
		</>
	);
}

export default Header;
