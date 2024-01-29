import React, { useEffect, useState } from 'react';
import styles from './main.module.css';

const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=10';

export const Main = ({ catHeart }) => {
	const [kotiki, setKotiki] = useState([]);

	const catHandler = e => {
		const target = e.target.currentSrc;
		catHeart(target);
	};

	useEffect(() => {
		fetch(API_URL)
			.then(res => res.json())
			.then(el => setKotiki(el))
			.catch(err => console.log(err));
	}, []);

	return (
		<div className={styles.wrapper}>
			{kotiki.map(el => (
				<div key={el.id} className={styles.wrapper_cat}>
					<img
						src={el.url}
						alt='kotik'
						width={225}
						height={225}
						onClick={catHandler}
					/>
				</div>
			))}
		</div>
	);
};
