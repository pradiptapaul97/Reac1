import React, {Component} from 'react'

const HigherOrderParent = (HigherOrderChild) =>
{
    class SubHigher extends Component
    {
        render()
        {
            return(
                <HigherOrderChild name="pradipta"/>
            );
        }
    }


    return SubHigher
}

export default HigherOrderParent