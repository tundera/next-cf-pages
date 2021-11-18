import type { FC } from 'react'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FiSun, FiMoon } from 'react-icons/fi'

import Footer from 'src/components/Footer'

const Container: FC = ({ children }) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <div className="bg-gray-200 dark:bg-gray-700">
      <div className="flex flex-col px-8 min-h-screen">
        <nav className="flex items-center justify-between w-full relative max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-200  dark:bg-gray-700 bg-opacity-60 dark:text-gray-100">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
          <div className="ml-[-0.60rem]"></div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-9 h-9 flex items-center justify-center  hover:ring-2 ring-gray-300 transition-all"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && resolvedTheme === 'dark' ? (
              <FiSun className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            ) : (
              <FiMoon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            )}
          </button>
        </nav>
        <main id="skip" className="flex flex-col justify-center px-8 bg-gray-200 dark:bg-gray-700">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Container
