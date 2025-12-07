//import { useEffect, useState } from 'react'


const ManageApplicationsDataRow = () => {
  // const axiosSecure = useAxiosSecure()
  // let [isOpen, setIsOpen] = useState(false)
  // const closeModal = () => setIsOpen(false

  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 '>gvtwev</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 '>fdgvs</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 '>$bgsv</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 '>fvjgvrtw</p>
      </td>
      {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 '>Dhaka</p>
      </td> */}
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 '>ljgdd</p>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center gap-2'>
          <select
            //value={statusUpdate}
            required
            className='p-1 border-2 border-lime-300 focus:outline-lime-500 rounded-md text-gray-900  bg-white'
            name='category'
          >
            <option value='Pending'>Pending</option>
            <option value='In Progress'>Start Processing</option>
            <option value='Delivered'>Deliver</option>
          </select>
          <button
            //onClick={() => setIsOpen(true)}
            className='relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
          >
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
            ></span>
            <span className='relative'>Cancel</span>
          </button>
        </div>
        {/* <DeleteModal isOpen={isOpen} closeModal={closeModal} /> */}
      </td>
    </tr>
  )
}

export default ManageApplicationsDataRow
