'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AlignJustify } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';

export function PageNavigateMenu() {
  return (
    <>
      <div className="block md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button aria-label="Open menu">
              <AlignJustify />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Pages</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* <Link href="/">
              <DropdownMenuItem>Native table</DropdownMenuItem>
            </Link> */}
            <Link href="/ag-grid">
              <DropdownMenuItem>AG Grid</DropdownMenuItem>
            </Link>
            <Link href="/react-window">
              <DropdownMenuItem>React Window</DropdownMenuItem>
            </Link>
            <Link href="/dashboard">
              <DropdownMenuItem>Dashboard</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/native" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Native</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/ag-grid" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>AG Grid</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/react-window" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>React Window</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/dashboard" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Dashboard</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}
