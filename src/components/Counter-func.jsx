import React, { useState } from 'react';

export const CounterFunc = () => {
	const [counter, setCounter] = useState(0);

	// const handleAdd = () => {
	// 	setCounter(prev => prev + 1);
	// };

	// const handleMinus = () => {
	// 	setCounter(prev => prev - 1);
	// };

	return (
		<div style={{ display: 'flex', alignItems: 'center', marginLeft: '100px' }}>
			<div className='buttons'>
				<button
					onClick={() => setCounter(counter + 1)}
					style={{ marginRight: '10px' }}
				>Add</button>
				<button onClick={() => setCounter(counter - 1)}>Minus</button>
			</div>
			<div style={{ fontSize: '30px', fontWeight: '700' }}>{counter}</div>
		</div>
	);
};
