const http = require('http')

const options = {
    hostname: 'albertcervantes.com',
    port: 80,
    path: '/hello.html',
    method: 'GET',
    headers: {
        'Content-Type': 'text/html'
    }
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
});

req.end();

//