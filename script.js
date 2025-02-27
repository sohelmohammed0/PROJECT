fetch('config.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('stage').textContent = data.stage;

        // Change background color based on stage
        if (data.stage === "Development") {
            document.body.style.backgroundColor = "blue";
        } else if (data.stage === "Testing") {
            document.body.style.backgroundColor = "green";
        } else if (data.stage === "Production") {
            document.body.style.backgroundColor = "red";
        }
    })
    .catch(error => console.error('Error loading config.json:', error));
