'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Info, CircleDollarSign, Heart, Church, HelpCircle, ChevronRight, Moon, X, Building2 } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Switch } from '@/components/ui/switch';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuAction,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
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

const spiritualDisciplines = [
  { label: 'Meditation', href: '/spiritual-disciplines/meditation' },
  { label: 'Prayer', href: '/spiritual-disciplines/prayer' },
  { label: 'Study', href: '/spiritual-disciplines/study' },
  { label: 'Simplicity', href: '/spiritual-disciplines/simplicity' },
  { label: 'Silence & Solitude', href: '/spiritual-disciplines/silence-and-solitude' },
  { label: 'Submission', href: '/spiritual-disciplines/submission' },
  { label: 'Service', href: '/spiritual-disciplines/service' },
  { label: 'Confession', href: '/spiritual-disciplines/confession' },
  { label: 'Worship', href: '/spiritual-disciplines/worship' },
  { label: 'Guidance', href: '/spiritual-disciplines/guidance' },
  { label: 'Celebration', href: '/spiritual-disciplines/celebration' },
];


export default function AppSidebar() {
  const pathname = usePathname();
  const isSacredPathwaysActive = pathname.startsWith('/sacred-pathways');
  const isSpiritualDisciplinesActive = pathname.startsWith('/spiritual-disciplines');
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { toggleSidebar, isMobile, setOpenMobile } = useSidebar();
  const handleNavClick = () => { if (isMobile) setOpenMobile(false); };

  return (
    <Sidebar>
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-1 z-10 flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
        aria-label="Close sidebar"
      >
        <X className="h-4 w-4" />
      </button>
      <SidebarHeader className="px-4 py-4">
        <Link href="/" onClick={handleNavClick} className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <span className="text-lg">🏔️</span>
          <span className="font-extrabold text-base leading-tight">Unicol Climbing</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === '/'}>
              <Link href="/" onClick={handleNavClick}>
                <Info />
                About Climbing Ministry
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === '/about-unicol'}>
              <Link href="/about-unicol" onClick={handleNavClick}>
                <Building2 />
                About Unicol Ministry
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === '/pricing-plans'}>
              <Link href="/pricing-plans" onClick={handleNavClick}>
                <CircleDollarSign />
                Pricing Plans
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <Collapsible defaultOpen={isSacredPathwaysActive} className="group/collapsible">
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === '/sacred-pathways'}>
                <Link href="/sacred-pathways" onClick={handleNavClick}>
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
                        <Link href={href} onClick={handleNavClick}>{label}</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>

          <Collapsible defaultOpen={isSpiritualDisciplinesActive} className="group/collapsible-disciplines">
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === '/spiritual-disciplines'}>
                <Link href="/spiritual-disciplines" onClick={handleNavClick}>
                  <Church />
                  Spiritual Disciplines
                </Link>
              </SidebarMenuButton>
              <CollapsibleTrigger asChild>
                <SidebarMenuAction>
                  <ChevronRight className="transition-transform group-data-[state=open]/collapsible-disciplines:rotate-90" />
                </SidebarMenuAction>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {spiritualDisciplines.map(({ label, href }) => (
                    <SidebarMenuSubItem key={href}>
                      <SidebarMenuSubButton asChild isActive={pathname === href}>
                        <Link href={href} onClick={handleNavClick}>{label}</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === '/faq'}>
              <Link href="/faq" onClick={handleNavClick}>
                <HelpCircle />
                FAQ
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-2 px-2 py-1">
          <Moon className="h-4 w-4" />
          <span className="text-sm">Dark Mode</span>
          <Switch
            className="ml-auto"
            checked={mounted && resolvedTheme === 'dark'}
            onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
          />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
