import LoadingSpinner from 'src/components/LoadingSpinner'

const FullPageSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <LoadingSpinner />
    </div>
  )
}

export default FullPageSpinner
