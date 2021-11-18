import type { AppProps } from 'next/app'

import { useState, Suspense } from 'react'
import { QueryClientProvider, QueryClient, useQueryErrorResetBoundary } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ErrorBoundary } from 'react-error-boundary'

import FullPageSpinner from 'src/components/FullPageSpinner'
import RootErrorFallback from 'src/components/RootErrorFallback'
import { ThemeProvider } from 'src/styles'

import '@fontsource/inter/variable.css'
import '@fontsource/fira-code/variable.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            suspense: true,
          },
        },
      }),
  )

  const { reset } = useQueryErrorResetBoundary()

  return (
    <ErrorBoundary FallbackComponent={RootErrorFallback} onReset={reset}>
      <Suspense fallback={<FullPageSpinner />}>
        <ThemeProvider>
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
