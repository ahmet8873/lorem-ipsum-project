
import { useState } from 'react';
import './App.css';
import data from './data'
function App() {
  const[count,setCount]=useState(0)
  const[text,setText]=useState([])

  const handleSubmit=(e)=>{
    e.preventDefault();
    let amount=parseInt(count);
    if(amount<0){
      amount=1
    }
    if(amount>8){
      amount=8
    }
   setText(data.slice(0,amount))
 
  }


  return (
    <section className='section-center' >
      <h3>Tired Of Boring Lorem-Ipsum?</h3>
      
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor="amount">
          Paragraphs:
        </label>
        <input type="number" name='amount' id='amount' value={count} onChange={(e)=>setCount(e.target.value)} />
        <button type='submit' className='btn'>GENERATE</button>
      </form>
     
      <article className='lorem-text'>
        {text.map((item,index)=>{
          return(
            <p className='single-p' key={index}>{item}</p>
          )
        })}
        
        
      </article>
    </section>
  );
}

export default App;
