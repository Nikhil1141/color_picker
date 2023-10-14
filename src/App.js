import React from "react";
import ColorPicker from './ColorPicker'

const colors = ["red", "green", "blue", "pink", "yellow", "orange", "purple", "brown", "gray", "black", "cyan", "magenta", "lime", "olive", "navy"];

const App = () => {
  return (
    <div>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
