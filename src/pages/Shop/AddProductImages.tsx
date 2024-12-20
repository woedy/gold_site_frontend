import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import userThree from '../../images/user/user-03.png';
import { baseUrl, userToken } from '../../constants';
import { useNavigate, useParams } from 'react-router-dom';

const AddProductImages = () => {

  const [inputError, setInputError] = useState('');
  const [loading, setLoading] = useState(false);


  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  const { product_id } = useParams();


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create FormData object
    const formData = new FormData();
    formData.append('product_id', product_id);
  
    selectedFiles.forEach(file => {
      formData.append('images', file);
    });
  
    // Make a POST request to the server
    const url = baseUrl + 'api/shop/add-product-images/';
  
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: 'POST',
        headers: {         
          Authorization: `Token ${userToken}`, // Only include Authorization header
        },
        body: formData,
      });
  
      // Log formData (this might not work as expected since FormData is not easily serializable)
      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
      console.log('formData:', formDataObject);
  
      const data = await response.json();
  
      if (!response.ok) {
        console.log('############################33');
        console.log(data.errors);
        throw new Error(data.message);
      }
  
      // Registration successful
      console.log('Images Added successfully');
      navigate('/all-products'); // Navigate to success page
    } catch (error) {
      console.error('Error adding images:', error.message);
      if (error.message === 'Errors' && error.errors) {
        setInputError(Object.values(error.errors).flat().join('\n'));
      } else {
        setInputError('Failed to add product images');
      }
    } finally {
      setLoading(false);
    }
  };
  

  // Handle file input change
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);

    // Append new files to the existing ones
    setSelectedFiles(prevFiles => [...prevFiles, ...files]);

    // Generate previews for new files
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setPreviews(prevPreviews => [...prevPreviews, ...newPreviews]);
  };


    // Handle file removal
    const handleRemove = (index) => {
      setSelectedFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
      setPreviews(prevPreviews => prevPreviews.filter((_, i) => i !== index));
    };

  return (
    <>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Add Product Images" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Project Information
                </h3>
              </div>

              {inputError && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-3"
                  role="alert"
                >
                  <strong className="font-bold">Error!</strong>
                  <span className="block sm:inline"> {inputError}</span>
                </div>
              )}

              <div className="p-7">
                <form onSubmit={handleSubmit}>
          
                  <div className="p-4">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                      className="mb-4"
                    />


                    <div className="grid grid-cols-2 gap-4 mb-4">
                    {previews.map((preview, index) => (
          <div key={index} className="relative">
            <img
              src={preview}
              alt={`preview-${index}`}
              className="w-full h-auto object-cover"
            />
            <button
              onClick={() => handleRemove(index)}
              className="absolute top-1 right-1 bg-red-500 text-white p-2 rounded-full"
              title="Remove Image"
            >
              &times;
            </button>
          </div>
        ))}
                    </div>
           
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                      type="submit"
                    >
                      Cancel
                    </button>

                    {loading ? (
                      <div
                        role="status"
                        className="flex flex-col items-center justify-center h-full space-y-4"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="text-green">Loading...</span>
                      </div>
                    ) : (
                      <button
                        className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                        type="submit"
                      >
                        Save & Continue
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-5 xl:col-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  This information will be displayed on the mobile app.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProductImages;
