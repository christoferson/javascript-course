
const authHeaders = {Authorization: 'Bearer ' +
  "875943759843759357943", 'Content-Type': 'application/json'};

window.postJson = function (url, data) {
  return fetch(urlLocation + url, {method: "POST", headers:
    authHeaders, body: JSON.stringify(data)}).then((res) => res.json());
}

window.getJson = function (url) {
  //return fetch(urlLocation + url, {method: "GET", headers: authHeaders})
  //  .then((res) => res.json());
return fetch(url, {method: "GET", headers: authHeaders})
    .then((res) => res.json());

}

window.deleteJson = function (url) {
  return fetch(urlLocation + url, {method: "DELETE", headers: authHeaders})
    .then((res) => res.json());
}

window.putJson = function (url) {
  return fetch(urlLocation + url, {method: "PUT", headers: authHeaders})
    .then((res) => res.json());
}

window.onLoadScreen = async function() {
    console.log("calling remote...");
    const response = await getJson("https://reqres.in/api/users?page=2").then( (res) => { return res; } );
    
    //if (response.ok) {
       // let json = await response.json();
        //console.log(response);
        //console.log(JSON.stringify(response, null, 4));
      //} else {
       // alert("HTTP-Error: " + response.status);
      //}
      document.getElementById("get_result_area").innerHTML = JSON.stringify(response, null, 4);
}

window.onClickGet = async function() {
    const url = document.getElementById("get_url").value;
    console.log("fetching " + url);
    const response = await getJson(url).then( (res) => { return res; } );
    document.getElementById("get_result_area").innerHTML = JSON.stringify(response, null, 4);

}