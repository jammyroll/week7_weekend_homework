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
      const fetchData = async () => {
        const rawQuotes = await fetch('https://the-one-api.dev/v2/quote', {
          headers: headers
        })
        const fullquotes = await rawQuotes.json();
        const quotes = fullquotes.docs;
        setQuotes(quotes)
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
{quotes? <QuoteList quotes={quotes}/> : null}
      </div>
  
    );
  }
export default QuoteContainer

