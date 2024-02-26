import React from 'react';
import './cards.css';
import './discountcard.css';

const Discountcard = ({ rating, text, mainHighlights, value, index, type, discount }) => {
  return (
        <div className="discount-container">
      <div className="discount-column1">
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
          <div className='discount-div'>
          <div className='discount-text'>
          <strong>{text.substring(0, 22)}</strong>
          {text.substring(22)}
          </div>
          <div className='discount'>{discount}</div>
          <p className='main-highlights'><strong>Main Highlights</strong></p>
          <div className="box">
            <div className="small-box">
                <p className="nums">9.9</p> 
                <p className="text1">Building Responsive</p>
            </div>
            <div className="small-box">
                <p className="nums">8.9</p> 
                <p className="text1">Cool</p>
            </div>
            <div className="small-box">
                <p className="nums">8.9</p> 
                <p className="text1">Docs</p>
            </div>
        </div>
          <p className='p1'>why we love it</p>
          <div className='advantages'>
          <img className='computer'src={require('./tick.png')}/>
          <li className='li'>Documentation</li>
          </div>
          <div className='advantages'>
          <img className='computer'src={require('./tick.png')}/>
          <li className='li'>Easy Use</li>
          </div>
          <div className='advantages'>
          <img className='computer'src={require('./tick.png')}/>
          <li className='li'>Out of Box</li>
          </div>
          <p className='showMore'>Show more &darr;</p>
        </div>
      <div className="discount-column3">
        <div className='rating'>
          {rating}
          <p className='exceptional'>Exceptional</p>
          <img className='stars'src={require('./rating.png')}/>
        </div>
        <button className='discount-view'>view</button>
      </div>
    </div>
      ) 
};

export default Discountcard;
