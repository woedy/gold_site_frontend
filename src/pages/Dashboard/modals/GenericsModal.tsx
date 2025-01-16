

const ClaimForm1Modal = ({isClaimForm1ModalOpen, closeClaimForm1Modal, openClaimForm2Modal}) => {



    return (
      <>

            {/* Second Modal (Form Modal) */}
            {isClaimForm1ModalOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeClaimForm1Modal} // Close the form modal when clicking outside
        >
          <div
            className="bg-white p-6 rounded-lg w-96"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the form modal
          >
            <h3 className="text-xl font-semibold text-gray-800">
              Complete Your Claim
            </h3>
            <form className="mt-4">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-md"
                  onClick={() => {
                    alert('Claim submitted successfully!');
                    closeClaimForm1Modal(); // Close the form modal after submission
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
                onClick={closeClaimForm1Modal} // Close the form modal
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
  
      </>
    );
  };
  
  export default ClaimForm1Modal;
  