import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className='rounded-md p-2 bg-secondary text-secondary-foreground'
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
