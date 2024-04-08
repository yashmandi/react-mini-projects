import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(
    () => {
      let interval;
      if (running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]
  )

  return (
    <div className="max-w-md mx-auto mt-12 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Stopwatch</h1>
      <div className="text-xl font-semibold">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="w-1/3 mt-2 flex flex-row justify-between font-semibold py-2">
        {running ? (
          <button
            className="border rounded-lg py-1 px-2"
            onClick={() => {
              setRunning(false)
            }}>
            Stop
          </button>
        ) :
          (<button
            className="border rounded-lg py-1 px-2"
            onClick={() => {
              setRunning(true)
            }}>
            Start
          </button>
          )}
        <button
          className="border rounded-lg py-1 px-2"
          onClick={() => { setTime(0) }} >Reset</button>
      </div>
    </div>
  );
}

export default App;
