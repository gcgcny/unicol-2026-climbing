'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Info, CircleDollarSign, Heart, Church, HelpCircle, ChevronRight } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuAction,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

const sacredPathways = [
  { label: 'Naturalists', href: '/sacred-pathways/naturalists' },
  { label: 'Sensates', href: '/sacred-pathways/sensates' },
  { label: 'Traditionalists', href: '/sacred-pathways/traditionalists' },
  { label: 'Ascetics', href: '/sacred-pathways/ascetics' },
  { label: 'Activists', href: '/sacred-pathways/activists' },
  { label: 'Caregivers', href: '/sacred-pathways/caregivers' },
  { label: 'Enthusiasts', href: '/sacred-pathways/enthusiasts' },
  { label: 'Contemplatives', href: '/sacred-pathways/contemplatives' },
  { label: 'Intellectuals', href: '/sacred-pathways/intellectuals' },
];


export default function AppSidebar() {
  const pathname = usePathname();
  const isSacredPathwaysActive = pathname.startsWith('/sacred-pathways');

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
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === '/'}>
              <Link href="/">
                <Info />
                About Climbing Ministry
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === '/pricing-plans'}>
              <Link href="/pricing-plans">
                <CircleDollarSign />
                Pricing Plans
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <Collapsible defaultOpen={isSacredPathwaysActive} className="group/collapsible">
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === '/sacred-pathways'}>
                <Link href="/sacred-pathways">
                  <Heart />
                  Sacred Pathways
                </Link>
              </SidebarMenuButton>
              <CollapsibleTrigger asChild>
                <SidebarMenuAction>
                  <ChevronRight className="transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuAction>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {sacredPathways.map(({ label, href }) => (
                    <SidebarMenuSubItem key={href}>
                      <SidebarMenuSubButton asChild isActive={pathname === href}>
                        <Link href={href}>{label}</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === '/spiritual-disciplines'}>
              <Link href="/spiritual-disciplines">
                <Church />
                Spiritual Disciplines
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === '/faq'}>
              <Link href="/faq">
                <HelpCircle />
                FAQ
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
