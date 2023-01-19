import fetch from 'node-fetch';

it ("Should get a login token", async () => {//async alows us to read from the database by moving on and comoing back

    const  loginResponse = await fetch('https://dev.stedi.me/login', { //await fetch allows it to move on while getting the data 

        method: 'POST', //method : POST says to give information to the server
        headers: {
            'Content-Type': 'application/text'
        },

        body:JSON.stringify({
        "userName": "addamkoroma@gmail.com",
        "password": 'Access@001'

        })

    })
    expect(loginResponse.status).toBe(401); //200 means authorized

})