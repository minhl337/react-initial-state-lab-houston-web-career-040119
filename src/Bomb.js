// your Bomb code here!
import React, {Component} from "react";

class Bomb extends Component{
    
    constructor(props){
        super(props)
        this.state={
            secondsLeft:props.initialCount
        }
    }
    
    
    render(){
        
        let message
        
        if (this.state.secondsLeft===0){
            message = 'Boom!'
        } else{
            message = `${this.state.secondsLeft} seconds left before I go boom!`
        }
        
        return(
            <div>
                {message}
            </div>
            )
    }
    
}


export default Bomb;