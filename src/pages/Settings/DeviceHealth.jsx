import React from 'react';
import { FaHeartbeat, FaMemory, FaMicrochip } from 'react-icons/fa';

const DeviceHealth = () => {
    const [health, setHealth] = React.useState({
        cpu: 'Good',
        ram: '8 GB Available',
        systemHealth: 'Excellent',
    });

    return (
        <div className="mt-[60px] max-lg:h-screen px-5 w-full py-5 relative">
            <div className="flex items-center justify-center bg-gray-100 px-5 py-10 h-full">
                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                        Device Health
                    </h2>
                    <ul className="space-y-4">
                        <li className="flex items-center ">
                            <FaMicrochip className="text-blue-500 w-6 h-6 mr-3" />
                            <div className="flex w-full justify-between text-lg font-medium text-gray-700">
                                <p>CPU: </p>
                                <p className="font-semiboldtext-gray-900">{health.cpu}</p>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <FaMemory className="text-green-500 w-6 h-6 mr-3" />
                            <div className="flex w-full justify-between text-lg font-medium text-gray-700">
                                <p>RAM: </p>
                                <p className="font-semiboldtext-gray-900">{health.ram}</p>
                            </div>

                        </li>
                        <li className="flex items-center">
                            <FaHeartbeat className="text-red-500 w-6 h-6 mr-3" />
                            <div className="flex w-full justify-between text-lg font-medium text-gray-700">
                                <p>System Health: </p>
                                <p className="font-semiboldtext-gray-900">{health.systemHealth}</p>
                            </div>

                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DeviceHealth;
