import { HashLoader } from "react-spinners"


const LoadingSpinner = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <HashLoader size={100} color='#c4e5f2' />
    </div>
  )
}

export default LoadingSpinner
