import React, { useEffect, useState } from 'react'

function RandomColor() {

  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length)
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`RGB(${r},${g},${b})`)

  }

  useEffect(() => {
    if (typeOfColor === 'rgb') handleCreateRandomRgbColor()
    else handleCreateRandomHexColor()
  }, [typeOfColor])

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: color,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <button style={
        {

          height: "40px",
          width: "180px",
          marginTop: "25px",
          backgroundColor: "white",
          borderRadius: "6px",
          border: "1px solid black",
          transition: "background-color 0.3s",
          cursor: "pointer",
          ":hover": {
            boxShadow: "0 18px 24px 0 rgba(0,0,0,0.89), 0 24px 50px 0 rgba(0,0,0,0.19)",
          }
        }
      } onClick={() => setTypeOfColor('hex')}>Generate HEX Color</button>
      <button style={
        {

          height: "40px",
          marginTop: "10px",
          width: "180px",
          backgroundColor: "white",
          borderRadius: "6px",
          border: "1px solid black",
          transition: "background-color 0.3s",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "cyan",
            color: "white",
          }
        }
      } onClick={() => setTypeOfColor('rgb')}>Generate RGB Color</button>
      <button style={
        {

          height: "40px",
          marginTop: "10px",
          width: "180px",
          backgroundColor: "white",
          borderRadius: "6px",
          border: "1px solid black",
          transition: "background-color 0.3s",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "cyan",
            color: "white",
          }
        }
      } onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: "30px",
        marginTop: "50px",
        flexDirection: "column",
        gap: "10px"
      }}>
        <h3>{typeOfColor === 'rgb' ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div >
  )
}

export default RandomColor
