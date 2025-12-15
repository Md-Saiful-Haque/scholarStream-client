import { useQuery } from "@tanstack/react-query"
import ManageScholarshipDataRow from "../../../components/Dashboard/TableRows/ManageScholarshipDataRow"
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import LoadingSpinner from "../../LoadingSpinner"


const ManageScholarships = () => {
  const axiosSecure = useAxiosSecure()

  const { data: scholarships = [], refetch, isLoading } = useQuery({
    queryKey: ['scholarship'],
    queryFn: async () => {
      const res = await axiosSecure.get('/manage-scholarship')
      return res.data
    }
  })

  if(isLoading) return <LoadingSpinner />

  return (
    <>
      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8 '>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-lg font-medium'
                    >
                      Image
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-lg font-medium'
                    >
                      Scholarship Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-lg font-medium'
                    >
                      University Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-lg font-medium'
                    >
                      Scholarship Category
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-lg font-medium'
                    >
                      Subject Category
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-lg font-medium'
                    >
                      Degree
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-lg font-medium'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    scholarships.map(scholarship => <ManageScholarshipDataRow key={scholarship._id} scholarship={scholarship} refetch={refetch} />)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageScholarships
