import axios from 'axios';

export const uploadFile = async (file) => {
  const cloudName = import.meta.env.VITE_CLOUD_NAME;

  if (!file) {
    console.error('No file selected for upload.');
    return '';
  }

  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', 'portfolio_present');

  // Determine the resource type based on file type
  let resourceType = 'auto'; // Default to 'auto', Cloudinary will detect the type
  if (file.type.startsWith('image')) {
    resourceType = 'image';
  } else if (file.type.startsWith('video')) {
    resourceType = 'video';
  } else {
    resourceType = 'raw'; // For PDFs, text, or any other non-image, non-video files
  }

  try {
    // Use the correct resource type in the API URL
    let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;
    const res = await axios.post(api, data);

    const { secure_url, public_id, resource_type } = res.data;

    if (!secure_url) {
      console.error('Upload failed, no secure URL returned');
      return '';
    }

    console.log('Uploaded file URL:', secure_url);
    console.log('File public ID:', public_id);
    console.log('Resource type:', resource_type);

    return secure_url;
  } catch (error) {
    console.error('Error uploading the file:', error.response?.data || error.message);
    return '';
  }
};
