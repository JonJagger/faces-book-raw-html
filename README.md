#FacesBookRawHtml

After cloning this repo, you can open
./faces-book-raw-html/app/public/index.html in your
browser

- - - -

If you're not running Docker you'll need Node installed.

You can run the js unit tests...
```
./sh/run_js_tests.sh
```

To start the web server on port 81...
```
cd app
npm install
export NODE_PORT=81
npm start
```

Once the web server is up you can test it by poking it with curl...
```
./sh/run_curl_tests.sh 81
```

- - - -

If you're on a box running Docker you don't need Node installed...
```
./faces-book-node/sh/pipe.sh 81
```
- Your docker container will now be up on port 81
- To find your public IP address you can use
```
curl ifconfig.me
```

- - - -

Implemented using
[Node](https://nodejs.org/en/),
[Express](https://expressjs.com) and
[Docker](https://www.docker.com/)

Hello to the class of Chennai 2018 :-)

- - - -
##Screenshot
![screenshot](/img/faces-book.png)

