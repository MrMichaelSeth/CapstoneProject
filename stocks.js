var xhr = new XMLHttpRequest ();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200){
       console.log(xhr.responseText);
      }
    }
    xhr.open("GET", "https://www.alphavantage.co/query?function=OVERVIEW&symbol=JNJ&apikey=HOQ79Q7MW5T7G7PR");
    xhr.send();