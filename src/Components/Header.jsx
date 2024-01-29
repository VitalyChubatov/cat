import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header className={styles.header}>
			<div>
				<Link to='/'>Все котики</Link>
			</div>
			<div>
				<Link to='/love'>Любимые котики</Link>
			</div>
		</header>
	);
};
