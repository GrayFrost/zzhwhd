import { ReactNode } from "react";

interface SectionHeaderProps {
  kicker: string;
  title: string;
  description?: string;
  meta?: string;
}

interface PageShellProps extends SectionHeaderProps {
  children: ReactNode;
  aside?: ReactNode;
  maxWidth?: "reading" | "wide" | "full";
  className?: string;
}

const widthClass = {
  reading: "max-w-4xl",
  wide: "max-w-7xl",
  full: "max-w-none",
};

export function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <header className="border-b border-line pb-8">
      <h1 className="journal-title max-w-4xl text-4xl leading-none text-foreground sm:text-5xl md:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}

export function PageShell({
  kicker: _kicker,
  title,
  description,
  meta: _meta,
  children,
  aside,
  maxWidth = "wide",
  className = "",
}: PageShellProps) {
  return (
    <main className={`mx-auto w-full ${widthClass[maxWidth]} px-4 py-10 sm:px-6 md:py-14 lg:px-8 ${className}`}>
      <SectionHeader
        kicker={_kicker}
        title={title}
        description={description}
        meta={_meta}
      />
      {aside ? (
        <div className="grid gap-8 pt-8 lg:grid-cols-[180px_1fr] lg:gap-10">
          <aside className="journal-card h-fit p-4 text-sm text-muted-foreground lg:sticky lg:top-24">
            {aside}
          </aside>
          <div className="min-w-0">{children}</div>
        </div>
      ) : (
        <div className="pt-8">{children}</div>
      )}
    </main>
  );
}
