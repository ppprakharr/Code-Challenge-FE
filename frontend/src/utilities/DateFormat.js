export const DateFormat=(date)=>{
   return date.toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short' 
      }).replace(/ /g, ' ');
    }