import { MdDeleteSweep } from "react-icons/md"
import Swal from "sweetalert2"
import useAxiosSecure from "../../../hooks/useAxiosSecure"


const UserDataRow = ({ user, refetch }) => {
  const axiosSecure = useAxiosSecure()

  const handleUpdatRole = async (id, updatedRole) => {
    const res = await axiosSecure.patch(`/update-role/${id}`, { role: updatedRole })
    refetch()
    return res.data
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((res) => {
      if (res.isConfirmed) {
        axiosSecure.delete(`/delete-user/${id}`)
          .then(res => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
            refetch()
          })
      }
    })
  }


  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 '>{user?.name}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 '>{user?.email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 '>{user?.role}</p>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className="flex items-center gap-2">
          <select
            onChange={(e) => handleUpdatRole(user._id, e.target.value)}
            defaultValue={user?.role}
            required
            className='p-1 border-2 border-[#04264e] focus:outline-[#04264e] rounded-md text-gray-900  bg-white'
            name='category'
          >
            <option value='Student'>Student</option>
            <option value='Moderator'>Moderator</option>
            <option value='Admin'>Admin</option>
          </select>

          <button onClick={() => handleDelete(user._id)} className="btn btn-error btn-sm text-white">
            <MdDeleteSweep /> Delete
          </button>
        </div>
      </td>
    </tr>
  )
}

export default UserDataRow
