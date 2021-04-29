
import React,{Component} from 'react';

class Next extends Component
{
    render() {
        console.log("Next Render");
        return (
            <>
                <button onClick={this.props.onClick} className="btn btn-primary">Next</button>
            </>
        );
    }
}

export default Next