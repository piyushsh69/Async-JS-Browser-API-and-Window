const parentContainer = document.getElementById('data');

const load = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = () =>{
        if (parentContainer.innerHTML == '') {
            let users = JSON.parse(xhttp.responseText);
            console.log(users);
            users.map(user => {
                let newElement = document.createElement('li')
                newElement.innerHTML = user.name;
                parentContainer.appendChild(newElement);
        })
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhttp.send();
}