//Перепишите, используя async/await

async function loadJson(url){
    let response = await fetch(url);

    if (response.status == 200){
        return await response.json();
    } 

    throw new Error(response.status);     
}

loadJson('abra-kadabra.json')
  .catch(console.log);