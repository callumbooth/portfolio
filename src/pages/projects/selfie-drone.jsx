import React from 'react';

const SelfieDrone = () => {
    return (
        <React.Fragment>
            <h4>
                Overview
            </h4>
            <p>
                After being inspired and feeling leftout by the IBM Drone giveaway which only applied to US/CA. I bought myself a Ryze Tello Drone from DJI and set myself a target to build something that could interface with the drone.
            </p>
            <p>
                My first goal was to get something working. After setting up a quick bootstrapped react frontend using Create React App (CRA), it listens to keyboard inputs and sends via a Websocket to a node server, which then sends the command on to the drone via RDP.
            </p>
            <p>
                I'll soon be uploading a video of the drone in action, check back soon to see how this project moves along.
            </p>
            
        </React.Fragment>
    )
}

export default SelfieDrone;