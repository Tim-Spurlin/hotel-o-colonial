import { useEffect } from 'react'
import { Moon, Sun } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { useKV } from '@github/spark/hooks'

export function ThemeToggle() {
  const [theme, setTheme] = useKV<'light' | 'dark'>('theme-preference', 'light')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative transition-colors hover:bg-muted"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Sun size={24} weight="fill" className="text-primary transition-transform hover:rotate-90 duration-300" />
      ) : (
        <Moon size={24} weight="fill" className="text-primary transition-transform hover:-rotate-12 duration-300" />
      )}
    </Button>
  )
}
