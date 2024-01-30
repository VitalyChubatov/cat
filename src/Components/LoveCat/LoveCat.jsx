import React from 'react';
import styles from '../Main/main.module.css';
import { Cat } from '../Cat';
import { Link } from 'react-router-dom';

export const LoveCat = ({ catHeart, deleteCat }) => {
	return (
		<>
			{catHeart.length === 0 ? (
				<h3>
					Добавьте котиков во вкладке
					<hr />
					<Link to='/' className={styles.catHref}>
						Все котики
					</Link>
				</h3>
			) : (
				<div className={styles.wrapper}>
					{catHeart.map(cat => (
						<Cat
							cat={cat}
							catHeart={catHeart}
							deleteCat={deleteCat}
							key={cat.id}
						/>
					))}
				</div>
			)}
		</>
	);
};
