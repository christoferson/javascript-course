
const authHeaders = {
    Authorization: 'Bearer ' + "875943759843759357943", 'Content-Type': 'application/json'
};

window.postJson = function (url, data) {
    return fetch(urlLocation + url, { method: "POST", headers: authHeaders, body: JSON.stringify(data) })
        .then((res) => res.json());
};

window.getJson = function (url) {
    return fetch(url, { method: "GET", headers: authHeaders })
        .then((res) => res.json());

};

window.deleteJson = function (url) {
    return fetch(urlLocation + url, { method: "DELETE", headers: authHeaders })
        .then((res) => res.json());
};

window.putJson = function (url) {
    return fetch(urlLocation + url, { method: "PUT", headers: authHeaders })
        .then((res) => res.json());
};

// https://reqres.in/api/users?page=2
// file:///C:/codes/javascript-course/99-CallRemoteApi/main.html

window.processOnClickGet = async function() {
    try {
        const url = document.getElementById("get_url").value;
        console.log("fetching " + url);
        const response = await getJson(url).then( (res) => { return res; } );
        document.getElementById("get_result_area").innerHTML = JSON.stringify(response, null, 2);
    } catch (e) {
        document.getElementById("get_result_area").innerHTML = e;
    }
};

window.processOnClickGetV2 = async function () {
    try {
        const url = document.getElementById("get_url").value;
        console.log("fetching " + url);
        const response = await fetch(url, { method: "GET", headers: authHeaders });
        if (response.ok) {
            let json = await response.json();
            let jsonstr = JSON.stringify(json, null, 2);
            console.log(jsonstr);
            document.getElementById("get_result_area").innerHTML = jsonstr;
        } else {
            document.getElementById("get_result_area").innerHTML = response.status;
        }
    } catch (e) {
        document.getElementById("get_result_area").innerHTML = e;
    }

};