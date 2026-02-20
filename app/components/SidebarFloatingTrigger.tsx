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
      className="fixed bottom-3 left-3 md:bottom-auto md:top-4 md:left-4 z-50 flex h-9 w-9 items-center justify-center rounded-md border bg-background text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
      aria-label="Open sidebar"
    >
      <PanelLeftIcon className="h-4 w-4" />
    </button>
  );
}
