
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

          if(result.token){
            saveDataIntoLocalStorage(usr, pass, result.token);
            window.location.href = "home.html";
           
          }else {
            cleanLocalStorage();
            alert(result.error);
          }
          

          // Salvare nel localstorage i dati inseriti nella login e il token
    } else {
        alert('PAY ATTENTION: ALL THE FIELDS HAVE BEEN COMPLETED!');
    }
}



    function saveDataIntoLocalStorage(usr, pass, token) {
        localStorage.setItem('UserName', usr);
        localStorage.setItem('Password', pass);
        localStorage.setItem('Token', token);
    }

    function cleanLocalStorage(){
        localStorage.removeItem('UserName');
        localStorage.removeItem('Password');
        localStorage.removeItem('Token');
    }


    function checkToken(){
        var islogged = checkLocalStorage();
        if (!islogged){
            alert('PLEASE PAY ATTENTION, YOU ARE NOT LOGGED COME BACKE AND LOG IN!');
            cleanLocalStorage();
            window.location.href = "index.html";
        } else {
            var UserName = localStorage.getItem('UserName');
            var Password = localStorage.getItem('Password');
            var Token = localStorage.getItem('Token');
            document.getElementById("user_Lo").innerHTML = UserName;
            document.getElementById("passw_Lo").innerHTML = Password;
            document.getElementById("token_Lo").innerHTML = Token;
        }
    }

  function checkLocalStorage(){
    var UserName = localStorage.getItem('UserName');
    var Password = localStorage.getItem('Password');
    var Token = localStorage.getItem('Token');
    
    if(UserName && Password && Token){
         return true;
    } else{
        return false;
    }
  }

  function logout(){
    cleanLocalStorage();
    window.location.href = "index.html";
  }