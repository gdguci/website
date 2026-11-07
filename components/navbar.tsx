import Image from "next/image"
import Link from "next/link"

import gdgLogo from "@/app/gdgLogo.png"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

const navItems = [
  { label: "Events", href: "/events" },
  { label: "Mentorship", href: "/mentorship" },
  { label: "Projects", href: "/projects" },
  {label: "Team", href: "/team"}
]

export function Navbar() {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-24 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center"
        >
          <Image
            src={gdgLogo}
            alt="GDG UCI"
            width={40}
            height={33}
            priority
            className="h-[60px] w-auto object-contain"
          />
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  render={<Link href={item.href} />}
                  className="rounded-none bg-transparent px-5 py-3 text-[21px] hover:bg-transparent hover:underline focus:bg-transparent data-[active=true]:bg-transparent data-[active=true]:hover:bg-transparent data-[active=true]:focus:bg-transparent"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
