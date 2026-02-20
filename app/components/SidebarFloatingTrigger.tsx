'use client';

import { PanelLeftIcon } from 'lucide-react';
import { useSidebar } from '@/components/ui/sidebar';

export default function SidebarFloatingTrigger() {
  const { open, openMobile, isMobile, toggleSidebar } = useSidebar();
  const sidebarIsOpen = isMobile ? openMobile : open;

  if (sidebarIsOpen) return null;

  return (
    <button
      onClick={toggleSidebar}
      className="fixed bottom-3 left-3 md:bottom-auto md:top-4 md:left-4 z-50 flex h-12 w-12 lg:h-9 lg:w-9 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
      aria-label="Open sidebar"
    >
      <PanelLeftIcon className="h-5 w-5 lg:h-4 lg:w-4" />
    </button>
  );
}
