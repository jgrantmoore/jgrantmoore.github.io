import React, { Component } from 'react';
import '../StyleSheets/Technologies.css';

export class Technologies extends Component {

    // Initialize state to hold the image list
    state = {
        images: []
    };

    // Method to import all images dynamically
    importAll = (r) => {
        return r.keys().map(r);
    }

    // Method to update the state with the image list
    createImageList = () => {
        // Make sure to reference `this.importAll` here
        let images = this.importAll(require.context('../Photos/Technologies', false, /\.(png|jpe?g|svg)$/));

        // Update the state with the list of images
        this.setState({ images });
    }

    // Lifecycle method to automatically generate the list when the component mounts
    componentDidMount() {
        this.createImageList(); // Generate the image list automatically when the component mounts
    }

    render() {
        return (
            <div id="technologies-div">
                <h1 id="tech-title">Technologies</h1>
                <div id="technologies-list">
                    {/* Render the images from state */}
                    {this.state.images.map((image, index) => (
                        <img key={index} src={image} alt={`tech-${index}`} className="tech-img" />
                    ))}
                    
                </div>
            </div>
        );
    }
}
