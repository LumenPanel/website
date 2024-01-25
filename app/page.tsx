import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "./header";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AlertTriangle, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
export default function Home() {
  return (
    <section>
      <PageHeader>
        <Badge className="w-44" variant="destructive">Page Under Construction!</Badge>
        <PageHeaderHeading className="max-w-3xl">
          Powerful Server Management <u>Made Simple</u>
        </PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed Modern VPS, LXC and GameServer management panel
          with integrated billing.
        </PageHeaderDescription>
        <PageActions>
          <Button className="w-36" asChild>
            <Link href="https://demo.lumen.olekaleksander.dev">View Demo</Link>
          </Button>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/LumenPanel/panel"
            className={cn(buttonVariants({ variant: "outline" }), "w-36")}
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </PageActions>
      </PageHeader>
    </section>
  );
}
