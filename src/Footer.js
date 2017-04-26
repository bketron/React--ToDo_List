import React from 'react'

var styles = {
	footer: {
		marginTop: '20px',
		fontSize: '8px',
		textAlign: 'center',
		fontFamily: 'Helvetica Neue',
		fontWeight: 'lighter',
		color: 'rgba(125,125,125,0.4)'
	},
	line1: {
		margin: 3,
	},
	multi: {
		display: 'flex',
		justifyContent: 'center'
	},
	line2: {
		margin: '3px 0px',
	},
	line3: {
		margin: '3px 0px',
	},
	bolder: {
		fontWeight: 'normal',
		margin: 3,
		position: 'relative',
		top: '-1px',
		color: 'rgba(125,125,125,0.3)'
	}
}

export default React.createClass({
	render() {
		return (
			<div style={styles.footer}>
				<p style={styles.line1}>Double-click to edit a todo</p>

				<div style={styles.multi}>
					<p style={styles.line2}>Created by</p>
					<p style={styles.bolder}>brennen</p>
				</div>

				<div style={styles.multi}>
					<p style={styles.line3}>Part of</p>
					<p style={styles.bolder}>TheIronYard</p>
				</div>
			</div>
		)
	}
})