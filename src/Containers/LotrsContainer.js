import React, { useState,useEffect } from "react";
import QuoteList from "../Components/QuoteList";
import Quote from "../Components/Quote";

const QuoteContainer = ()=>{
    const [quotes, setQuotes] = useState([])
  
    useEffect(() => {
      const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer WbgnNsMFcCYhGH9-ZOtX'
      }

const fetchData = function (){
    fetch('https://the-one-api.dev/v2/quote', {
        headers: headers
      })
      .then(res => res.json())
      .then (quotes => setQuotes( quotes.docs))

}

  
      fetchData();
    }, []);
  
    return (
      <div>
{quotes? <QuoteList quotes={quotes}/> : null}
      </div>
  
    );
  }
export default QuoteContainer

