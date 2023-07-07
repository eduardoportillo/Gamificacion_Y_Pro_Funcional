const URL = "http://192.168.3.2:8080"
export default {
    POST: (path, data) => {
        return new Promise((resolve, reject) => {
            var raw = JSON.stringify(data);
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Access-Control-Allow-Origin", "*");
            var requestOptions: any = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
            };
            fetch(URL + path, requestOptions)
                .then(response => response.text())
                .then(result => resolve(result))
                .catch(error => { reject() });
        })

    },
    GET: (path) => {
        return new Promise((resolve, reject) => {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Access-Control-Allow-Origin", "*");
            var requestOptions: any = {
                method: 'GET',
                headers: myHeaders,
            };
            fetch(URL + path, requestOptions)
                .then(response => response.text())
                .then(result => resolve(result))
                .catch(error => { reject() });
        })
    }
}