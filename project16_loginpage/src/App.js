import './App.css';

function App() {
  return (
    <div className="App">
      <div className='logo-box'>
        <img src="./x.png" alt="logo" className='logo' />
        <h2>Sign in to X</h2>
        <button>
          <img src="./google.png" alt="google" />
          Sign in with Google
        </button>
        <button>
          <img src="./apple.png" alt="apple" />
          Sign in with Apple
        </button>

    <hr />
    <span>or</span>

    <form action="">
      <input type="text" placeholder='Email or Username' />
      <button>Next</button>
    </form>

    <button>Forgot Password</button>
    <p>Don't have an account? <p>Sign up</p></p>
      </div>

    </div>
  );
}

export default App;
