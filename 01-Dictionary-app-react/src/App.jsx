import { useState } from "react"
import Result from "./components/Result"
import Alert from "./components/Alert"

function App() {
  const [word, setWord] = useState("")
  const [errror, setError] = useState("")
  const [data, setData] = useState([])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(word === "") {
      setError("El campo de busqueda no puede estar vacío")

      setTimeout(() => {
        setError("")
      }, 2000)
      return
    }

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      const result = await response.json()
      setData(result)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    <div className="container">
      {
        errror && <Alert>{errror}</Alert>
      }

    <form onSubmit={handleSubmit} className="form">
      <input onChange={e => setWord(e.target.value)} type="text" className="search" placeholder="serene" />
      <button className="search-button">Search</button>
    </form>
    {
      data && data.map(dictionary => (
        <Result
          key={dictionary.word}
          dictionary={dictionary}
        />
      ))
    }
  </div>
    </>
  )
}

export default App
