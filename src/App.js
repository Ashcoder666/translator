
import './App.css';
import Translator from './Translator'
import Axios from 'axios'
import React,{useState} from 'react';
// import qs from 'qs'

function App() {
  const [newText,setNewtext] = useState('')
  const fetchdata = async (from,to) =>{

    const qs = obj => {
      return new URLSearchParams(obj).toString();
      }
    
   const  headers= {
    'content-type': 'application/x-www-form-urlencoded',
    // 'accept-encoding': 'application/gzip',
    'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
    'x-rapidapi-key': 'c256ecdf6emshcedc5242d337c13p19a862jsnee79af877651'
  }   
  const data = qs({
    q: from,
    source: "en",
    target: to,
    })
     
    
    
    
    Axios.post('https://google-translate1.p.rapidapi.com/language/translate/v2',
    data,
    {
     headers:headers
    }).then(res=>{
      try {
        // console.log(res.data.data.translations[0].translatedText)
        setNewtext(res.data.data.translations[0].translatedText)
      } catch (error) {
        console.log(error)
        alert(error)
      }
    })

  }
 
  return (
    <div className="App">
      <h1>TRANSLATOR +</h1>
     <Translator fetchdata={fetchdata} newText={newText}/>
    </div>
  );
}

export default App;
