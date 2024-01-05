'use client'
import { cn } from '@/lib/utils';
import { Category } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useRef, useEffect } from 'react';

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathName = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathName === `/category/${route.id}`,
  }));

  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    if (showSidebar) {
      document.addEventListener('mousedown', closeSidebar);
    } else {
      document.removeEventListener('mousedown', closeSidebar);
    }
    return () => {
      document.removeEventListener('mousedown', closeSidebar);
    };
  }, [showSidebar]);

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 relative">
      <div className="lg:flex lg:items-center lg:space-x-4 hidden">
        {routes.map((route) => (
          <Link
            key={route.label}
            href={route.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-black',
              route.active ? 'text-black' : 'text-neutral-500'
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
      <button onClick={toggleSidebar} className="lg:hidden focus:outline-none focus-visible:ring">
        ☰ {/* Burger icon */}
      </button>
      {showSidebar && (
        <aside ref={sidebarRef} className="fixed top-0 right-0 h-full w-64 bg-white z-10 shadow-lg">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">Categories</h2>
            <button onClick={toggleSidebar} className="focus:outline-none">
              &times; {/* Close icon */}
            </button>
          </div>
          <div className="p-4">
            {routes.map((route) => (
              <Link
                key={route.label}
                href={route.href}
                className={cn(
                  'block py-2 text-sm font-medium transition-colors hover:text-black',
                  route.active ? 'text-black' : 'text-neutral-500'
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </aside>
      )}
    </nav>
  );
};

export default MainNav;
