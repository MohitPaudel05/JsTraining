function isleapyear(year){
    return(year%4===0&& year!==100)||(year%400===0);
}
console.log(isleapyear(2024));