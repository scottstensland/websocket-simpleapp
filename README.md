# websocket-simpleapp
bare bones websocket with nodejs serverside 

this repo lives at https://github.com/scottstensland/websocket-simpleapp

Here we supply the code and instructions to demonstrate WebSockets for both browser side and server side


Install necessary packages

```
npm install -g nodemon
npm install -g http-server
```


clone this repo to your machine and launch the server side 

```
git clone https://github.com/scottstensland/websocket-simpleapp.git

cd websocket-simpleapp

npm install


npm start


```

Now the server is listening to URL  listening on  [http://localhost:8888](http://localhost:8888)


Here we have separate directories for server side -VS- browser client side code :

```
    src/     #  server side code
    fe_src/  #  client side code
```

So lets launch a web server so we can point a browser at your client side code

```
cd fe_src/

http-server -c-1 -p 8080
```


