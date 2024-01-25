"use client";

import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "./header";

import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Features from "./features";
import FadeUp from "@/components/fade-up";

export default function Home() {
  return (
    <main>
      <FadeUp>
        <section className="lg:flex items-center mt-16">
          <PageHeader className="flex-grow mt-4">
            <Badge className="w-[97px]" variant="destructive">
              Not finished!
            </Badge>
            <PageHeaderHeading className="max-w-3xl">
              Server Management
              <br />
              <u>Made Simple</u>
            </PageHeaderHeading>
            <PageHeaderDescription>
              Beautifully designed and modern VPS, LXC and GameServer management
              panel with integrated billing.
            </PageHeaderDescription>
            <PageActions className="flex space-x-4">
              <Button className="w-36" asChild>
                <Link href="/docs/get-started">Get Started</Link>
              </Button>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://github.com/LumenPanel/panel"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-36 flex items-center"
                )}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </PageActions>
          </PageHeader>

          <Image
            src="/screenshots/server-list.webp"
            alt={"Server List"}
            className="rounded-lg shadow-xl bg-card border mt-12"
            width={3840 / 5}
            height={2134 / 5}
          />
        </section>
      </FadeUp>
      <Features />
    </main>
  );
}
