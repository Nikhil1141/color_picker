import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleClick = (color) => {
    setSelectedColor(color);
    document.body.style.backgroundColor = color;
  };

  return (
    <div>
      {colors.map((color) => (
        <div
          key={color}
          style={{ backgroundColor: color, width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'row', cursor: 'pointer', border: '1px solid black', marginTop: "15px", marginLeft: '50vw' }}
          onClick={() => handleClick(color)}
        />
      ))}
    </div>
  );
};

export default ColorPicker;