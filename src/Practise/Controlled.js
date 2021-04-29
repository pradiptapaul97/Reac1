import React, {Component} from 'react'

class Controlled extends Component
{
    constructor(props)
    {
        super(props);
        this.state={name: ''};

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        

    }

    handleChange(event)
    {
        const {name,value}=event.target;
        console.log(name);
        console.log(value);
        this.setState({name: event.target.value});
    }

    handleSubmit(event)
    {
        event.preventDefault();
        alert(this.state.name)
    }


    render()
    {
        return(
            <>
            <h1>Pradipta</h1>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="name" onChange={this.handleChange}></input>
                <input type="text" name="age" placeholder="age" onChange={this.handleChange}></input>
                <button type="submit"> Submit</button>
            </form>
            </>
        )
    }
}

export default Controlled