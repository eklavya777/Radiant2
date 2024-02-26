import React from 'react';
import Header from './header';
import Card from './cards';
import BelowHeader from './belowheader';
import Discountcard from './discountcard';
import Bottom from './relatedDeals';

function App() {
  const cardData = [
    { index:'1', value: 'Best Choice', imageSrc: 'search.webp', type:'Builder 1', text: 'WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',mainHighlights: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides',rating: '9.8' },
    { index:'2', value: 'Best Value',imageSrc: 'image2.jpg', type:'Builder',text: 'SiteCraft 68-Inch Ultimate Web Design Studio- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)',mainHighlights:'[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.', rating: '9.5' },
    { index:'3', imageSrc: 'image3.jpg', type:'Builder 1',text: 'WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',mainHighlights:'[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.', rating: '9.3' },
   
  ];

  return (
    <div className="App">
      <Header />
      <BelowHeader />
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
      <Discountcard 
        text= 'CDK Resposive Builder: An extensive library of widgets and apps, and detailed step-by-step guides'
        discount='26% off'
        index='4'
        type='CDK'
        rating='9.1'
       />
       <Bottom />
    </div>
  );
}
export default App;

