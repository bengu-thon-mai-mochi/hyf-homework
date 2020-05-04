const url = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(url)
    .then(res => res.json())
    .then(data => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 3000)
        })
    })
    .then(data => console.log(data));