import React, { useEffect } from "react";
function Timer() {
  const [seconds, setSeconds] = React.useState(10 * 60);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds("00:00");
    }
  });

  return (
    <div className="App">
      <div>{seconds} seconds</div>
    </div>
  );
}
export default Timer;
