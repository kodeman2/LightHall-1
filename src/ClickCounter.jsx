import { useState, useEffect } from 'react';

function ClickCounter() {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    // Load the previous click count from storage
    const storedCount = parseInt(localStorage.getItem('clickCount'));
    if (!isNaN(storedCount)) {
      setClickCount(storedCount);
    }
  }, []);

  const handleClick = () => {
    // Increment the click count and update the display
    const newCount = clickCount + 1;
    setClickCount(newCount);

    // Save the new count to storage
    localStorage.setItem('clickCount', newCount);
  };

  const handleReset = () => {
    // Reset the click count to 0 and update the display
    setClickCount(0);

    // Remove the click count from storage
    localStorage.removeItem('clickCount');
  };

  return (
    <div className="clickcount">
      <h1>Chasing the Clicks</h1>
      <p>Clicks: {clickCount}</p>
      <div className="buttons">
          
      <button onClick={handleClick}>Click me!</button>
      <button onClick={handleReset}>Reset</button>
    </div>
    </div>
  );
}

export default ClickCounter;
