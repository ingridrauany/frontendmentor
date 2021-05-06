import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={`card ${this.props.cardNumber}`}>
                <div className="card-icon">
                </div>
                <div className="card-title">
                    {this.props.title}
                </div>
                <div className="card-description">
                    {this.props.description}
                </div>
                <button className="card-button">
                    Learn More
                </button>
            </section>
        );
    }
}

export default Card;