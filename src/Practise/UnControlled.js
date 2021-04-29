import React, {Component} from 'react'

class UnControlled extends Component
{
    constructor(props)
    {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.name = React.createRef()
        this.age = React.createRef()
        

    }

    handleChange(event)
    {
        const {name,value}=event.target;
        console.log(name + " :- " + value);
    }

    handleSubmit(event)
    {
        event.preventDefault();
        console.log(this.name.current.value,this.age.current.value)
    }


    render()
    {
        return(
            <>
            <h1>Pradipta </h1>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="name" ref={this.name} onChange={this.handleChange}></input>
                <input type="text" name="age" placeholder="age" ref={this.age} onChange={this.handleChange}></input>
                <button type="submit"> Submit</button>
            </form> 
            </>
        )
    }
}

export default UnControlled