import Joke from "./components/Joke";

function App() {
  return (
    <div className="bg-gray-400 min-h-screen flex justify-center items-center">
      <div className="container bg-gray-200 mx-auto px-4 text-center shadow-xl border border-gray-300 rounded-xl w-1/2">
        <h1 className="text-3xl font-bold p-6">Random Joke Generator</h1>
        <div className="flex justify-center ">
          <Joke />
        </div>
      </div>
    </div>
  );
}

export default App;
