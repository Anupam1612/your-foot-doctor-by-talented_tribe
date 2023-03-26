import React, { useRef, useEffect, useState } from 'react';
import './Capture.css'

function Capture() {
    const leftFootVideoRef = useRef(null);
    const rightFootVideoRef = useRef(null);
    const [isLeftFootCameraOpen, setIsLeftFootCameraOpen] = useState(false);
    const [isRightFootCameraOpen, setIsRightFootCameraOpen] = useState(false);
  
    useEffect(() => {
      if (isLeftFootCameraOpen) {
        // Get access to the user's camera for left foot
        navigator.mediaDevices.getUserMedia({ video: true })
          .then((stream) => {
            // Attach the camera stream to the video element for left foot
            leftFootVideoRef.current.srcObject = stream;
          })
          .catch((error) => {
            console.error('Error accessing left foot camera:', error);
          });
      }
      if (isRightFootCameraOpen) {
        // Get access to the user's camera for right foot
        navigator.mediaDevices.getUserMedia({ video: true })
          .then((stream) => {
            // Attach the camera stream to the video element for right foot
            rightFootVideoRef.current.srcObject = stream;
          })
          .catch((error) => {
            console.error('Error accessing right foot camera:', error);
          });
      }
    }, [isLeftFootCameraOpen, isRightFootCameraOpen]);
  
    const handleLeftFootCaptureClick = () => {
      setIsLeftFootCameraOpen(true);
    }
    const handleRightFootCaptureClick = () => {
      setIsRightFootCameraOpen(true);
    }
  
    return (
      <div className='camera'>
        <h4 className='cam'>Capture Your Left Foot Image</h4>
        {isLeftFootCameraOpen &&
          <video
            ref={leftFootVideoRef}
            autoPlay
            playsInline
            muted
            style={{ maxWidth: '100%', maxHeight: '100%' }}
            className='camera-foot'
          />
        }
        <button className='custom-button' onClick={handleLeftFootCaptureClick}>Capture Left Foot Image</button>

        <h4 className='cam'>Capture Your Right Foot Image</h4>
        {isRightFootCameraOpen &&
          <video
            ref={rightFootVideoRef}
            autoPlay
            playsInline
            muted
            style={{ maxWidth: '100%', maxHeight: '100%' }}
            className='camera-foot'
          />
        }
        <button className='custom-button' onClick={handleRightFootCaptureClick}>Capture Right Foot Image</button>
      </div>
    );
}

export default Capture;
