import { useState } from 'react';
import { Link } from 'react-router-dom';

const ClaimForm2Modal = ({
  isClaimForm2ModalOpen,
  closeClaimForm2Modal,
  openClaimForm3Modal,
}) => {
  const [loading, setLoading] = useState(false);
  const [claimRef, setClaimRef] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Second Modal (Form Modal) */}
      {isClaimForm2ModalOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeClaimForm2Modal} // Close the form modal when clicking outside
        >
          <div
            className="bg-white p-8 rounded-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the form modal
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-5">
              Claim Reference
            </h3>

            <p className="font-bold text-xl">Total Claim Fee: </p>
            <p className="text-3xl mt-4 font-bold text-green-600 mb-8">$ 30,100 </p>

     
            <form onSubmit={handleSubmit}>
              <div className="mb-9">
              <h4 className="font-semibold mb-3">Enter Reference info</h4>

                <div className="relative">
                  <input
                    id="claimRef"
                    name="claimRef"
                    type="claimRef"
                    value={claimRef}
                    onChange={(e) => setClaimRef(e.target.value)}
                    placeholder="Enter reference here"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />

             
                </div>
              </div>

              <h4 className="font-semibold mb-3">Security Questions</h4>

              <div className="mb-4">
              <h4 className=" mb-3">1. What is the name of your first pet?</h4>

                <div className="relative">
                  <input
                    id="claimRef"
                    name="claimRef"
                    type="claimRef"
                    value={claimRef}
                    onChange={(e) => setClaimRef(e.target.value)}
                    placeholder="Answer here"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />

             
                </div>
              </div>


              <div className="mb-4">
              <h4 className=" mb-3">2. What is you mothers median name?</h4>

                <div className="relative">
                  <input
                    id="claimRef"
                    name="claimRef"
                    type="claimRef"
                    value={claimRef}
                    onChange={(e) => setClaimRef(e.target.value)}
                    placeholder="Answer here"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 mb-9 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />

             
                </div>
              </div>






         

            <div className="mt-4 flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-primary w-[200px] text-white rounded-md"
                onClick={openClaimForm3Modal} // Close the form modal
              >
                Proceed with claim
              </button>
              <button
                className="px-4 py-2 bg-red-500 w-[200px] text-white rounded-md"
                onClick={closeClaimForm2Modal} // Close the form modal
              >
                Cancel
              </button>
            </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ClaimForm2Modal;
