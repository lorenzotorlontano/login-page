


async function loginLorenzo(){

    var usr = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    var jsontosend = {
        "email": usr,
        "password": pass
    };

    if (usr != '' || pass !='') {

        let response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(jsontosend)
          });
          
          let result = await response.json();
          alert(result.message);


    } else {
        alert('ATTENZIONE: tutti i campi devono essere compilati');
    }
    
}





  
  