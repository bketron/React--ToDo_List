import React from 'react'

var styles = {
	form: {
		display: 'flex',
		borderBottom: '1px solid #e6e6e6',
	},
	textBox: {
		width: '350px',
		height: '45px',
		lineHeight: '45px',
		fontSize: '20px',
		margin: 'auto',
		display: 'block',
		outline: 'none',
		border: 'none',
		paddingLeft: '20px',
		fontFamily: 'Helvetica Neue',
		fontWeight: 'lighter'
	},
	icon: {
		lineHeight: '45px',
		fontSize: '13px',
		marginLeft: '10px',
		color: 'rgb(230,230,230)'
	}
}

export default React.createClass({
	getInitialState() {
		return {
			task: ''
		}
	},
	handleChange(e) {
		this.setState({
			task:e.target.value
		})
	},
	handleSubmit(e) {
		e.preventDefault()

		this.props.updateList(this.state.task)

		this.setState({
			task: ''
		})
	},
	render() {
		return (
			<form onSubmit={this.handleSubmit} style={styles.form}>
				<i className="fa fa-chevron-down" aria-hidden="true" style={styles.icon}></i>
				<input style={styles.textBox} type="text" placeholder="What needs to be done?" value={this.state.task} onChange={this.handleChange}/>
			</form>
		)
	}

})