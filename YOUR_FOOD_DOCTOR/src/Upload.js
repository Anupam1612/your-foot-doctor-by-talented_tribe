import React, { useState } from 'react';
import axios from 'axios';
import foot2 from './images/secbg.jpg'

function Upload() {
  const [output, setOutput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    };
    axios.post('/predict', formData, config)
      .then(response => {
        setOutput(response.data.result);
        setImageUrl(response.data.url); // Set the uploaded image URL
      })
      .catch(error => {
        console.error('Error predicting output:', error);
      });
  };

  return (
    <div className='upload'>
      <div className='foot2_img'>
        <img src={foot2} alt='foot2' className='foot2'/>
      </div>
      <label className='custom-input' htmlFor='file'>Upload Your Left Foot Image</label>
      <input type='file' id='file' accept='image/*' onChange={handleFileUpload} className='input' />
      <label className='custom-input' htmlFor='file1'>Upload Your Right Foot Image</label>
      <input type='file' id='file1' accept='image/*' onChange={handleFileUpload} className='input' />
      {/* Display the uploaded image */}
      {imageUrl && <img src={imageUrl} alt='Uploaded Foot' style={{ maxWidth: '100%', maxHeight: '100%' }} />}
      {/* Display the predicted output */}
      {output && <p>The predicted output is: {output}</p>}
    </div>
  );
}

export default Upload;
