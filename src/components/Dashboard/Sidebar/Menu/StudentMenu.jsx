import { MdReviews, MdOutlineLibraryBooks  } from "react-icons/md";
import MenuItem from './MenuItem'

//import { GrUserAdmin } from 'react-icons/gr'
//import { useState } from 'react'
//import BecomeSellerModal from '../../../Modal/BecomeSellerModal'

const StudentMenu = () => {
  // const [isOpen, setIsOpen] = useState(false)

  // const closeModal = () => {
  //   setIsOpen(false)
  // }

  return (
    <>

      <MenuItem icon={MdReviews} label='My Reviews' address='my-reviews' />
      <MenuItem icon={MdOutlineLibraryBooks} label='My Applications' address='my-applications' />
      {/* <div
        //onClick={() => setIsOpen(true)}
        className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'
      >
      </div> */}

      {/* <BecomeSellerModal closeModal={closeModal} isOpen={isOpen} /> */}
    </>
  )
}

export default StudentMenu
