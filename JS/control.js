// Handle button clicks to control the action
function button1() {
    if (connection_status) {
        const message_touch = `Button_Name=1`; // Prepare the message format
        publishToMQTT_Touch1(message_touch, true); // Publish message to MQTT

        const message_info = `Button_Name=1,Device_Name=${client.clientId}`; // Prepare the message format
        publishToMQTT_Info1(message_info); // Publish message to MQTT

        document.getElementById('button1').style.backgroundColor = 'gray';
        document.getElementById('button1').disabled = true;        
    } else {
        alert("MQTT not connected");
    }
};

// Handle button clicks to control the action
function button2() {
    if (connection_status) {
        const message_touch = `Button_Name=2`; // Prepare the message format
        publishToMQTT_Touch2(message_touch, true); // Publish message to MQTT

        const message_info = `Button_Name=2,Device_Name=${client.clientId}`; // Prepare the message format
        publishToMQTT_Info2(message_info); // Publish message to MQTT

        document.getElementById('button2').style.backgroundColor = 'gray';
        document.getElementById('button2').disabled = true;        
    } else {
        alert("MQTT not connected");
    }
};

// Handle button clicks to control the action
function button3() {
    if (connection_status) {
        const message_touch = `Button_Name=3`; // Prepare the message format
        publishToMQTT_Touch3(message_touch, true); // Publish message to MQTT

        const message_info = `Button_Name=3,Device_Name=${client.clientId}`; // Prepare the message format
        publishToMQTT_Info3(message_info); // Publish message to MQTT

        document.getElementById('button3').style.backgroundColor = 'gray';
        document.getElementById('button3').disabled = true;        
    } else {
        alert("MQTT not connected");
    }
};


// Function to publish data to the 'touch' MQTT topic with retain option
function publishToMQTT_Touch1(message_touch, retain = false) {
    client.send('touch1', message_touch, 0, retain); // '0' is the QoS, 'retain' is the retain flag
}
function publishToMQTT_Touch2(message_touch, retain = false) {
    client.send('touch2', message_touch, 0, retain); // '0' is the QoS, 'retain' is the retain flag
}
function publishToMQTT_Touch3(message_touch, retain = false) {
    client.send('touch3', message_touch, 0, retain); // '0' is the QoS, 'retain' is the retain flag
}

// Function to publish data to the 'info' MQTT topic 
function publishToMQTT_Info1(message_info) {
    client.send('info1', message_info);
}
function publishToMQTT_Info2(message_info) {
    client.send('info2', message_info);
}
function publishToMQTT_Info3(message_info) {
    client.send('info3', message_info);
}