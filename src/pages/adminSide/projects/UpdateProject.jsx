import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateProject = () => {
  const [serviceId, setServiceId] = useState('');
  const [projectImgUrl, setProjectImgUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [liveLink, setLiveLink] = useState('');
  const [erdLink, setErdLink] = useState('');
  const { id } = useParams();

  const axiosPublic = useAxiosPublic();
  // get single project
  const { data: project = {}, refetch } = useQuery({
    queryKey: ['project'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/project/${id}`);
      return res.data;
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const projectData = {
      service_id: serviceId,

      project_img_url: projectImgUrl,
      title,
      description,
      live_link: liveLink,
      erd_link: erdLink,
    };

    axiosPublic.put(`/project/${project._id}`, projectData)
      .then(res => {
        if (res) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Project Updated",
            showConfirmButton: false,
            timer: 1500
          });
        }
        refetch();
      })
      .catch()
    form.reset();

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Update {project.title} Project</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label htmlFor="project-img-url" className="block text-sm font-medium text-gray-700">
              Project Image URL
            </label>
            <input
              type="text"
              id="project-img-url"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter image URL"
              value={projectImgUrl}
              onChange={(e) => setProjectImgUrl(e.target.value)}
              
            />
          </div>

          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              
            />
          </div>

          <div className="mb-4">
            <label htmlFor="live-link" className="block text-sm font-medium text-gray-700">
              Live Link
            </label>
            <input
              type="text"
              id="live-link"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter live link"
              value={liveLink}
              onChange={(e) => setLiveLink(e.target.value)}
              
            />
          </div>

          <div className="mb-6">
            <label htmlFor="erd-link" className="block text-sm font-medium text-gray-700">
              ERD Link
            </label>
            <input
              type="text"
              id="erd-link"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter ERD link"
              value={erdLink}
              onChange={(e) => setErdLink(e.target.value)}
              
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          >
            Update Project
          </button>
        </form>
      </div>
    </div>
  );
};


export default UpdateProject;