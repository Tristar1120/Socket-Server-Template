<html ng-app="app">
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
