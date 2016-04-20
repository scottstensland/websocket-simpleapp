# websocket-simpleapp
bare bones websocket with nodejs serverside 

this repo lives at https://github.com/scottstensland/websocket-simpleapp

Here we supply the code and instructions to demonstrate WebSockets for browser side and server side ... We will use nodejs for server development and browser javascript as our client


Install necessary nodejs packages

```
npm install -g nodemon
npm install -g http-server
```


clone this repo to your machine and launch the server side 

```
git clone https://github.com/scottstensland/websocket-simpleapp.git
cd websocket-simpleapp

npm install
npm start   #  this launches our WebSocket server code

```

Now the server is listening to [http://localhost:8888](http://localhost:8888)

Do not just point your browser to that URL it only handles WebSocket traffic 

Here we have separate directories for server side -VS- browser client side code :

```
    src/     #  server side code
    fe_src/  #  client side code
```

So lets launch a web server so we can point a browser at our client side code

```
cd fe_src/

http-server -c-1 -p 8080  #  makes available to browser our client side WebSocket code
```


Now point a browser to [http://localhost:8080](http://localhost:8080) which will execute our WebSocket front end code

In your browser click on the file :   client.html

Open up the console ( ctrl-shift-I )


Notice the message in browser javascript console :  

```
this message was sent from server side to client
```


Over on the server side output you should see message 

```
received: Here's some text client has sent to server upon socket open event!

```

There we have it ... we have created a WebSocket connection between browser client and server side and witnessed text transmission in both directions ... from this starting point you can now add logic to handle sending JSON or Binary data instead of just text

Enjoy


