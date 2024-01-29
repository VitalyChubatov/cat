import React from 'react';
import { MdDelete } from 'react-icons/md';
import styles from '.././Components/Main/main.module.css';

export const Cat = ({ cat, deleteCat }) => {
	return (
		<div className={styles.wrapper_cat}>
			<div className={styles.cart_cat}>
				<MdDelete className={styles.icons} onClick={() => deleteCat(cat.id)} />
				<img src={cat.img} alt='lovecat' width={225} height={225} />
			</div>
		</div>
	);
};
