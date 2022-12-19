import React from 'react';

export const Feature2 = () => {
	const func1 = () => console.log('1');
	const func2 = () => console.log('2');
	const func3 = () => console.log('3');

	const arr = [func1, func2, func3];

	for (let elem of arr) {
		elem();
	}

	return (
		<div>
			Feature 2
		</div>
	);
};
