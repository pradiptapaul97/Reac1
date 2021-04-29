import React,{Component} from 'react';
import Prev from './prev';
import Next from './next';


class Parent extends Component
{
    //Mounting first method
    constructor(props)
    {
        super(props)
        this.state={
            p:[
            {text:"আমরা কি চা খাবো না?",pic:"mskr1.jpeg"},
            {text:"আমরা খাবোনা চা?",pic:"mskr.jpeg"},
            {text:"চলো চা খেতে যাই! যাবে?",pic:"mskr2.jpeg"}
        ],
        showPerson:0
        }
        console.log("LifeCycle method constructor is working");
    }

    clicknext=()=>{

        let sh = this.state.showPerson


        if(sh===2)
        {
            this.setState({
                showPerson:0
               })
        }
        else{
            sh=sh+1
            this.setState({
                showPerson:sh
               })
        }

    }

    clickprev=()=>{

        let shp = this.state.showPerson


        if(shp===0)
        {
            this.setState({
                showPerson:2
               })
        }
        else{
            shp=shp-1
            this.setState({
                showPerson:shp
               })
        }

    }

    //Mounting second method
    static getDerivedStateFromProps(props,state)
    {
        console.log("LyfeCycle method getDerivedStateFromProps");
        return null;
    }
    //Mounting fourth method
    componentDidMount()
    {
        console.log("LyfeCycle method componentDidMount");
    }
    //Mounting third method  
    render(){
        console.log("LyfeCycle method Render");
        return(

            <div>
                <img src={this.state.p[this.state.showPerson].pic} className="card-img-top" alt="..."></img>
                <h5 className="card-title">{this.state.p[this.state.showPerson].text}</h5>
                <Prev onClick={this.clickprev}/>
                <br></br>
                <Next onClick={this.clicknext}/>
            </div>
        )
    }

    componentDidUpdate()
    {
        console.log("LyfeCycle method componentDidUpdate");
    }

    componentWillUnmount()
    {
        console.log("LyfeCycle method componentWillUnmount");
    }
    

}

export default Parent