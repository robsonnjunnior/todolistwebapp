import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../assets/custom.css'

import React from 'react'
import Router from './routes'
import Menu from '../template/menu'

export default props => (

    <div className='container'>
        <Menu />
        <Router />
    </div>
)
