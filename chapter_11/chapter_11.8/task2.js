//Перепишите, используя async/await

class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
}

async function loadJson(url){
    let response = await fetch(url);

    if (response.status == 200){
        return await response.json();
    }

    throw new HttpError(response);
}

async function demoGithubUser(){
    let user;

    while(true){    
        let name = prompt("Enter login", "iliakan");

        try{
            user = await loadJson(`https://api.github.com/users/${name}`);
            break;
        } catch(err){
            if (err instanceof HttpError && err.response.status == 404) {                
                alert("User is incorrect. Try again.");
              } else {                
                throw err;
              }
        }
    }

    alert(`Full name : ${user.name}.`);
    return user;
}

demoGithubUser();
