import React from 'react'


var styles = {
	listItem: {
		width: '350px',
		margin: 'auto',
		padding: '0 10px',
		display: 'block',
		borderBottom: '1px solid #e6e6e6',
		height: '45px',
		lineHeight: '45px'
	},
	button: {
		float: 'right',
		background: 'none',
		border: 'none',
		outline: 'none',
		lineHeight: '45px',
		fontWeight: 'lighter',
		fontSize: '20px',
		color: '#cc9a9a',
		position: 'relative',
		top: '-3px',
		height: '45px'

	},
	checkbox: {
		position: 'relative',
		top: '-4px'
	},
	label: {
		fontFamily: 'Helvetica Neue',
		fontWeight: 'lighter',
		fontSize: '20px',
		marginLeft: '10px',
		position: 'relative',
		top: '-3px'
	}
}
export default React.createClass({
	getDefaultProps() {
		return {
			item: {}
		}
	},
	getInitialState() {
		return {
			item: {
				id: this.props.id,
				title: this.props.title,
				status: this.props.status
			}
		}
	},
	handleClick(e) {
		e.preventDefault()

		this.props.destroyItem(this.props.id)

	},
	handleChange(){
		var box = document.getElementById(this.props.id)
		
		if(this.state.item.status === 'active'){
			this.setState({
				item: {
					id: this.props.id,
					title: this.props.title,
					status: 'completed'
				}
			})
		} else if(this.state.item.status === 'completed'){
			this.setState({
				item: {
					id: this.props.id,
					title: this.props.title,
					status: 'active'
				}
			})
		}
	},
	render() {
		return (
			<div style={styles.listItem} >
				{console.log(this.state.item)}
				<input style={styles.checkbox} className="listCheck" type="checkbox" id={this.props.id} onChange={this.handleChange}/>
				<label style={styles.label} htmlFor={this.props.id}>{this.props.title}</label>
				<button className="deleteButton" style={styles.button} onClick={this.handleClick}>x</button> 
			</div>
		)
	}
})