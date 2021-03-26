// var xhr = new XMLHttpRequest ();
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4 && xhr.status == 200){
//         //JSON Parse 
//        let data = JSON.parse(xhr.responseText);
//         retreiveData(data);
//       }
//     }
//     xhr.open("GET", "https://www.alphavantage.co/query?function=OVERVIEW&symbol=MMM&apikey=HOQ79Q7MW5T7G7PR");
//     xhr.send();


//   function retreiveData(data){
//     console.log(data);
//   }



//  To Do:
//Find a way to breakdown the description passed to make it more reader friendly (possibly use a "Read More" or loop thru descript.)
//Make a function render to show all elements on page 

let submit = document.getElementById("submit");

submit.addEventListener('click', gatherQuestionData)

// Array used to gather the raw data from the radio buttons
let questionData = []

//will be used to increment and compare the archetype values
let questionDataObj = {
  'hypebeast': 0,
  'vicenarian': 0,
  'millennial': 0,
  'commoner': 0,
  'boomer': 0,
}

//gather raw data and push to array
function gatherQuestionData(){

    let question1 = document.getElementsByName('group1');
    for (let i = 0; i < question1.length; i++){
      if(question1[i].checked){
       questionData.push(question1[i].value);
      } 
    }

    let question2 = document.getElementsByName('group2');
    for (let i = 0; i < question2.length; i++){
      if(question2[i].checked){
        questionData.push(question2[i].value);
      } 
    }


    let question3 = document.getElementsByName('group3');
    for (let i = 0; i < question3.length; i++){
      if(question3[i].checked){
        questionData.push(question3[i].value);
      } 
    }

    let question4 = document.getElementsByName('group4');
    for (let i = 0; i < question4.length; i++){
      if(question4[i].checked){
        questionData.push(question4[i].value);
      } 
    } 

    let question5 = document.getElementsByName('group5');
    for (let i = 0; i < question5.length; i++){
      if(question5[i].checked){
        questionData.push(question5[i].value);
      } 
    }

    let question6 = document.getElementsByName('group6');
    for (let i = 0; i < question6.length; i++){
      if(question6[i].checked){
        questionData.push(question6[i].value);
      } 
    }
    console.log(questionData);

    tallyScore();
    console.log(questionDataObj);

    displayResult();
}

function tallyScore(){

  for (let i = 0; i < questionData.length; i++){
    if (questionData[i] == 'hypebeast') {
      questionDataObj.hypebeast++;
    } 
    else if (questionData[i] == 'vicenarian') {
      questionDataObj.vicenarian++;
    }
    else if (questionData[i] == 'millennial') {
      questionDataObj.millennial++;
    }
    else if (questionData[i] == 'commoner') {
      questionDataObj.commoner++;
    }
    else if (questionData[i] == 'boomer') {
      questionDataObj.boomer++;
    }
  }
}

function retreiveData(data){
    document.getElementById('ticker').innerHTML = data['Symbol'];
    document.getElementById('name').innerHTML = `(${data['Name']})`;
    document.getElementById('description').innerHTML = data['Description'];
    document.getElementById('price').innerHTML = `~ $${data['AnalystTargetPrice']}`;
    document.getElementById('sector').innerHTML = data['Sector'];
    document.getElementById('industry').innerHTML = data['Industry'];
    document.getElementById('cap').innerHTML = `$${data['MarketCapitalization']}`;
    console.log(data);
}

function displayResult(){

  let resultWinner = "";
  for (const property in questionDataObj){

    if (questionDataObj[property] > resultWinner) {
      resultWinner = property;
    }
    // if (questionDataObj[property] < resultWinner){
    //   resultWinner = property;
    // }
    console.log(`the current property is - ${property} : ${questionDataObj[property]}!`);
  }
  console.log(resultWinner)

  // Hypebeast Result Display 
  if (resultWinner == 'hypebeast'){
    
    var xhr = new XMLHttpRequest ();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200){
        //JSON Parse 
       let data = JSON.parse(xhr.responseText);
        retreiveData(data);
      }
    }
    xhr.open("GET", "https://www.alphavantage.co/query?function=OVERVIEW&symbol=TSLA&apikey=HOQ79Q7MW5T7G7PR");
    xhr.send();

    // Archetype
    document.getElementById('archetype').innerHTML = "Hypebeast";
    document.getElementById('p1').innerHTML = 'In your mind, the world is yours to take and "volatility" is your middle name so it is only right that your company is as aggresive as you are.';
    document.getElementById('p2').innerHTML = "You probably wouldn't mind being decked out in Supreme or any other luxury brand with a huge logo";

    // Risk Tolerance
    document.getElementById('risk').innerHTML = "Aggressive";
    document.getElementById('aggro').innerHTML = 

    `
    <div class="progress my-3">
      <div class="progress-bar bg-success" role="progressbar" style="width: 10%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Conservative</div>
    </div>
    <div class="progress my-3">
      <div class="progress-bar bg-warning" role="progressbar" style="width: 15%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Moderate</div>
    </div>
    <div class="progress my-3" >
      <div class="progress-bar bg-danger" role="progressbar" style="width: 75%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Aggressive</div>
    </div>
    `
  }

  //Vicenarian Result
  else if (resultWinner == 'vicenarian'){

    var xhr = new XMLHttpRequest ();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200){
        //JSON Parse 
       let data = JSON.parse(xhr.responseText);
        retreiveData(data);
      }
    }
    xhr.open("GET", "https://www.alphavantage.co/query?function=OVERVIEW&symbol=AAPL&apikey=HOQ79Q7MW5T7G7PR");
    xhr.send();

    // Archetype
    document.getElementById('archetype').innerHTML = "Vicenarian";
    document.getElementById('p1').innerHTML = 'You grew up in that weird space of time where videogames were popular but so was going outside.';
    document.getElementById('p2').innerHTML = 'You have grown up in a world filled that was always on the cutting-edge of technology so it is only right that your stock reflects that';

    // Risk Tolerance
    document.getElementById('risk').innerHTML = "Moderate - Aggressive";
    document.getElementById('aggro').innerHTML = 

    `
    <div class="progress my-3">
      <div class="progress-bar bg-success" role="progressbar" style="width: 15%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Conservative</div>
    </div>
    <div class="progress my-3">
      <div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Moderate</div>
    </div>
    <div class="progress my-3" >
      <div class="progress-bar bg-danger" role="progressbar" style="width: 65%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Aggressive</div>
    </div>
    `
  }

  //Millennial Result
  else if (resultWinner == 'millennial') {

    var xhr = new XMLHttpRequest ();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200){
        //JSON Parse 
       let data = JSON.parse(xhr.responseText);
        retreiveData(data);
      }
    }
    xhr.open("GET", "https://www.alphavantage.co/query?function=OVERVIEW&symbol=SBUX&apikey=HOQ79Q7MW5T7G7PR");
    xhr.send();

    document.getElementById('archetype').innerHTML = "Millennial";
    document.getElementById('p1').innerHTML = 'The classic millenial: cold-brew coffee, avocado toast and living on your own terms';
    document.getElementById('p2').innerHTML = 'However, you\'re getting up there age so it\'s only right that you invest in the last thing you hold "near-and-dear"';

    // Risk Tolerance
    document.getElementById('risk').innerHTML = "Moderate";
    document.getElementById('aggro').innerHTML = 

    `
    <div class="progress my-3">
      <div class="progress-bar bg-success" role="progressbar" style="width: 20%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Conservative</div>
    </div>
    <div class="progress my-3">
      <div class="progress-bar bg-warning" role="progressbar" style="width: 25%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Moderate</div>
    </div>
    <div class="progress my-3" >
      <div class="progress-bar bg-danger" role="progressbar" style="width: 55%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Aggressive</div>
    </div>
    `
  }

  // Commoner Result 
  else if (resultWinner == 'commoner'){

    var xhr = new XMLHttpRequest ();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200){
        //JSON Parse 
       let data = JSON.parse(xhr.responseText);
        retreiveData(data);
      }
    }
    xhr.open("GET", "https://www.alphavantage.co/query?function=OVERVIEW&symbol=JNJ&apikey=HOQ79Q7MW5T7G7PR");
    xhr.send();

    document.getElementById('archetype').innerHTML = "Commoner";
    document.getElementById('p1').innerHTML = 'You\'re not "common" by any means but you may feel like life is starting to slow down; giving you time to realy enjoy it';
    document.getElementById('p2').innerHTML = 'You need a stock that is strong now but still has plenty of room for growth; just like you';
    

    // Risk Tolerance
    document.getElementById('risk').innerHTML = "Moderate - Conservative";
    document.getElementById('aggro').innerHTML = 

    `
    <div class="progress my-3">
      <div class="progress-bar bg-success" role="progressbar" style="width: 35%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Conservative</div>
    </div>
    <div class="progress my-3">
      <div class="progress-bar bg-warning" role="progressbar" style="width: 40%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Moderate</div>
    </div>
    <div class="progress my-3" >
      <div class="progress-bar bg-danger" role="progressbar" style="width: 25%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Aggressive</div>
    </div>
    `
  }

  //Boomer Result 
  else if (resultWinner == 'boomer') {

    var xhr = new XMLHttpRequest ();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200){
        //JSON Parse 
       let data = JSON.parse(xhr.responseText);
        retreiveData(data);
      }
    }
    xhr.open("GET", "https://www.alphavantage.co/query?function=OVERVIEW&symbol=MMM&apikey=HOQ79Q7MW5T7G7PR");
    xhr.send();

    document.getElementById('archetype').innerHTML = "Boomer";
    document.getElementById('p2').innerHTML = 'You feel like life is on cruise control right now and nothing can get you down';
    document.getElementById('p1').innerHTML = 'You may have more "traditional" views so you should invest in a company that has a long history of good results';

    // Risk Tolerance
    document.getElementById('risk').innerHTML = "Conservative";
    document.getElementById('aggro').innerHTML = 

    `
    <div class="progress my-3">
      <div class="progress-bar bg-success" role="progressbar" style="width: 65%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Conservative</div>
    </div>
    <div class="progress my-3">
      <div class="progress-bar bg-warning" role="progressbar" style="width: 30%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Moderate</div>
    </div>
    <div class="progress my-3" >
      <div class="progress-bar bg-danger" role="progressbar" style="width: 15%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Aggressive</div>
    </div>
    `
  }

  else {
    document.getElementById('archetype').innerHTML = 'Error: Something went wrong! Refresh and try again!';
  }
}
//Get a button to show the answer clicked

  submit.addEventListener('click', showResult);

  function showResult(){

    document.getElementById('result').style.display = "block";

    document.getElementById('questions').style.display = "none";
  }
  
//Try Again Button

let retry = document.getElementById('retry');
retry.addEventListener('click', showQuestions)

function showQuestions(){
  
  document.getElementById('questions').style.display = "block";

  document.getElementById('result').style.display = "none";

  //Clear radio Buttons

    let clear1 = document.getElementsByName('group1');
      for (let i = 0; i < clear1.length; i++){
        clear1[i].checked = false; 
      }

      let clear2 = document.getElementsByName('group2');
      for (let i = 0; i < clear2.length; i++){
        clear2[i].checked = false; 
      }


      let clear3 = document.getElementsByName('group3');
      for (let i = 0; i < clear3.length; i++){
        clear3[i].checked = false; 
      }

      let clear4 = document.getElementsByName('group4');
      for (let i = 0; i < clear4.length; i++){
        clear4[i].checked = false; 
      }

      let clear5 = document.getElementsByName('group5');
      for (let i = 0; i < clear5.length; i++){
        clear5[i].checked = false; 
      }

      let clear6 = document.getElementsByName('group6');
      for (let i = 0; i < clear6.length; i++){
        clear6[i].checked = false; 
      }
}