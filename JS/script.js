var connection_status = false;
var client;

setTimeout(function() {
    ConnectToMQTT();
}, 1000);

function ConnectToMQTT() {
    const randomClientNumber = Math.floor(Math.random() * 1000) + 1;
    const clientID = 'Device_Id' + randomClientNumber; // Generate unique user name
    const host = 'blithesome-chiropractor.cloudmqtt.com';
    const port = 443;

    client = new Paho.MQTT.Client(host, Number(port), clientID);
    
    // Set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    // Connect the client
    client.connect({
        onSuccess: onConnect,
        useSSL: true,
        userName: 'rwufzabs',
        password: 'kVZNw5Tuj6e5',
        mqttVersion: 4
    });
}

// Function to subscribe to both topics and handle messages
function onConnect() {
    console.log("onConnect:");
    connection_status = true;

    // Subscribe to the touch and info topics
    const topicTouch1 = 'touch1';
    client.subscribe(topicTouch1);

    const topicTouch2 = 'touch2';
    client.subscribe(topicTouch2);

    const topicTouch3 = 'touch3';
    client.subscribe(topicTouch3);

    // Subscribe to the touch and info topics
    const topicInfo1 = 'state_info1';
    client.subscribe(topicInfo1);

    const topicInfo2 = 'state_info2';
    client.subscribe(topicInfo2);
    
    const topicInfo3 = 'state_info3';
    client.subscribe(topicInfo3);

    console.log("Subscribed to topics: touch");
}



// Called when the client loses its connection
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost: " + responseObject.errorMessage);
        alert("MQTT Connection Lost");
    }
}

// Called when a message arrives
function onMessageArrived(message) {
    console.log("onMessageArrived: " + message.payloadString);

    // Split the message into parts, e.g., "Button_Name=1"
    const [button_info, device_id] = message.payloadString.split(',');
    const device_name = device_id ? device_id.split('=')[1] : ''; // Extract "user617" from "Device_Name=user617", ensure device_info exists 

    // Handle messages from the 'touch' topic (disable buttons)
    if (message.destinationName === 'touch1') {
        if (button_info === "Button_Name=1") {
            document.getElementById('button1').style.backgroundColor = 'gray';
            document.getElementById('button1').disabled = true;
        }   else if (button_info === "Button_Name=0") {
            document.getElementById('button1').style.backgroundColor = '';
            document.getElementById('button1').disabled = false;
        }
    } else if (message.destinationName === 'touch2') {
        if (button_info === "Button_Name=2") {
            document.getElementById('button2').style.backgroundColor = 'gray';
            document.getElementById('button2').disabled = true;
        }   else if (button_info === "Button_Name=0") {
            document.getElementById('button2').style.backgroundColor = '';
            document.getElementById('button2').disabled = false;
        }
    } else if (message.destinationName === 'touch3') {
        if (button_info === "Button_Name=3") {
            document.getElementById('button3').style.backgroundColor = 'gray';
            document.getElementById('button3').disabled = true;
        }   else if (button_info === "Button_Name=0") {
            document.getElementById('button3').style.backgroundColor = '';
            document.getElementById('button3').disabled = false;
        }
    }   
    
    if (message.destinationName === 'state_info1') {
        if (button_info === "Button_Name=1" && device_name === client.clientId) {
            document.getElementById('button1').style.backgroundColor = 'green';
            console.log("Subscribed topics: info1");
        }   else if (button_info === "Button_Name=1" && device_name === client.clientId) {
            document.getElementById('button1').style.backgroundColor = '';
        }
    }   else if (message.destinationName === 'state_info2') {
        if (button_info === "Button_Name=2" && device_name === client.clientId) {
            document.getElementById('button2').style.backgroundColor = 'yellow';
            console.log("Subscribed topics: info2");
        }   else if (button_info === "Button_Name=2" && device_name === client.clientId) {
            document.getElementById('button2').style.backgroundColor = '';
        }
    }   else if (message.destinationName === 'state_info3') {
        if (button_info === "Button_Name=3" && device_name === client.clientId) {
            document.getElementById('button3').style.backgroundColor = 'red';
            console.log("Subscribed topics: info3");
        }   else if (button_info === "Button_Name=3" && device_name === client.clientId) {
            document.getElementById('button3').style.backgroundColor = '';
        }
    }
    
}










