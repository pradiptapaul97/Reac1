import React, {Component} from 'react'
import HigherOrderParent from './HigherOrderParent'

class HigherOrderChild extends Component
{
    render()
    {
        return(
            <h2>{this.props.name}</h2>
        )
    }
}

export default HigherOrderParent(HigherOrderChild)