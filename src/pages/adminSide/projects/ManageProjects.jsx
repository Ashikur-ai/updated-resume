import React, { useState } from 'react';
import { uploadFile } from '../../../uploadFile/UploadFile';
import PdfViewer from '../../../components/adminSide/pdfViewer/PdfViewer';

const ManageProjects = () => {

  const [pdfName, setPdfName] = useState('');  // Renamed state variable

  const handlePdfUpload = (e) => {  // Renamed handler
    const file = e.target.files[0];
    if (file) {
      setPdfName(file.name); // Set the PDF file name in state
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const projectName = form.projectName.value;
    const projectPdf = form.projectPdf.files[0];  // Renamed to projectPdf

    const data = { projectName, projectPdf };
    console.log('Form submitted with PDF:', data);

    const pdfUrl = await uploadFile(projectPdf);  // Assume uploadFile works with PDFs
    console.log(pdfUrl);
  }

  return (
    <div>
      <div className="lg:w-1/3 mx-auto py-8">

        <form action="" onSubmit={handleSubmit}>

          {/* PDF Upload */}
          <div className="flex flex-col items-center">
            <label className="block border-2 border-dashed border-gray-300 w-full h-64 flex flex-col justify-center items-center cursor-pointer">

              <input
                type="file"
                className="hidden"
                accept="application/pdf"  // Updated to accept PDFs
                name='projectPdf'  // Renamed input name
                required
                onChange={handlePdfUpload}  // Renamed handler function
              />
              <span className="text-green-600 text-xl lg:text-2xl">+ Choose Project PDF</span>
              <span className="text-sm text-gray-500">Upload project's PDF</span>
            </label>
            <span className="text-gray-400 text-xs mt-2">
              Supported format: PDF
            </span>

            {pdfName && (  // Updated to use pdfName
              <span className="text-gray-700 mt-2 text-sm">
                Uploaded: {pdfName}
              </span>
            )}
          </div>

          {/* Project Name */}
          <div>
            <label className="block text-gray-700 text-sm mb-2">Project Name</label>
            <input
              type="text"
              name='projectName'  // Updated name attribute
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter project name"
            />
          </div>

          <input type="submit" className='btn btn-primary mt-5' value="Submit" />

        </form>

      </div>

      <p>Uploaded pdf</p>
      <div className="container mx-auto">
          <PdfViewer></PdfViewer>
      </div>
    </div>
  );
};

export default ManageProjects;
