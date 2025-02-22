async function quoteGenerator(){
    try{
        const response = await fetch ('http://api.quotable.io/random')
        // console.log(response)
        const data = await response.json(); //data object banxa.
        console.log(data)
        const quote = document.querySelector('#quote');
        quote.textContent=`"${data.content}"`;
        // console.log(data.content)
        
        
        

    }
    catch (error){
        console.error("error",error)
    }

}
quoteGenerator();
