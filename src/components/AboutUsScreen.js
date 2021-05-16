import React from 'react'
import '../static/css/aboutUs.css'

export default function AboutUsScreen() {

  function clickAshay(){
    console.log('The Ashay was clicked.');
  }
  function clickLabdhi(){
    console.log('The Labdhi was clicked.');
  }
  function clickSohum(){
    console.log('The Sohum was clicked.');
  }

  return (
    <div className="full__page">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="about__us" style = {{color: 'white'}}>About The Leaders</h1>
      <div className="leaders__page" >
        <div className="leaders__div" onClick={clickAshay}>
          <div className="bio__div">
            Ashay Parikh
          </div>
          <div>
            <img className="person__pic" src="/ashay.jpg" alt="ASHAY" ></img>
          </div>
        </div>
        <div className="leaders__div" onClick={clickLabdhi}>
          <div className="pic__div" >
            <img className="person__pic" src="/labdhi.jpg" alt="LABDHI" ></img>
          </div>
          <div className="bio__div">
            Labdhi Jain
          </div>
        </div>
        <div className="leaders__div" onClick={clickSohum}>
          <div className="bio__div">
            Sohum Bhole
          </div>
          <div className="pic__div">
            <img className="person__pic" src="sohum.jpg" alt="SOHUM"></img>
          </div>
        </div>
      </div>
      <div className='light x1'></div>
      <div className='light x2'></div>
      <div className='light x3'></div>
      <div className='light x4'></div>
      <div className='light x5'></div>
      <div className='light x6'></div>
      <div className='light x7'></div>
      <div className='light x8'></div>
      <div className='light x9'></div>
    </div>
  );
}
