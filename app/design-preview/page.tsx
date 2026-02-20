"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import UnderConstruction from "@/app/components/UnderConstruction"
import { Mountain, Heart, Star, Trash2, Mail, Search } from "lucide-react"

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold border-b pb-2">{title}</h2>
      {children}
    </section>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground pt-2">
      {children}
    </h3>
  )
}

function ColorSwatch({
  name,
  variable,
}: {
  name: string
  variable: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="h-12 w-full rounded-md border border-border shadow-sm"
        style={{ backgroundColor: `var(${variable})` }}
      />
      <div className="text-xs leading-tight">
        <div className="font-medium">{name}</div>
        <div className="text-muted-foreground font-mono">{variable}</div>
      </div>
    </div>
  )
}

export default function DesignPreview() {
  const [switchOn, setSwitchOn] = useState(false)

  return (
    <main className="max-w-4xl mx-auto space-y-12 pb-16">
      <div className="space-y-1 pt-2">
        <h1 className="text-3xl font-bold">Design Preview</h1>
        <p className="text-muted-foreground">
          All available colors, components, and states for this site. Not linked
          from navigation — access directly via <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">/design-preview</code>.
        </p>
      </div>

      {/* ── Colors ──────────────────────────────────────────────────────── */}
      <Section title="Colors">
        <SubHeading>Base</SubHeading>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <ColorSwatch name="Background" variable="--background" />
          <ColorSwatch name="Foreground" variable="--foreground" />
          <ColorSwatch name="Border" variable="--border" />
          <ColorSwatch name="Input" variable="--input" />
          <ColorSwatch name="Ring" variable="--ring" />
        </div>

        <SubHeading>Semantic</SubHeading>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <ColorSwatch name="Primary" variable="--primary" />
          <ColorSwatch name="Primary FG" variable="--primary-foreground" />
          <ColorSwatch name="Secondary" variable="--secondary" />
          <ColorSwatch name="Secondary FG" variable="--secondary-foreground" />
          <ColorSwatch name="Muted" variable="--muted" />
          <ColorSwatch name="Muted FG" variable="--muted-foreground" />
          <ColorSwatch name="Accent" variable="--accent" />
          <ColorSwatch name="Accent FG" variable="--accent-foreground" />
          <ColorSwatch name="Destructive" variable="--destructive" />
        </div>

        <SubHeading>Card &amp; Popover</SubHeading>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <ColorSwatch name="Card" variable="--card" />
          <ColorSwatch name="Card FG" variable="--card-foreground" />
          <ColorSwatch name="Popover" variable="--popover" />
          <ColorSwatch name="Popover FG" variable="--popover-foreground" />
        </div>

        <SubHeading>Sidebar</SubHeading>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <ColorSwatch name="Sidebar" variable="--sidebar" />
          <ColorSwatch name="Sidebar FG" variable="--sidebar-foreground" />
          <ColorSwatch name="Sidebar Primary" variable="--sidebar-primary" />
          <ColorSwatch name="Sidebar Primary FG" variable="--sidebar-primary-foreground" />
          <ColorSwatch name="Sidebar Accent" variable="--sidebar-accent" />
          <ColorSwatch name="Sidebar Accent FG" variable="--sidebar-accent-foreground" />
          <ColorSwatch name="Sidebar Border" variable="--sidebar-border" />
          <ColorSwatch name="Sidebar Ring" variable="--sidebar-ring" />
        </div>

        <SubHeading>Charts</SubHeading>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <ColorSwatch name="Chart 1" variable="--chart-1" />
          <ColorSwatch name="Chart 2" variable="--chart-2" />
          <ColorSwatch name="Chart 3" variable="--chart-3" />
          <ColorSwatch name="Chart 4" variable="--chart-4" />
          <ColorSwatch name="Chart 5" variable="--chart-5" />
        </div>
      </Section>

      {/* ── Typography ──────────────────────────────────────────────────── */}
      <Section title="Typography">
        <div className="space-y-3">
          <h1>Heading 1 — Unicol Climbing Ministry</h1>
          <h2>Heading 2 — Sacred Pathways</h2>
          <h3>Heading 3 — Spiritual Disciplines</h3>
          <h4>Heading 4 — Pricing Plans</h4>
          <p>
            Body — The quick brown fox jumps over the lazy dog. We meet every
            Friday at the Stronghold Gym for climbing and community.
          </p>
          <p className="text-sm">
            Small text — Secondary body copy. Used in card descriptions and
            supporting content.
          </p>
          <p className="text-xs">
            Extra small — Tertiary text for labels and meta information.
          </p>
          <p className="text-muted-foreground">
            Muted foreground — Used for captions, placeholders, and de-emphasised content.
          </p>
          <p className="text-muted-foreground text-sm">
            Small muted — Descriptive subtitles and secondary labels.
          </p>
          <p>
            <strong>Bold</strong> and <em>italic</em> inline emphasis.
          </p>
          <p>
            <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
              inline code
            </code>{" "}
            for technical references.
          </p>
        </div>
      </Section>

      {/* ── Buttons ─────────────────────────────────────────────────────── */}
      <Section title="Buttons">
        <SubHeading>Variants</SubHeading>
        <div className="flex flex-wrap gap-3">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>

        <SubHeading>With icons</SubHeading>
        <div className="flex flex-wrap gap-3">
          <Button>
            <Mountain /> Default
          </Button>
          <Button variant="secondary">
            <Heart /> Secondary
          </Button>
          <Button variant="outline">
            <Star /> Outline
          </Button>
          <Button variant="destructive">
            <Trash2 /> Delete
          </Button>
        </div>

        <SubHeading>Sizes</SubHeading>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>

        <SubHeading>Icon buttons</SubHeading>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="icon-xs" variant="outline">
            <Search />
          </Button>
          <Button size="icon-sm" variant="outline">
            <Search />
          </Button>
          <Button size="icon" variant="outline">
            <Search />
          </Button>
          <Button size="icon-lg" variant="outline">
            <Search />
          </Button>
        </div>

        <SubHeading>States</SubHeading>
        <div className="flex flex-wrap gap-3">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>
            Outline disabled
          </Button>
          <Button variant="destructive" disabled>
            Destructive disabled
          </Button>
        </div>
      </Section>

      {/* ── Badges ──────────────────────────────────────────────────────── */}
      <Section title="Badges">
        <div className="flex flex-wrap gap-3">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </Section>

      {/* ── Cards ───────────────────────────────────────────────────────── */}
      <Section title="Cards">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                Supporting description text in muted foreground.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Card body content with some text to show the layout and spacing.
              </p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button size="sm">Primary action</Button>
              <Button size="sm" variant="ghost">
                Cancel
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Minimal Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                A card without a description or footer — just title and content.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card with Badge</CardTitle>
              <CardDescription>
                Cards can contain any components including badges.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex gap-2">
              <Badge>Active</Badge>
              <Badge variant="secondary">Pending</Badge>
              <Badge variant="outline">Draft</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card with Separator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">Section A content goes here.</p>
              <Separator />
              <p className="text-sm text-muted-foreground">
                Section B content below the divider.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* ── Inputs ──────────────────────────────────────────────────────── */}
      <Section title="Inputs">
        <div className="max-w-sm space-y-3">
          <Input placeholder="Placeholder text..." />
          <Input defaultValue="Filled input value" />
          <Input disabled placeholder="Disabled input" />
          <Input disabled defaultValue="Disabled with value" />
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
            <Input className="pl-9" placeholder="Email address..." type="email" />
          </div>
        </div>
      </Section>

      {/* ── Switch ──────────────────────────────────────────────────────── */}
      <Section title="Switch">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Switch checked={switchOn} onCheckedChange={setSwitchOn} />
            <span className="text-sm">{switchOn ? "On" : "Off"} (interactive)</span>
          </div>
          <div className="flex items-center gap-3">
            <Switch checked={true} disabled />
            <span className="text-sm text-muted-foreground">Checked, disabled</span>
          </div>
          <div className="flex items-center gap-3">
            <Switch checked={false} disabled />
            <span className="text-sm text-muted-foreground">Unchecked, disabled</span>
          </div>
        </div>
      </Section>

      {/* ── Accordion ───────────────────────────────────────────────────── */}
      <Section title="Accordion">
        <Accordion type="single" collapsible className="max-w-sm">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is climbing ministry?</AccordionTrigger>
            <AccordionContent>
              A community gathering around climbing as a shared activity with a
              spiritual dimension.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>When do you meet?</AccordionTrigger>
            <AccordionContent>
              Every Friday evening at the Stronghold Gym. Check the pricing page
              for details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do I need experience?</AccordionTrigger>
            <AccordionContent>
              No experience needed — complete beginners are very welcome.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      {/* ── Separator ───────────────────────────────────────────────────── */}
      <Section title="Separator">
        <div className="space-y-4">
          <div>
            <p className="text-sm mb-3">Above the separator</p>
            <Separator />
            <p className="text-sm mt-3">Below the separator</p>
          </div>
          <div className="flex items-center gap-4 h-8">
            <span className="text-sm">Left</span>
            <Separator orientation="vertical" className="h-full" />
            <span className="text-sm">Right</span>
          </div>
        </div>
      </Section>

      {/* ── Skeleton ────────────────────────────────────────────────────── */}
      <Section title="Skeleton (Loading States)">
        <div className="space-y-5 max-w-sm">
          <div className="space-y-2">
            <Skeleton className="h-4 w-56" />
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-64" />
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
          <Skeleton className="h-32 w-full rounded-xl" />
        </div>
      </Section>

      {/* ── Tooltip ─────────────────────────────────────────────────────── */}
      <Section title="Tooltip">
        <TooltipProvider>
          <div className="flex flex-wrap gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>This is a tooltip</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="outline">
                  <Mail />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Send email</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="ghost">
                  <Search />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Search the site</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </Section>

      {/* ── Custom Components ───────────────────────────────────────────── */}
      <Section title="Custom Components">
        <SubHeading>UnderConstruction</SubHeading>
        <UnderConstruction />
      </Section>
    </main>
  )
}
