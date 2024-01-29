import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { Main } from './Main/Main';
import { LoveCat } from './LoveCat/LoveCat';

export const RouterComponents = () => {
	const [catHeart, setCatHeart] = useState([]);

	const catHeartHandler = text => {
		const newCat = {
			id: uuidv4(),
			img: text,
		};
		setCatHeart([...catHeart, newCat]);
	};

	const deleteCatHandler = id => {
		setCatHeart(catHeart.filter(cat => id !== cat.id));
	};

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route
					path='/love'
					element={<LoveCat catHeart={catHeart} deleteCat={deleteCatHandler} />}
				/>
				<Route path='/' element={<Main catHeart={catHeartHandler} />} />
			</Routes>
		</BrowserRouter>
	);
};
