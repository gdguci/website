import Image from "next/image"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { label: "Events", href: "/events" },
  { label: "Mentorship", href: "/mentorship" },
  { label: "Projects", href: "/projects" },
  {label: "Team", href: "/team"}
]

export function Navbar() {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-3 px-3 sm:h-20 sm:px-4 lg:h-24 lg:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/gdgLogo.png"
            alt="GDGUCI"
            width={40}
            height={33}
            priority
            className="h-10 w-auto object-contain sm:h-12 lg:h-[60px]"
          />
        </Link>

        <NavigationMenu className="ml-auto hidden min-w-0 max-w-none justify-end overflow-x-auto lg:flex">
          <NavigationMenuList className="ml-auto w-max shrink-0 justify-end gap-0 sm:gap-1">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  render={<Link href={item.href} />}
                  className="rounded-none bg-transparent px-1.5 py-2 text-xs hover:bg-transparent hover:underline focus:bg-transparent data-[active=true]:bg-transparent data-[active=true]:hover:bg-transparent data-[active=true]:focus:bg-transparent sm:px-2 sm:py-3 sm:text-sm lg:px-5 lg:text-[21px]"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <button
                  type="button"
                  aria-label="Open navigation menu"
                  className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-border hover:bg-transparent focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                />
              }
            >
              <svg
                aria-hidden="true"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {navItems.map((item) => (
                <DropdownMenuItem
                  key={item.href}
                  render={<Link href={item.href} />}
                  className="justify-center text-center"
                >
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
