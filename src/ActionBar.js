import React from 'react'

var styles={
	main: {
		height: '50px',
	},
	actionBar: {
		backgroundColor: 'white',
		fontFamily: 'Helvetica Neue',
		fontWeight: 'lighter',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: '45px',
		lineHeight: '45px',
		width: '350px',
		padding: '10px 5px 10px 10px',
		borderBottom: '1px solid rgba(125,125,125,0.1)'
	},
	button: {
		fontFamily: 'inherit',
		fontWeight: 'inherit',
		fontSize: '12px',
		backgroundColor: 'none',
		background: 'none',
		outline: 'none',
		border: '1px solid rgba(175, 47, 47, 0.2)',
		borderRadius: '3px',
		color: '#777',
		margin: '0 2px',
		position: 'relative',
		top: '-10px'
	},
	itemsLeft: {
		fontFamily: 'inherit',
		fontWeight: 'inherit',
		fontSize: '12px',
		textAlign: 'left',
		color: '#777',
		position: 'relative',
		top: '-10px'
	},
	clear: {
		fontFamily: 'Helvetica Neue',
		fontWeight: 'inherit',
		fontSize: '12px',
		background: 'none',
		border: 'none',
		outline: 'none'
	},
	underboxes: {
		width: 345
	},
	underTopBox:{
		height: '3px',
		width: '344px',
		backgroundColor: 'white',
		borderBottom: '1px solid rgba(125,125,125,0.1)',
		position: 'relative',
		left: '3px'
	},
	underBotBox: {
		height: '2px',
		width: '338px',
		backgroundColor: 'white',
		position: 'relative',
		left: '6px'
	},
}
export default React.createClass({
	getDefaultProps: function() {
		itemList: []
	},
	render: function(){
		var itemPlural = "items"

		if(this.props.itemList.length === 1) {
			itemPlural = "item"
		}

		if(this.props.itemList.length !== 0) {
			return (
				<div style={styles.main}>
					<div id="actionbar" style={styles.actionBar}>
						<span style={styles.itemsLeft}>{this.props.itemList.length} {itemPlural} left</span>
						<div>
							<button style={styles.button}>All</button>
							<button style={styles.button}>Active</button>
							<button style={styles.button}>Completed</button>
						</div>
						<button style={styles.clear}>Clear completed</button>
					</div>

					<div id="underboxes" style={styles.underboxes}>
						<div style={styles.underTopBox}></div>
						<div style={styles.underBotBox}></div>
					</div>
				</div>
			)
		}
		else {
			return (
				<div></div>
				)
		}
	}
})