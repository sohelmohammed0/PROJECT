document.addEventListener("DOMContentLoaded", () => {
    fetch("config.json")
        .then(response => response.json())
        .then(data => {
            document.body.className = data.stage.toLowerCase(); 
            const statusBox = document.getElementById("status-box");
            statusBox.className = data.stage.toLowerCase();
            statusBox.innerText = `Current Stage: ${data.stage}`;
            
            // Apply small scale effect when changing stage
            statusBox.style.transform = "scale(1.1)";
            setTimeout(() => {
                statusBox.style.transform = "scale(1)";
            }, 500);
        })
        .catch(error => console.error("Error loading config.json", error));
});
