import { useQuery } from '@tanstack/react-query'
import ManageApplicationsDataRow from "../../../components/Dashboard/TableRows/ManageApplicationsDataRow"
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import LoadingSpinner from '../../LoadingSpinner'

const ManageApplications = () => {
  // const { user } = useAuth()
  const axiosSecure = useAxiosSecure()

  const { data: applications = [], refetch, isLoading } = useQuery({
    queryKey: ['applications'],
    queryFn: async () => {
      const res = await axiosSecure.get('/all-applications')
      return res.data
    }
  })

  if(isLoading) return <LoadingSpinner />
  return (
    <>
      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-md font-bold'
                    >
                       Applicant Name  
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-md font-bold'
                    >
                      Applicant Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-md font-bold'
                    >
                      University Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-md font-bold'
                    >
                      Application Feedback   
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-md font-bold'
                    >
                      Payment Status
                    </th> 
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-md font-bold'
                    >
                      Application Status
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-md font-bold'
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    applications.map(application => <ManageApplicationsDataRow key={application._id} application={application} refetch={refetch} />)
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

export default ManageApplications
