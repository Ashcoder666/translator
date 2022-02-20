import React,{useState} from 'react'

const Translator = ({fetchdata,newText}) => {
    const [fromText,setFromText] = useState('')
    const [toLang,setToLang] = useState("en")
    
  return (
      <>
    <div className='content-body' >
        <div className='row'>
            <select defaultValue="en" className='select'>
                <option value="en" >English</option>
               
            </select>
            <textarea className='text-area one'  onChange={(e)=>{setFromText(e.target.value)}} ></textarea>
        </div>
        <div className='row'>
            <select className='select' value={toLang} onChange={(e)=>setToLang(e.target.value)}>
                <option value="en">SELECT</option>
                <option value="hi">Hindi</option>
                <option value="mal">Malayalam</option>
                <option value="es">Spanish</option>
                <option value="ar">Arabic</option>
            </select>
            <textarea readOnly className='text-area two' value={newText} ></textarea>
                
        </div>
      
    </div>
    <button onClick={()=>{
        fetchdata(fromText,toLang)
    }}>Translate</button>
    </>
  )
}

export default Translator
