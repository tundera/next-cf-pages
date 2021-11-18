import type { AppProps } from 'next/app'

import { useState, Suspense } from 'react'
import { ThemeProvider } from 'next-themes'
import { QueryClientProvider, QueryClient, useQueryErrorResetBoundary } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ErrorBoundary } from 'react-error-boundary'

import FullPageSpinner from 'src/components/FullPageSpinner'
import RootErrorFallback from 'src/components/RootErrorFallback'

import 'src/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            refetchOnMount: 'always',
            suspense: true,
          },
        },
      }),
  )

  const { reset } = useQueryErrorResetBoundary()

  return (
    <ErrorBoundary FallbackComponent={RootErrorFallback} onReset={reset}>
      <Suspense fallback={<FullPageSpinner />}>
        <ThemeProvider attribute="class">
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ThemeProvider>
      </Suspense>
    </ErrorBoundary>
  )
}

export default MyApp
