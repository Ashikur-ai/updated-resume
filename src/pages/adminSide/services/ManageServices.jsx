import React, { useState } from 'react';
import { uploadImage } from '../../../uploadImg/UploadImage';

const ManageServices = () => {

  const [imageName, setImageName] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name); // Set the image file name in state
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const imageName = form.serviceImage.files[0];

    const data = { serviceName, imageName };
    console.log('Form submitted with image:', data);

    const imageUrl = await uploadImage(imageName);
    console.log(imageUrl);
  }


  return (
    <div>
      <div className="lg:w-1/3 mx-auto py-8">


        <form action="" onSubmit={handleSubmit}>

          {/* Image Upload */}
          <div className="flex flex-col items-center">
            <label className="block border-2 border-dashed border-gray-300 w-full h-64 flex flex-col justify-center items-center cursor-pointer">
             
              <input
                type="file"
                className="hidden"
                accept="image/*"
                name='serviceImage'
                required
                onChange={handleImageUpload}
              />
              <span className="text-green-600 text-xl lg:text-2xl">+ Choose Service Logo</span>
              <span className="text-sm text-gray-500">Upload Service Image</span>
            </label>
            <span className="text-gray-400 text-xs mt-2">
              Supported format: jpg, png
            </span>
            
            {imageName && (
              <span className="text-gray-700 mt-2 text-sm">
                Uploaded: {imageName}
              </span>
            )}
          </div>

          {/* Product Name */}
          <div>
            <label className="block text-gray-700 text-sm mb-2">Service Name</label>
            <input
              type="text"
              name='serviceName'
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter service name"
            />
          </div>

          <input type="submit" className='btn btn-primary mt-5' value="Submit" />

        </form>


      </div>
    </div>
  );
};

export default ManageServices;