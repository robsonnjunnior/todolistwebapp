import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
  return (
    <div role='form' className='todoForm'>

        <Grid cols='12 9 10'>
          <input id='description' className='form-control' placeholder='Adicionar uma Tarefa'
            onChange={props.handleChange}
            value={props.description}></input>
        </Grid>

        <Grid cols='12 3 2'>
          <IconButton theme='primary' icon='plus'
            onClick={props.handleAdd} title='Adicionar Nova tarefa' disabled={props.isLoading}></IconButton>
          <IconButton theme='info' icon='search'
            onClick={props.handleSearch} title='Pesquisar tarefa'></IconButton>
          <IconButton theme='default' icon='close'
            onClick={props.handleClear} title='Limpar campo'></IconButton>
        </Grid>

    </div>
  )
}
