import React from "react";
import Quote from "./Quote";

const QuoteList = (({quotes})=>{  
    const quoteItems= quotes.map((quote,index) =>{
return <Quote quote ={quote} key={index} />
    })


    return(
        <div>

            <h1>Quotes</h1>
            <ul>
                {quoteItems}
            </ul>
        </div>
    )
})

export default QuoteList