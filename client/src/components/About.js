import React from "react"


export class About extends React.Component {
    state = {
        imageSrc:"",
    }

    async componentDidMount () {
        const response = await fetch("https://cataas.com/cat/cute/says/hello");
        const imageBlob = await response.blob();
        const imageSrc = window.URL.createObjectURL(imageBlob);

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
                <img src={this.state.imageSrc} alt="lovely cat" />
                <p>something about me</p>
            </div>
        );
    }
    };