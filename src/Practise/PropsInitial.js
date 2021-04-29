import React ,{Component} from 'react'

class PropsInitial extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        records: [],
        inputValue: this.props.inputValue
      };
    }
  
    render() {
      return <div>{this.props.inputValue}</div>
    }
  }

  export default PropsInitial