import Balance from "react-wrap-balancer";

import { cn } from "@/lib/utils";

function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "flex max-w-[980px] flex-col items-left gap-4 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

function PageHeaderHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <Balance>
      <h1
        className={cn(
          "text-left text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]",
          className
        )}
        {...props}
      />
    </Balance>
  );
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Balance
      className={cn(
        "max-w-[750px] text-left text-lg text-muted-foreground sm:text-xl",
        className
      )}
      {...props}
    />
  );
}

function PageActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex w-full items-left justify-left space-x-4 py-4 md:pb-10",
        className
      )}
      {...props}
    />
  );
}

export { PageHeader, PageHeaderHeading, PageHeaderDescription, PageActions };
