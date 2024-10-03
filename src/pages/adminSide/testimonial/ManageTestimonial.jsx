import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { uploadImage } from '../../../uploadImg/UploadImage';
import Swal from 'sweetalert2';

const ManageTestimonial = () => {

  const [imageName, setImageName] = useState('');
  const axiosPublic = useAxiosPublic();

  const { data: services = [], refetch } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const res = await axiosPublic.get('/service');
      return res.data;

    }
  })

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name); // Set the image file name in state
    }
  };


  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.files[0];
    const name = form.name.value;
    const company = form.company.value;
    const position = form.position.value;
    const location = form.location.value;
    const testimonial = form.testimonial.value;

    // Upload image to cloudinary
    let personImageUrl = '';
    if (!image?.name) {
      personImageUrl = ''
    } else {
      personImageUrl = await uploadImage(image);
    }

    const data = { personImageUrl, name, company, position, location, testimonial};
    // console.log(data);
    axiosPublic.post('/testimonial', data)
      .then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          // console.log('data added');
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Testimonial Added",
            showConfirmButton: false,
            timer: 1500
          });
        }
        refetch(); // Refetch the services data to display the newly added service
      })
      .catch()
    form.reset();

  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/service/${id}`)
          .then(res => {
            if (res?.data?.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Service has been deleted.",
                icon: "success"
              });
              refetch()
            }
          })
          .catch(err => {
            console.log(err);
          })

      }
    });
  }


  return (
    <div className=" mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <Helmet>
        <title>Dashboard | Create Service</title>
      </Helmet>
      <h2 className="text-2xl font-semibold text-center mb-6">Upload Testimonials</h2>
      <form onSubmit={handleSubmit} className="space-y-6 w-1/2 mx-auto">
        {/* Image Upload Section */}
        <div className="flex flex-col items-center">

          <label className="block border-2 border-dashed border-gray-300 w-full h-64 flex flex-col justify-center items-center cursor-pointer">
            {/* Hidden file input field */}
            <input
              type="file"
              className="hidden"
              name="image"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <span className="text-green-600 text-2xl">+ Upload Person's Image</span>
            <span className="text-sm text-gray-500">Supported Format:png, jpg, jpeg, webp</span>
          </label>

          {/* Display the uploaded image name if available */}
          {imageName && (
            <span className="text-gray-700 mt-2 text-sm">
              Uploaded: {imageName}
            </span>
          )}



        </div>


        <div className="grid grid-cols-2 gap-3">
          {/* name */}
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input type="text" name='name' placeholder="Enter Name" className="input input-bordered" required />

          </div>

          {/* company */}
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Company</span>
            </label>
            <input type="text" name='company' placeholder="Enter Company Name" className="input input-bordered" required />

          </div>

          {/* position */}
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Position</span>
            </label>
            <input type="text" name='position' placeholder="Enter Position" className="input input-bordered" required />

          </div>

          {/* location */}
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Company Location</span>
            </label>
            <input type="text" name='location' placeholder="Enter Company Location" className="input input-bordered" required />

          </div>

        </div>

        {/* testimonial */}
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Testimonial</span>
          </label>
          <textarea type="text" name='testimonial' placeholder="Enter His Testimonial" className="input input-bordered h-52 " required />

        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
          >
            Submit
          </button>
        </div>
      </form>


    </div>
  );
};

export default ManageTestimonial;