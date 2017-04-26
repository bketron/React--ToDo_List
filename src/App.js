import React from 'react'
import TodoForm from './TodoForm'
import ItemList from './ItemList'
import {generate as id} from 'shortid'
import ActionBar from './ActionBar'
import Footer from './Footer'


var styles = {
  main: {
    margin: 'auto',
    width: '400px',
    backgroundColor: 'rgb(245,245,245)',
    padding: '0 25px 15px'
  },
  heading: {
    textAlign: 'center',
    fontSize: '60px',
    fontFamily: 'Helvetica Neue',
    fontWeight: 'lighter',
    color: 'rgba(175, 47, 47, 0.15',
    margin: 0
  },
  container: {
    boxShadow: '0 0 35px rgba(75,75,75,0.1)'
  },
  list: {
    background: '#fff',
  }
}

export default React.createClass({
  getInitialState: function(){
    return {
      items: [],
      activeItems: [],
      completedItems: []

    }
  },
  updateList(task) {
    console.log(task)

    this.setState({
      items: [...this.state.items, {
        title: task,
        id: "id" + id(),
        status: 'active'
      }]
    })
  },
  destroyItem(id) {
    this.setState({
      items: this.state.items.filter(item=>{
        return item.id !== id
      })
    })
  },
  render() {
      return (
        <div style={styles.main}>
          <h1 style={styles.heading}>todos</h1>

          <div id="container" style={styles.container}>
              <div style={styles.list}>
                <TodoForm updateList={this.updateList}/>
                <ItemList destroyItem={this.destroyItem} items={this.state.items}/>
              </div>

              <ActionBar itemList={this.state.items} />
          </div>
        
          <Footer />
        </div>
      )
    }
})
