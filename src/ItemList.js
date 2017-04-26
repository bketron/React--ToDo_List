import React from 'react'
import ListItem from './ListItem'


var styles= {
	list: {
		listStyleType: 'none',
		padding: 0,
		margin: 0
	}
}
export default React.createClass({
	getDefaultProps() {
		return {
			items: []
		}
	},
	render() {
		return (
			<ul style={styles.list}>
				{this.props.items.map(item=> (
					<li>
						<ListItem destroyItem={this.props.destroyItem} {...item} />
					</li>
				))}
			</ul>
		)
	}

})