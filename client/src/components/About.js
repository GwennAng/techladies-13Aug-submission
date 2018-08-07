import React from "react"


export class About extends React.Component {
    state = {
        imageSrc:"",
    }

    
    async componentDidMount () {
        //const response = await fetch("https://cataas.com/cat/cute/says/hello");
      // const response = await fetch("Gwenn-4-BW-pic.JPG");
       // const imageBlob = await response.blob();
      //  const imageSrc = window.URL.createObjectURL(imageBlob);
       const imageSrc = "Gwenn-4-BW-pic.JPG";

        this.setState({
            imageSrc:imageSrc,
        });
        
    }
    render (){
        if (!this.state.imageSrc) {
            return <p> loading....</p>
        }
        return (
            <div>
                <h1>{this.props.title}</h1> 
                <img src={this.state.imageSrc} alt="cat" />
                
            </div>
        );
    } 
    };


    // <p>Consultant by night, Urban dreamer by night. Enjoys writing her life story though she is protagist in her novel</p>
