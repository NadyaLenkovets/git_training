import React from 'react';

export class CounterClass extends React.Component {
	constructor() {
		super();
		this.state = { counter: 0 };
		this.handleAdd = this.handleAdd.bind(this);
		this.handleMinus = this.handleMinus.bind(this);
	}

	handleAdd() {
		this.setState({ counter: this.state.counter + 1 });
	};

	handleMinus() {
		this.setState({ counter: this.state.counter - 1 });
	};

	render() {
		return <div style={{ display: 'flex', alignItems: 'center', marginLeft: '100px', marginTop: '50px' }}>
			<div className='buttons'>
				<button
					onClick={this.handleAdd}
					style={{ marginRight: '10px' }}
				>Add</button>
				<button
					onClick={this.handleMinus}
				>Minus</button>
			</div>
			<div style={{ fontSize: '30px', fontWeight: '700' }}>{this.state.counter}</div>
		</div>
	};
};
