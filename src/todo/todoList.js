import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo.id}>
        <td className={todo.done === 'S' ? 'markedAsDone' : ''}>{todo.description}</td>
        <td>

          <IconButton theme='success' icon='check' hide={todo.checked}
            onClick={() => props.handleMarkAsDone(todo)} title='Marcar como concluída'></IconButton>
          <IconButton theme='warning' icon='undo' hide={!todo.checked}
            onClick={() => props.handleMarkAsPending(todo)} title='Reativar tarefa' ></IconButton>
          <IconButton theme='danger' icon='trash-o' hide={!todo.checked}
            onClick={() => props.handleRemove(todo)} title='Excluir tarefa'></IconButton>
        </td>
      </tr>
    ))
  }

  return(
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th className='tableActions'>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}
