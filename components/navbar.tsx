"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Key } from "lucide-react";

export function NavBar() {
  const pathname = usePathname();

  return (
    <div className="bg-card fixed top-0 right-0 left-0 border-b w-full mr-4">
      <div className=" max-w-screen-2xl flex my-2 mx-4 2xl:mx-auto flex-grow justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className="ml-4 md:ml-0 mr-6 flex items-center space-x-2 hover:opacity-75 duration-75"
          >
            <Image height={24} alt="Logo" width={24} src={logo} />
            <span className="hidden font-bold md:inline-block">Lumen</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/"
              className={cn(
                "transition-colors hover:text-foreground/90",
                pathname === "/" ? "text-foreground" : "text-foreground/70"
              )}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className={cn(
                "transition-colors hover:text-foreground/90",
                pathname === "/pricing"
                  ? "text-foreground"
                  : "text-foreground/70"
              )}
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className={cn(
                "transition-colors hover:text-foreground/90",
                pathname.startsWith("/docs")
                  ? "text-foreground"
                  : "text-foreground/70"
              )}
            >
              Docs
            </Link>
            <Link
              href="https://github.com/LumenPanel/panel"
              className={cn(
                "hidden text-foreground/70 transition-colors hover:text-foreground/90 lg:block"
              )}
            >
              GitHub
            </Link>
          </nav>
        </div>
        <div>
          <Button><span className="hidden md:block">Manage license</span><Key className="md:hidden"/></Button>
        </div>
      </div>
    </div>
  );
}
