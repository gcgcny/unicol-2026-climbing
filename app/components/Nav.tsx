'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { label: 'About Climbing Ministry', href: '/' },
  { label: 'Pricing Plans', href: '/pricing-plans' },
  { label: 'Sacred Pathways', href: '/sacred-pathways' },
  { label: 'Spiritual Disciplines', href: '/spiritual-disciplines' },
  { label: 'FAQ', href: '/faq' },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="border-b bg-background sticky top-0 z-50">
      <ul className="flex flex-wrap max-w-4xl mx-auto px-4 list-none">
        {tabs.map((tab) => (
          <li key={tab.href}>
            <Link
              href={tab.href}
              className={[
                'block px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-150',
                pathname === tab.href
                  ? 'text-foreground border-b-2 border-primary -mb-px'
                  : 'text-muted-foreground hover:text-foreground',
              ].join(' ')}
            >
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
