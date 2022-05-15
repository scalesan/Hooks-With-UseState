import './App.css';
import {useState} from 'react'
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState('')
  const getQuote = () => {
    axios.get('https://api.quotable.io/random').then(res => {
      console.log(res.data.content)
      setQuote(res.data.content)
    })
.catch(err => {
  console.log(err)
})
  }


  return (
    <div className="App">
     <button onClick={getQuote}></button>
     {quote ? <p>{quote}</p>: null}
    </div>
  );
}

export default App;
