import { FaUserCog } from 'react-icons/fa'
import { FaGraduationCap } from "react-icons/fa";
import { IoBook } from "react-icons/io5";
import MenuItem from './MenuItem'

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaGraduationCap}
        label='Add-Scholarship'
        address='add-scholarship'
      />
      <MenuItem icon={IoBook} label='Manage Scholarships' address='manage-scholarships' />
      <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
    </>
  )
}

export default AdminMenu
