import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6 mb-5'>
          <img src={imageURL}></img>
        </div>
        <div className='col-6 p-5 mt-5'>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>Try Demo<i className="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} style={{ marginLeft: "100px" }}>Learn More<i className="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className='mt-4'>
            <a href={googlePlay}><img src="Media/Images/googlePlayBadge.svg"></img></a>
            <a href={appStore}><img src="Media/Images/appStoreBadge.svg" style={{ marginLeft: "40px" }}></img></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;