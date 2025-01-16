

const ConfirmClaimModal = ({isModalOpen, closeModal, openClaimForm1Modal}) => {



  return (
    <>


      {/* First Modal (Confirmation) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div
            className="bg-white p-6 rounded-lg w-80"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <h3 className="text-xl font-semibold text-gray-800">
              Are you sure you want to claim your gold assets?
            </h3>
            <div className="mt-4 flex justify-between">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
                onClick={closeModal} // Close the modal
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-primary text-white rounded-md"
                onClick={openClaimForm1Modal} // Open the form modal when confirmed
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}




    </>
  );
};

export default ConfirmClaimModal;
