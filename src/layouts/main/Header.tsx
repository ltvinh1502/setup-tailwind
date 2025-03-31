import { ThemeToggle } from '../../theme/ThemeToggle';

export function Header() {
  return (
    <header className="h-16 border-b border-border bg-background">
      <div className="flex h-full items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold text-foreground">
            Your App Name
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="relative">
            <button className="flex items-center gap-2 rounded-full p-2 hover:bg-muted">
              <div className="h-8 w-8 rounded-full bg-muted" />
              <span className="text-sm font-medium text-foreground">
                User Name
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
