import React from 'react';
import './card.css';

const Card = ({ title, content }) => {
    return (
        <div className="box">
            <div className="card">
                <div className="title">
                    Card 1
                </div>
                <div className="content">
                    Card1 content
                </div>
            </div>
            <div className="card">
                <div className="title">
                Card 2
                </div>
                <div className="content">
                Card 2 content 
                </div>
            </div>
            <div className="card">
                <div className="title">
                    {title}
                </div>
                <div className="content">
                    {content}
                </div>
            </div>
            <div className="card">
                <div className="title">
                    {title}
                </div>
                <div className="content">
                    {content}
                </div>
            </div>
        </div>
        

    );
}

export default Card;