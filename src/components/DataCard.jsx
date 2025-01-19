import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const DataCard = ({ count, name, icon }) => {
    const { theme } = useContext(DataContext)
    return (
        <div className=' flex items-center justify-between px-5 py-10 rounded-2xl'
            style={{ background: theme.bgColor, color: theme.text }}
        >
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