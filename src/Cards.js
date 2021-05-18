import React from 'react';
import CardItem from './Carditem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
           <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                      <CardItem 
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon jungle"
                        label="Adventure"
                        path="/services"
                      />  
                      <CardItem 
                        src="images/img-2.jpg"
                        text="Travel through the Islands of Bali in a private Cruise"
                        label="Luxury"
                        path="/services"
                      /> 
                    </ul>

                    <ul className="cards_items">
                      <CardItem 
                        src="images/img-4.jpg"
                        text="Experience Football on the top of Himalayan mountain"
                        label="Adventure"
                        path="/services"
                      />  
                      <CardItem 
                        src="images/img-8.jpg"
                        text="Ride through the Sahara desert on the guided Camel tour"
                        label="Adrenaline"
                        path="/services"
                      /> 
                      <CardItem 
                        src="images/img-3.jpg"
                        text="Set Sail in the Atlantic Ocean visiting Uncharted waters"
                        label="Mystery"
                        path="/services"
                      /> 
                    </ul> 
                </div>  
            </div>         
        </div>
    )
}

export default Cards
