
function handleSubmit(myText) {
    //event.preventDefault()
   // check what text was put into the form field
    //let myText = document.getElementById('name').value
  
    if (Client.validateUrl(myText) === true){
        // call server route that will call the API
        postData('http://localhost:8081/getsentiment', {formText: myText}).then(function(data){
          document.getElementById("model").innerHTML = data.model
          document.getElementById("score_tag").innerHTML = data.score_tag
          document.getElementById("agreement").innerHTML = data.agreement
          document.getElementById("subjectivity").innerHTML = data.subjectivity
          document.getElementById("confidence").innerHTML = data.confidence
          document.getElementById("irony").innerHTML = data.irony
          return true
      })
    } else {
      alert ("this is not a valide URL")
      return false
    }
}


function onBlur(){
    document.getElementById('name').value = "coucou"
}

const postData = async ( url = '', data = {}) => {
    console.log('inside postData')
    console.log(data)
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),        
    });
    try {
      const newData = await response.json();
      return newData
    }catch(error) {
      console.log("error", error);
    }
}

export { onBlur }
export { handleSubmit }
