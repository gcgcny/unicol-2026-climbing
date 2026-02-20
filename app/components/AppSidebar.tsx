'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Info, CircleDollarSign, Heart, Church, HelpCircle } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const navItems = [
  { label: 'About Climbing Ministry', href: '/', icon: Info },
  { label: 'Pricing Plans', href: '/pricing-plans', icon: CircleDollarSign },
  { label: 'Sacred Pathways', href: '/sacred-pathways', icon: Heart },
  { label: 'Spiritual Disciplines', href: '/spiritual-disciplines', icon: Church },
  { label: 'FAQ', href: '/faq', icon: HelpCircle },
];

export default function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="px-4 py-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🏔️</span>
          <span className="font-extrabold text-base leading-tight">Unicol Climbing</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map(({ label, href, icon: Icon }) => (
            <SidebarMenuItem key={href}>
              <SidebarMenuButton asChild isActive={pathname === href}>
                <Link href={href}>
                  <Icon />
                  {label}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
