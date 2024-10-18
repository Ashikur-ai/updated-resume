import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { Link } from 'react-router-dom';



const TestimonialManagement = () => {
  const axiosPublic = useAxiosPublic();
  const { data: testimonials = [], refetch } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const res = await axiosPublic.get('/testimonial');
      return res.data;
    }
  })
  const [isLoading, setIsLoading] = useState(false);

  // Edit Testimonial (Mock function for demonstration)
  const handleEdit = (id) => {
    const testimonial = testimonials.find((testimonial) => testimonial.id === id);
    Swal.fire({
      title: 'Edit Testimonial',
      input: 'textarea',
      inputLabel: 'Edit the testimonial text',
      inputValue: testimonial.testimonial,
      showCancelButton: true,
      confirmButtonText: 'Save',
      showLoaderOnConfirm: true,
      preConfirm: (newTestimonial) => {
        // Simulate API call for updating
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setTestimonials((prev) =>
            prev.map((item) => (item.id === id ? { ...item, testimonial: newTestimonial } : item))
          );
          Swal.fire('Updated!', 'The testimonial has been updated.', 'success');
        }, 1500);
      },
    });
  };

  // Delete Testimonial
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        setIsLoading(true);
        axiosPublic.delete(`/testimonial/${id}`)
          .then(res => {
            if (res?.data?.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Testimonial has been deleted.",
                icon: "success"
              });
            }
            refetch();
          })
          .catch(err => {
            console.log(err);
          })
      }
    });
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Manage Testimonials</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-50 text-left text-gray-600 font-medium border-b">#</th>
              <th className="py-2 px-4 bg-gray-50 text-left text-gray-600 font-medium border-b">Person</th>
              <th className="py-2 px-4 bg-gray-50 text-left text-gray-600 font-medium border-b">Name</th>
              <th className="py-2 px-4 bg-gray-50 text-left text-gray-600 font-medium border-b">Company</th>
              <th className="py-2 px-4 bg-gray-50 text-left text-gray-600 font-medium border-b">Position</th>
              <th className="py-2 px-4 bg-gray-50 text-left text-gray-600 font-medium border-b">Location</th>
              <th className="py-2 px-4 bg-gray-50 text-left text-gray-600 font-medium border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((testimonial, index) => (
              <tr key={testimonial.id}>
                <td className="py-3 px-4 border-b">{index + 1}</td>
                <td className="py-3 px-4 border-b flex items-center">
                  <img
                    src={testimonial.personImageUrl}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  
                </td>
                <td className="py-3 px-4 border-b"><span>{testimonial.name}</span></td>

                <td className="py-3 px-4 border-b">{testimonial.company}</td>
                <td className="py-3 px-4 border-b">{testimonial.position}</td>
                <td className="py-3 px-4 border-b">{testimonial.location}</td>
                <td className="py-3 px-4 border-b">
                  <Link to={`/dashboard/update-testimonial/${testimonial._id}`}>
                    <button

                      className="text-blue-600 hover:underline mr-4"
                    >
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(testimonial._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isLoading && (
        <div className="mt-4 text-center">
          <span className="text-lg text-gray-600">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default TestimonialManagement;
