import { LuBookCheck } from "react-icons/lu";
import { MdOutlineReviews } from "react-icons/md";
import MenuItem from './MenuItem'
const ModaratorMenu = () => {
  return (
    <>
      <MenuItem
        icon={LuBookCheck}
        label='Manage Application'
        address='manage-application'
      />
      <MenuItem icon={MdOutlineReviews} label='All Reviews' address='all-reviews' />
    </>
  )
}

export default ModaratorMenu
