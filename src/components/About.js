import React, { useState } from 'react'

export default function About() {
 const [btnText, setBtnText] = useState("Enable Dark Mode");
 let myDarkStyle = {
    color: 'black',
    backgroundColor: 'white'
 };
 
 const [myStyle, setStyle] = useState(myDarkStyle);
 const toggleMode = () => {
    if(myStyle.color === 'black'){
        setStyle({
            color: 'white',
            backgroundColor: 'black'
        })
        setBtnText("Enable Light Mode")
    } else {
        setStyle({
            color: 'black',
            backgroundColor: 'white'
        })
        setBtnText("Enable Dark Mode")
    }
 } 
  return (
    <div className='container' style={myStyle}>
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
            <div className="card-body" style={myStyle}>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button className="btn btn-primary" style={myStyle}>Go somewhere</button>
            </div>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="card">
            <div className="card-body" style={myStyle}>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button className="btn btn-primary" style={myStyle}>Go somewhere</button>
            </div>
            </div>
        </div>
      </div>
      <button onClick={toggleMode} className="btn btn-primary my-3">{btnText}</button>
    </div>
  )
}
