console.log("Pinging server...")

fetch('http://localhost').then(response => {
    if (response.ok) {
        console.log("Server responded ok!");
    } else {
        console.error("Server unreachable!");
    };
}).catch(error => {
    console.error("Server unreachable!");
});