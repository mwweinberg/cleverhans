
//listens for the button being pushed
const button = document.getElementById('submit');
    button.addEventListener('click', async event => {
        const num1 = document.getElementById('num1').value;
        const num2 = document.getElementById('num2').value;

        console.log(num1, num2);

        //holder for the data to send to the server
        const data = {num1, num2};
        //options for fetch request
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        //fetch request
        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json);


        });


