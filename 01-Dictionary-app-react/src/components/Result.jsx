/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
// eslint-disable-next-line react/prop-types

const Result = ({dictionary}) => {
    console.log(dictionary);
    
  return (
    <div className="result">
      <h2 className="title-result">{dictionary.word}</h2>
      {
        // eslint-disable-next-line react/prop-types
        dictionary.meanings[2].antonyms.map(antonyms => (
            <p key={antonyms.antonyms} className="part-of-speech">antonyms: {antonyms}</p>
        ))
      }
      <p className="definition">{dictionary.meanings[0].definitions[0].definition}</p> 
    </div>
  )
}

export default Result