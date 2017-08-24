import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://ec2-34-224-69-89.compute-1.amazonaws.com:8000/api'

export default class Todo extends Component {

    state = { description: '', list: [], isLoading: false, switched: false}

    componentDidMount(){
      this.refresh()
    }

    refresh = (description = '') => {
      const search = description ? `/${description}` : ''

      axios.get(`${URL}${search}`)
      .then(resp => this.setState({...this.state, description , list: resp.data}))
    }

    handleSearch = () => {
      this.refresh(this.state.description)
    }

    handleChange = (e) => {
      this.setState({...this.state, description: e.target.value})
    }

    handleAdd = () => {
      this.setState({ isLoading: true });

      const description = this.state.description

      if(!description == ''){
        console.log(description)
        axios.post(URL + '/add', { description } ).then(resp => {
        this.refresh();
        this.setState({ isLoading: false });
      })
    } else {
      alert('description não pode ser vazia')
      this.setState({ isLoading: false });
    }
  }

    handleClear = () => this.refresh();

    handleRemoveee = (todo) => {
      axios.delete(`${URL}/${todo.id}`)
      .then(resp => this.refresh(this.state.description))
    }

    handleRemove = (todo) => {
      const task = todo

      axios.post(URL + '/del', task)
      .then(resp => this.refresh())
    }

    handleMarkAsDone = (todo) => {
      const task = todo
      task.done = 'S'

      axios.post(URL + '/update', task)
      .then(resp => this.refresh())
    }

    handleMarkAsPending = (todo) => {
      const task = todo
      task.done = 'N'

      axios.post(URL + '/update', task).then(resp => this.refresh())

    }

    toggleSwitch = () => {
        console.log('trocou')
      }

    render(){
      const { isLoading } = this.state;


        return (

            <div>
                <PageHeader
                  name='Tarefas'
                  small='Cadastro'/>

                <TodoForm
                  isLoading={isLoading}
                  description={this.state.description}
                  handleChange={this.handleChange}
                  handleAdd={this.handleAdd}
                  handleSearch={this.handleSearch}
                  handleClear={this.handleClear}/>

                <TodoList
                  list={this.state.list}
                  handleRemove={this.handleRemove}
                  handleMarkAsDone={this.handleMarkAsDone}
                  handleMarkAsPending={this.handleMarkAsPending}/>
            </div>
        )
    }
}
