#FacesBookRawHtml

After cloning this repo, you can open
./faces-book-raw-html/app/public/index.html in your
browser

- - - -

##If you're not running Docker
You'll need Node installed.

You can run the js unit tests...
```
./sh/run_js_tests.sh
```

To start the web server on port 81...
```
./sh/npm_install
./sh/npm_start 81
```

Once the web server is up you can test it by poking it with curl...
```
./sh/run_curl_tests.sh 81
```

- - - -

##If you're running Docker
You don't need Node installed...
```
./sh/docker_pipe.sh 81
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

