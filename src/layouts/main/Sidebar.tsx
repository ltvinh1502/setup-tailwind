import { useState } from 'react';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/', icon: '📊' },
    { name: 'Projects', href: '/projects', icon: '📁' },
    { name: 'Team', href: '/team', icon: '👥' },
    { name: 'Settings', href: '/settings', icon: '⚙️' },
  ];

  return (
    <aside
      className={`h-full border-r border-border bg-background transition-all duration-200 ease-in-out ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="flex h-full flex-col">
        {/* <div className="h-16 border-b border-border flex items-center px-4">
          <h1 className="text-xl font-semibold text-foreground">
            {!isCollapsed && 'Your App Name'}
          </h1>
        </div> */}
        <nav className="flex-1 space-y-1 p-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <span className="text-xl">{item.icon}</span>
              {!isCollapsed && (
                <span className="text-sm font-medium">{item.name}</span>
              )}
            </a>
          ))}
        </nav>
        <div className="border-t border-border p-4">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex w-full items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>
      </div>
    </aside>
  );
}
