import { ModeToggle } from '@/components/mode-toggle';
import { SidebarTrigger } from '@/components/ui/sidebar';

export function Header() {
  return (
    <header className='bg-background sticky inset-x-0 top-0 isolate z-10 flex shrink-0 items-center gap-2 border-b'>
      <div className='flex h-14 w-full items-center gap-2 px-4'>
        <SidebarTrigger />
        <div
          data-orientation='vertical'
          role='none'
          data-slot='separator-root'
          className='bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px mr-2 data-[orientation=vertical]:h-4'
        ></div>
        <nav
          aria-label='Main'
          data-orientation='horizontal'
          dir='ltr'
          data-slot='navigation-menu'
          data-viewport='true'
          className='group/navigation-menu relative max-w-max flex-1 items-center justify-center hidden sm:flex'
        >
          <div style={{ position: 'relative' }}>
            <ul
              data-orientation='horizontal'
              data-slot='navigation-menu-list'
              className='group flex flex-1 list-none items-center justify-center gap-2 *:data-[slot=navigation-menu-item]:h-7 **:data-[slot=navigation-menu-link]:py-1 **:data-[slot=navigation-menu-link]:font-medium'
              dir='ltr'
            >
              <li data-slot='navigation-menu-item' className='relative'>
                <a
                  data-active='true'
                  data-slot='navigation-menu-link'
                  className="data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&amp;_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&amp;_svg:not([class*='size-'])]:size-4"
                  data-radix-collection-item=''
                  href='/'
                >
                  Home
                </a>
              </li>
              <li data-slot='navigation-menu-item' className='relative'>
                <a
                  data-active='false'
                  data-slot='navigation-menu-link'
                  className="data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&amp;_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&amp;_svg:not([class*='size-'])]:size-4"
                  data-radix-collection-item=''
                  href='/charts'
                >
                  Charts
                </a>
              </li>
              <li data-slot='navigation-menu-item' className='relative'>
                <a
                  data-active='false'
                  data-slot='navigation-menu-link'
                  className="data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&amp;_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&amp;_svg:not([class*='size-'])]:size-4"
                  data-radix-collection-item=''
                  href='/forms'
                >
                  Forms
                </a>
              </li>
            </ul>
          </div>
          <div className='absolute top-full left-0 isolate z-50 flex justify-center'></div>
        </nav>
        <div className='ml-auto flex items-center gap-2'>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
