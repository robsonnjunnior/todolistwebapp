import React from 'react'
import If from './if'

export default ({ hide, theme, onClick, icon, ...rest }) => (
    <If test={!hide}>
      <button {...rest} className={'btn btn-'+ theme}
          onClick={onClick}>
          <i className={'fa fa-'+ icon}></i>
      </button>
    </If>
)
