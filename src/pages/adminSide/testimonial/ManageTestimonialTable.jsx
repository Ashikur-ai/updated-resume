import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ManageTestimonialTable = ({testimonials, handleDelete}) => {

  

 

  return (
    <div className="border rounded-lg mt-10">
      <Helmet>
        <title>Dashboard | Manage Testimonial</title>
      </Helmet>
      <div className=" mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Manage Testimonial</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">Image</th>
                <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">Name</th>
                <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">Company</th>
                <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">Position</th>
                <th className="px-4 py-2 text-center text-sm font-bold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.map(testimonial => (
                <tr key={testimonial._id} className="border-t border-gray-300">
                  <td className="px-4 py-2">
                    <img
                      src={testimonial.personImageUrl}
                      alt={testimonial.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </td>
                  <td className="px-4 py-2 text-gray-700">{testimonial.name}</td>
                  <td className="px-4 py-2 text-gray-700">{testimonial.company}</td>
                  <td className="px-4 py-2 text-gray-700">{testimonial.position}</td>
                  <td className="px-4 py-2 text-center">
                    <Link to={`/dashboard/update-testimonial/${testimonial._id}`}>
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 mr-2">
                        <FaEdit />
                      </button>
                    </Link>
                    <button onClick={() => handleDelete(testimonial._id)} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageTestimonialTable;