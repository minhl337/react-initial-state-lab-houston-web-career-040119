// your ImageSlider code here!
import React, {Component} from "react";

class ImageSlider extends Component{
    
    constructor(props){
        super(props)
        this.state={
            currentSlideIndex: 0
        }
        
    }
    
    
    render(){
        return(
            <div
                className="ImageSlider" 
            >
                <p>{`I am on slide ${this.state.currentSlideIndex}`}</p>
            </div>
            )
    }
    
    
}

export default ImageSlider