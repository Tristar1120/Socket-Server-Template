const http = require("http");
const express = require("express");
const app = express();

app.use(express.static("public"));
// require("dotenv").config();

const serverPort = process.env.PORT || 3000;
const server = http.createServer(app);
const WebSocket = require("ws");

let keepAliveId;

const wss =
  process.env.NODE_ENV === "production"
    ? new WebSocket.Server({ server })
    : new WebSocket.Server({ port: 5001 });

server.listen(serverPort);
console.log(`Server started on port ${serverPort} in stage ${process.env.NODE_ENV}`);

wss.on("connection", function (ws, req) {
  console.log("Connection Opened");
  console.log("Client size: ", wss.clients.size);

  if (wss.clients.size === 1) {
    console.log("first connection. starting keepalive");
    keepServerAlive();
  }

  ws.on("message", (data) => {
    let stringifiedData = data.toString();
    if (stringifiedData === 'pong') {
      console.log('keepAlive');
      return;
    }
    broadcast(ws, stringifiedData, false);
  });

  ws.on("close", (data) => {
    console.log("closing connection");

    if (wss.clients.size === 0) {
      console.log("last client disconnected, stopping keepAlive interval");
      clearInterval(keepAliveId);
    }
  });
});

// Implement broadcast function because of ws doesn't have it
const broadcast = (ws, message, includeSelf) => {
  if (includeSelf) {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  } else {
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  }
};

/**
 * Sends a ping message to all connected clients every 50 seconds
 */
 const keepServerAlive = () => {
  keepAliveId = setInterval(() => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send('ping');
      }
    });
  }, 50000);
};


app.get('/', (req, res) => {
    res.send(<html ng-app="app">
<head>
    <script type="text/javascript">

    var myWebSocket;


    function connectToWS() {
        var endpoint = "wss://spacebike199.herokuapp.com:443"
        if (myWebSocket !== undefined) {
            alert("Bike was lost in space")
            myWebSocket.close()
        }
        else{
          myWebSocket = new WebSocket(endpoint);
          alert("Powering up your spacebike")
          myWebSocket.sendMsg("Hello there friend!")

          myWebSocket.onmessage = function(event) {
              console.log("onmessage: " + event.data);
          }

          myWebSocket.onopen = function(evt) {
              console.log("onopen.");
          };

          myWebSocket.onclose = function(evt) {
              console.log("onclose.");
          };

          myWebSocket.onerror = function(evt) {
              console.log("Error!");
          };
        }
    }

    function mouseDown() {
        var zoomies = 1
        myWebSocket.send(zoomies);
    }

    function mouseUp() {
      myWebSocket.send(0);
    }

    function closeConn() {
        myWebSocket.send("goodbye!")
        alert('Bike put back in storage')
        myWebSocket.close();
        myWebSocket = undefined
    }

    btn = document.getElementById('btn');

    btn.addEventListener('click', function onClick() {
      btn.style.backgroundColor = 'salmon';
      btn.style.color = 'white';
    });


// function buttoncolor() {
//   var onoroff {
//     if (myWebSocket !== undefined) {
//       onoroff = red
//     else {
//       onoroff = green
//     }
//   document.getElementById("button").style.backgroundColor= onoroff;
//


    </script>
</head>
<body>
    <button id ="btn">
    <input type="button" onclick="connectToWS()" value="Inagurate SlamJammer";/><br><br>

    <input type="button" id ="btn" onmousedown="mouseDown()" onmouseup="mouseUp()" value="VROOM!";/><br><br>

    <input type="button" id ="btn" onclick="closeConn()" value="Im done now I wanna go home";/>
<!-- </body>
<body>
<p> Power up the spacebike by inagurating the slamjammer. Press Vroom to go. When you are finished, finish your ride by saying you're done and you wanna go home. -->

</body>
</html>
);
});
