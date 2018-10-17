class Format{
    static toDate (dateString){
      var options = { 
        year: 'numeric', 
        month: 'short', 
        day: '2-digit', 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit' 
      };
      let date = new Date(dateString);
      let dateStringRes = date.toLocaleDateString("en-us",options).split(' ');
      if(dateStringRes[3].length===7){
        dateStringRes[3] = "0"+dateStringRes[3];
      }
      return dateStringRes.join(' ');
    }
}

export default Format;