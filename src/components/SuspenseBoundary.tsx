import { Suspense, SuspenseProps } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useQueryErrorResetBoundary } from 'react-query'

import ErrorFallback from 'src/components/ErrorFallback'

type SuspenseBoundaryProps = SuspenseProps

const SuspenseBoundary = ({ fallback, children }: SuspenseBoundaryProps) => {
  const { reset } = useQueryErrorResetBoundary()

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </ErrorBoundary>
  )
}

export default SuspenseBoundary
