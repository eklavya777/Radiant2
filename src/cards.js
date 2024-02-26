import React from 'react';
import './cards.css';

const Card = ({ rating, text, mainHighlights, value , index, type, discount}) => {
  return (
    <div className="container">
      <div className="column1">
      {value && (
          <div className='best-choice'>
            <div className='image'>
              <img className='shield' src={require('./IMAGE.png')} alt="Description of the image" />
            </div>
            <div className='value'>{value}</div>
          </div>
        )}
        <p className='index'>{index}</p>
        <img className='computer'src={require('./computer.png')} alt="Description of the image" />
        <p className='type'>{type}</p>  
      </div>
          <div className="column2">
            <div className='text'>
            <p>
              <strong>{text.substring(0, 41)}</strong>
              {text.substring(41)}
              </p>
            </div>
            <p className='main-highlights'><strong>Main Highlights</strong></p>
            <div className='innerdiv'>
              {mainHighlights}
            </div>
            <p className='showMore'>Show more &darr;</p>
          </div>
      <div className="column3">
        <div className='rating'>
          {rating}
          <p className='exceptional'>Exceptional</p>
          <img className='stars'src={require('./rating.png')}/>
        </div>
        <button className='view'>view</button>
      </div>
    </div>
  );
};

export default Card;
