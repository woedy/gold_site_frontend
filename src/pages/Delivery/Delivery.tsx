import React, { useCallback, useEffect, useState } from 'react';
import CardDataStats from '../../components/CardDataStats';

import { Link } from 'react-router-dom';
import {
  baseUrl,
  baseUrlMedia,
  truncateText,
  userToken,
} from '../../constants';

const Delivery: React.FC = () => {
  const [usersCount, setUsersCount] = useState('');

  const [loading, setLoading] = useState(false);

  // State for alerts
  const [alert, setAlert] = useState({ message: '', type: '' });

  const [activeIndex, setActiveIndex] = useState(null);

  const portfolio = [
    {
      title: 'Gold',
      image:
        'https://png.pngtree.com/png-vector/20231026/ourmid/pngtree-realistic-gold-bars-png-image_10370401.png', // Example image path
      content: [
        {
          type: 'Gold Coins',
          value: '$ 1,900/oz',
          quantity: '12',
          total: '$ 3,452',
          image: 'https://www.example.com/gold-coins-image.png',
        },
        {
          type: 'Gold Bars',
          value: '$ 1,850/oz',
          quantity: '12',
          total: '$ 3,452',
          image: 'https://www.example.com/gold-bars-image.png',
        },
        {
          type: 'Jewelry',
          value: '$ 2,000/oz',
          quantity: '12',
          total: '$ 3,452',
          image: 'https://www.example.com/jewelry-image.png',
        },
      ],
    },
  ];

  const balanceInfo = {
    gp_balance: '$ 20,000',
    asset_value: '$ 12,056,343',
    assets_total: '$ 18,681,500',
  };

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="grid grid-cols-2 mb-5">
        <p className="text-2xl text-xl font-semibold text-black">
          Deliver stored products
        </p>
      </div>

      <div className="grid grid-cols-5 gap-1">
        <div className="flex justify-center w-full text-center bg-primary rounded border border-stroke py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark dark:text-white">
          <p className="text-white">Selection</p>
        </div>
        <div className="flex justify-center w-full text-center bg-primary rounded border border-stroke py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark dark:text-white">
          <p className="text-white">Delivery</p>
        </div>
        <div className="flex justify-center w-full text-center bg-graytrans rounded border border-stroke py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark dark:text-white">
          <p className="text-white">Billing Address</p>
        </div>
        <div className="flex justify-center w-full text-center bg-graytrans rounded border border-stroke py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark dark:text-white">
          <p className="text-white">Payment Method</p>
        </div>
        <div className="flex justify-center w-full text-center bg-graytrans rounded border border-stroke py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark dark:text-white">
          <p className="text-white">Order Overview</p>
        </div>
      </div>

      {/* Add a flex container to center the white box */}
      <div className="flex justify-center items-center">
        <div className="bg-white shadow-default m-5 p-4 rounded-md text-center w-full max-w-3xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            Standard shipping: $ 200.00
          </h3>

          <h3 className="text-gray-800 mb-5">15 business days</h3>

          <form>
            <div className="mb-9">
              <h4 className="font-semibold mb-3">Add Location</h4>

              <div className="relative">
                <input
                  id="claimRef"
                  name="claimRef"
                  type="claimRef"
                  placeholder="Type location here..."
                  className="w-full rounded-lg border border-stroke bg-transparent  py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>

            <h3 className="text-base font-semibold text-gray-800 mb-5">
              Gold Palace uses UPS Access Points for deliveries in your country
            </h3>

            <div className="flex justify-center max-w-md text-center bg-blue rounded mt-10 border border-stroke py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark dark:text-white">
              <p className="text-white">Select your UPS Access Point</p>
            </div>

            <div className="mt-4 flex justify-end gap-4 mt-10">

              <Link to={'/billing'}>
              <button className="px-4 py-2 bg-primary w-[200px] text-white rounded-md">
                Proceed
              </button>

              </Link>
              <button className="px-4 py-2 bg-red-500 w-[200px] text-white rounded-md">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Delivery;
