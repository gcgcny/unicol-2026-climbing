'use client';

import { Menu } from 'lucide-react';
import { useSidebar } from '@/components/ui/sidebar';

export default function SidebarFloatingTrigger() {
  const { open, openMobile, isMobile, toggleSidebar } = useSidebar();
  const sidebarIsOpen = isMobile ? openMobile : open;

  if (sidebarIsOpen) return null;

  return (
    <button
      onClick={toggleSidebar}
      className="fixed top-3 left-3 md:top-4 md:left-4 z-50 flex h-12 w-12 md:h-9 md:w-9 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
      aria-label="Open sidebar"
    >
      <Menu className="h-6 w-6 md:h-4 md:w-4" />
    </button>
  );
}
