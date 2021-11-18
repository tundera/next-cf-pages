import type { ErrorFallbackProps } from 'types'

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto">
      <p className="text-lg">An error occured. See the message below for details.</p>
      <div>
        <pre>
          <code>{error.message}</code>
        </pre>
      </div>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export default ErrorFallback
