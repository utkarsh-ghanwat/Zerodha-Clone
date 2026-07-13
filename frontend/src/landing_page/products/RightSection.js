import React from 'react';

function RightSection({ imageURL, productName, productDescription, tag }) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6' style={{marginTop:"170px"}}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href={tag}></a>
        </div>
        <div className='col-6'>
          <img src={imageURL}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;