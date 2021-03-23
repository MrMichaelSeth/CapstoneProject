var xhr = new XMLHttpRequest ();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200){
        //JSON Parse 
       let data = JSON.parse(xhr.responseText);
        retreiveData(data);
      }
    }
    xhr.open("GET", "https://www.alphavantage.co/query?function=OVERVIEW&symbol=NKE&apikey=HOQ79Q7MW5T7G7PR");
    xhr.send();

    function retreiveData(data) {
      console.log(data);
    }

    //Make a function render to show all elements on page 

function showTicker(){

}
//  To Do:
//Find a way to breakdown the description passed to make it more reader friendly (possibly use a "Read More" or loop thru descript.)
//Make a function render to show all elements on page 