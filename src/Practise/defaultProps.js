import React ,{Component} from'react'
class MyButton extends Component {
    
    render()
    {
        return(
            <>
            <h1>{this.props.color}</h1>
            </>
        )
    }
  }
  
   MyButton.defaultProps = {
    color: 'red'
  };

  export default MyButton