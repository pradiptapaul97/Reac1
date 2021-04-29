import React,{Component} from 'react';

class Prev extends Component
{
    shouldComponentUpdate(nextProps,nextState){

        console.log("shouldComponentUpdate ",nextProps);
        console.log("shouldComponentUpdate ",nextState);
            if(nextProps!==this.props)
            {
                return true
            }
            else
            {
                return false
            }
    
        }
    
    render() {
        console.log("Prev Render");
        return (
            <>
                <button onClick={this.props.onClick} className="btn btn-primary">Prev</button>
            </>
        );
    }
}

export default Prev