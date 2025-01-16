import React, { useCallback, useEffect, useState } from 'react';
import CardDataStats from '../../components/CardDataStats';

import { Link } from 'react-router-dom';
import {
  baseUrl,
  baseUrlMedia,
  truncateText,
  userToken,
} from '../../constants';

const TrackingTransit: React.FC = () => {
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
      <div>
        <p className="text-3xl mb-5 text-center font-black text-black">
          Track Order
        </p>
        <p className="text-2xl mb-5 text-center font-semibold text-black">
          #GP-34DTE9IP0-G
        </p>
      </div>

      <div className="grid grid-cols-4 gap-1">
        <div className="flex justify-center items-center w-full text-center bg-primary rounded border border-stroke py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark dark:text-white">
          <p className="text-white">INITIATED 🏁</p>
        </div>
        <div className="flex justify-center items-center w-full text-center bg-primary rounded border border-stroke py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark dark:text-white">
          <p className="text-white">PACKED 📦</p>
        </div>

        <div className="flex justify-center items-center w-full text-center bg-primary rounded border border-stroke py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark dark:text-white">
          <p className="text-white">IN TRANSIT 🚚</p>
        </div>

        <Link to={'/tracking-delivery'}>
        <div className="flex justify-center items-center w-full text-center bg-graytrans rounded border border-stroke py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark dark:text-white">
          <p className="text-white">DELIVERED 🏆</p>
        </div>
        </Link>
      </div>

      {/* Add a flex container to center the white box */}
      <div className="flex justify-center items-center">
  <div className="w-full max-w-6xl px-4"> {/* Increase the max-width here */}
    <div className="p-4 mt-4 rounded-md text-center w-full">
      <div className="grid grid-cols-2 gap-6"> {/* Adjusted gap */}
        <div className="col-span-1">
          <div className="flex gap-4 justify-start items-center mb-4">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <h3 className="text-gray-800">
            Package has left secure facility            </h3>
          </div>
          <div className="flex gap-4 justify-start items-center mb-4">
            <div className="w-3 h-3 bg-graytrans rounded"></div>
            <h3 className="text-gray-800">Moving through logistics network</h3>
          </div>
          <div className="flex gap-4 justify-start items-center mb-4">
            <div className="w-3 h-3 bg-graytrans rounded"></div>
            <h3 className="text-gray-800">
            Continuous GPS tracking          </h3>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex gap-4 justify-start items-center mb-4">
            <div className="w-3 h-3 bg-graytrans rounded"></div>
            <h3 className="text-gray-800">
            Armored vehicle/secure courier            </h3>
          </div>
          <div className="flex gap-4 justify-start items-center mb-4">
            <div className="w-3 h-3 bg-graytrans rounded"></div>
            <h3 className="text-gray-800">Regular security checkpoints</h3>
          </div>
          <div className="flex gap-4 justify-start items-center mb-4">
            <div className="w-3 h-3 bg-graytrans rounded"></div>
            <h3 className="text-gray-800">Full insurance coverage active</h3>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-6 grid grid-cols-1 gap-6 md:gap-8 2xl:gap-10">
      <div className="dark:border-strokedark dark:bg-boxdark">
        <div className="px-0 md:px-0">
          <div className="w-full rounded-xl border border-stroke bg-white shadow-default">
            <div className="grid grid-cols-2 gap-10 p-10"> {/* Increased padding and gap */}
              <div>
                <h4 className="font-semibold mb-4">
                  Shipping Address
                </h4>
                <h4 className="font-normal mb-2">
                  Standard Shipping
                  <span className="ml-2 font-semibold">$100.00</span>
                </h4>
                <h4 className="font-normal mb-3">
                  10 - 15 business days
                </h4>
                <h4 className="font-normal">Geoffrey Fisher</h4>
                <h4 className="font-normal mb-4">LES VERGERS D ALIX</h4>
                <h4 className="font-normal">
                  13 RUE GEORGES MARIE, ISSY-LES
                </h4>
                <h4 className="font-normal">
                  MOULINEAUX 92130, France
                </h4>

                <h4 className="font-semibold mt-10">
                  Total products to deliver
                </h4>
                <h4 className="font-normal">5</h4>
              </div>

              <div>
                <h4 className="font-semibold mb-4">
                  Billing Address
                </h4>
                <h4 className="font-normal">Geoffrey Fisher</h4>
                <h4 className="font-normal mb-4">LES VERGERS D ALIX</h4>
                <h4 className="font-normal">
                  13 RUE GEORGES MARIE, ISSY-LES
                </h4>
                <h4 className="font-normal">
                  MOULINEAUX 92130, France
                </h4>
                <h4 className="font-normal mt-5">+423123432321</h4>

                <h4 className="font-semibold mt-10">
                  Payment Method
                </h4>
                <h4 className="font-normal">Bitcoin</h4>
              </div>
            </div>

            {portfolio.map((item, index) => (
              <div key={index} className="border-b border-graytrans">
                <button
                  onClick={() => toggle(index)}
                  className="w-full shadow-default flex justify-between items-center py-4 px-6 text-left font-semibold text-gray-800 focus:outline-none"
                >
                  <div className="flex items-center">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-8 h-8 mr-2 rounded-full object-cover"
                      />
                    )}
                    <span>{item.title}</span>
                  </div>
                  <span
                    className={`transform transition-transform ${
                      activeIndex === index ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <table className="w-full table-auto border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-2 text-left">Asset</th>
                          <th className="px-4 py-2 text-left">Value</th>
                          <th className="px-4 py-2 text-left">Quantity</th>
                          <th className="px-4 py-2 text-left">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.content.map((asset, idx) => (
                          <tr key={idx}>
                            <td className="px-4 py-2 flex items-center space-x-2">
                              {asset.image && (
                                <img
                                  src={asset.image}
                                  alt={asset.type}
                                  className="w-8 h-8 object-cover"
                                />
                              )}
                              <span>{asset.type}</span>
                            </td>
                            <td className="px-4 py-2">{asset.value}</td>
                            <td className="px-4 py-2">{asset.quantity}</td>
                            <td className="px-4 py-2">{asset.total}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default TrackingTransit;
