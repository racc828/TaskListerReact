import React from 'react'
import TasksAdapter from '../adapters/TasksAdapter'
import ListsAdapter from '../adapters/ListsAdapter'
import Task from './Task'
import EditList from './EditList'

export default class List extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      showEditListForm: false,
      listName: this.props.listName
    }
  }

  componentDidMount(){
    TasksAdapter.getTasks(this.props.listId)
      .then( filteredTasks => {
        this.setState({tasks: filteredTasks})
      })
    }

    componentWillReceiveProps(props) {
      TasksAdapter.getTasks(props.listId)
        .then( filteredTasks => {
          this.setState({tasks: filteredTasks})
        })
    }

    showEditListForm = () => this.setState({showEditListForm: !this.state.showEditListForm})

    editList = (newListName) => {
      let listId = this.props.listId
      let userId = this.props.userId
      this.props.editList(newListName, listId, userId)
      .then( () => {
        this.setState({showEditListForm: false, listName:newListName})
      })
    }

    deleteList = () => {
      let listName = this.props.listName
      let listId = this.props.listId
      let userId = this.props.userId
      this.props.deleteList(listId, listName, userId)
    }

    deleteTask = (name, description, id, priority, listId) => {
      TasksAdapter.deleteTask(name, description, id, priority, listId)
      .then( filteredTasks => {
        this.setState({tasks: filteredTasks})
      })

    }


render() {

  return(
    <div className="list-container">
      <div className="list-header">
        <div className="buttons-container">
           <button className="inline-button" onClick={this.deleteList}><i className="fa fa-trash"></i>
         </button>
           <button className="inline-button" onClick={this.showEditListForm}> <i className="fa fa-pencil"></i>
</button>
         </div>
         { this.state.showEditListForm ? <EditList editList={this.editList} listName={this.state.listName}/> : <li>{this.props.listName}</li>}
       </div>
      <hr/>
      <div> {this.state.tasks.map((task, i) => <Task listId={this.props.listId} task={task} deleteTask={this.deleteTask} key={i} /> )} </div>
    </div>
  )}
}
