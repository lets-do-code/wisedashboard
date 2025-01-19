import React from 'react'

const DataCard = ({ count, name, icon }) => {
    return (
        <div className='bg-[#2A9B63] text-white flex items-center justify-between px-5 py-10 rounded-2xl'>
            <div className='flex flex-col font-semibold '>
                <h1 className='text-[30px]'>{count}</h1>
                <p className='text-[14px]  '>{name}</p>
            </div>
            <div>
                {icon}
            </div>
        </div>
    )
}

export default DataCard