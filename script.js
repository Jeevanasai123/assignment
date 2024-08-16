document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting normally

    const fileInput = document.getElementById('imageUpload');
    const file = fileInput.files[0];
    
    if (file) {
        const resultDiv = document.getElementById('result');
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `<p>Processing ${file.name}...</p>`;

        // Simulate an API call to FacesearchAI with dynamic content
        setTimeout(() => {
            // This is where you would typically handle the API response
            const apiResponse = {
                name: "Alice Smith",  // This should come from the actual API response
                websites: [
                    "example.com",
                    "anotherexample.com",
                    "somesite.com"
                ]
            };

            // Create dynamic HTML content based on API response
            let websitesList = apiResponse.websites.map(site => `<li><a href="#">${site}</a></li>`).join('');

            resultDiv.innerHTML = `
                <h3>Result:</h3>
                <p>Name: ${apiResponse.name}</p>
                <p>Websites:</p>
                <ul>
                    ${websitesList}
                </ul>
            `;
        }, 2000);
    }
});

