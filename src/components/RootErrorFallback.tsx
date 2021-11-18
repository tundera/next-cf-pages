import type { ErrorFallbackProps } from 'types'

const RootErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <p className="text-2xl">App failed to load. See the message below for details.</p>
      <div>
        <pre>
          <code>{error.message}</code>
        </pre>
      </div>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export default RootErrorFallback
