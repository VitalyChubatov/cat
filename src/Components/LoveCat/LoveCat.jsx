import React from 'react';
import styles from '../Main/main.module.css';
import { Cat } from '../Cat';

export const LoveCat = ({ catHeart, deleteCat }) => {
	return (
		<div className={styles.wrapper}>
			{catHeart.map(cat => (
				<Cat cat={cat} catHeart={catHeart} deleteCat={deleteCat} key={cat.id} />
			))}
		</div>
	);
};
