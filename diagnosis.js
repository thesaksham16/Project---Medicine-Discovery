document.addEventListener("DOMContentLoaded", function () {
    const diagnosisResult = document.getElementById("diagnosis-result");

    // Simulating API call to GPT for diagnosis
    fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            prompt: 'Based on the symptoms provided, please suggest possible diagnosis.',
            max_tokens: 100
        })
    })
    .then(response => response.json())
    .then(data => {
        diagnosisResult.innerHTML = data.choices[0].text;
    })
    .catch(error => {
        diagnosisResult.innerHTML = "Error: Unable to fetch diagnosis.";
    });
});
