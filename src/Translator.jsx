import React,{useState} from 'react'

const Translator = () => {
    const [fromText,setFromText] = useState('')
    const [toLang,setToLang] = useState("en")
    
  return (
      <>
    <div className='content-body' >
        <div className='row'>
            <select defaultValue="en" className='select'>
                <option value="en" >English</option>
               
            </select>
            <textarea className='text-area one' ></textarea>
        </div>
        <div className='row'>
            <select className='select'>
                <option value="">English</option>
                <option value="">Hindi</option>
                <option value="">Malayalam</option>
                <option value="">Spanish</option>
                <option value="">Arabic</option>
            </select>
            <textarea readOnly className='text-area two' ></textarea>
                
        </div>
      
    </div>
    <button>Translate</button>
    </>
  )
}

export default Translator
