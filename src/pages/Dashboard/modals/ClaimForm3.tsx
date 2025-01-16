import { useState } from 'react';
import { Link } from 'react-router-dom';
import qr_code from '../../../images/qr_code.png';


const ClaimForm3Modal = ({
  isClaimForm3ModalOpen,
  closeClaimForm3Modal,
  openClaimForm4Modal,
}) => {
  const [loading, setLoading] = useState(false);
  const [claimRef, setClaimRef] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Second Modal (Form Modal) */}
      {isClaimForm3ModalOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeClaimForm3Modal} // Close the form modal when clicking outside
        >
          <div
            className="bg-white p-8 rounded-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the form modal
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-5">
              Make Payment
            </h3>

            <div className="grid grid-cols-2 mb-5">
              <div className="col-span-1">
                <p className="font-bold text-xl">Total Claim Fee: </p>
                <p className="text-3xl mt-4 font-bold text-green-600 mb-8">
                  $ 30,100 
                </p>

                <h4 className="font-semibold mb-3 text-xl">
                  🔹 Bitcoin Payment Instructions 🔹
                </h4>

                <ul className="list-decimal m-4">
                  <li>Scan QR Code with Your Crypto Wallet </li>
                  <li>Verify Amount: $30,100 </li>
                  <li> Transaction Fee: Included </li>
                  <li>Confirm Payment</li>
                  <li>Save Transaction Receipt </li>
                </ul>


                <p>⚠️ Ensure Exact Amount </p>
                <p>💡 Payment Validates Your Gold Claim </p>

                <p className='mt-5'>Need Help? Contact Support.</p>
              </div>

              <div className="col-span-1 justify-center items-center">

                <img className="h-90" src={qr_code} alt="qr_code" />
                
                <p>fywkio823j99j329by23o08b23b82b823b82</p>


              </div>
            </div>
            <div className='mt-5'>
            <p className=' mt-8 italic font-semibold'>Click on “Complete Transaction” after the payment is done.</p>
<p className="mt-3 font-semibold underline text-red-500">Your balance should be updated about 10 - 15min from payment.</p>
     

            </div>
       <div className="mt-4 flex justify-end gap-4">

              <button
                className="px-4 py-2 bg-primary w-[200px] text-white rounded-md"
                onClick={openClaimForm4Modal} // Close the form modal
              >
                Complete Transaction
              </button>
         
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClaimForm3Modal;
