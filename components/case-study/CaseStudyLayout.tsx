import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type CaseElement = "div" | "section" | "article" | "main" | "header";

type CaseElementProps = HTMLAttributes<HTMLElement> & {
  as?: CaseElement;
  children?: ReactNode;
};

type CaseShellMaxWidth = "default" | "wide" | "media" | "none";
type CaseShellGutters = "page" | "viewport" | "none";

const shellMaxWidthClass: Record<CaseShellMaxWidth, string> = {
  default: "max-w-[1360px]",
  wide: "max-w-[1398px]",
  media: "max-w-[1400px]",
  none: "max-w-none"
};

const shellGutterClass: Record<CaseShellGutters, string> = {
  page: "w-full px-[clamp(20px,4vw,64px)]",
  viewport: "w-[calc(100%_-_40px)] md:w-[calc(100%_-_64px)]",
  none: "w-full"
};

function renderCaseElement(
  as: CaseElement = "div",
  props: HTMLAttributes<HTMLElement>,
  children: ReactNode
) {
  const Component = as;
  return <Component {...props}>{children}</Component>;
}

export function CasePageShell({
  as = "div",
  children,
  className,
  maxWidth = "default",
  gutters = "page",
  ...props
}: CaseElementProps & {
  maxWidth?: CaseShellMaxWidth;
  gutters?: CaseShellGutters;
}) {
  return renderCaseElement(
    as,
    {
      ...props,
      className: clsx(
        "relative mx-auto min-w-0",
        shellGutterClass[gutters],
        shellMaxWidthClass[maxWidth],
        className
      )
    },
    children
  );
}

export function CaseSection({
  as = "section",
  children,
  className,
  spacing = "default",
  ...props
}: CaseElementProps & {
  spacing?: "default" | "none";
}) {
  return renderCaseElement(
    as,
    {
      ...props,
      className: clsx(
        "relative w-full min-w-0 shrink-0",
        spacing === "default" && "py-[clamp(72px,10vw,160px)]",
        className
      )
    },
    children
  );
}

export function CaseHero({
  eyebrow,
  title,
  meta,
  media,
  children,
  className
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  meta?: ReactNode;
  media?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <CaseSection className={className}>
      <CasePageShell>
        <div className="flex min-w-0 flex-col gap-[clamp(48px,7vw,96px)]">
          {eyebrow ? (
            <div className="min-w-0 text-[clamp(14px,1vw,16px)] leading-[1.65] text-[#717171]">
              {eyebrow}
            </div>
          ) : null}
          <h1 className="min-w-0 text-[clamp(32px,5vw,72px)] font-bold leading-[1.05] tracking-[-0.04em] text-[#111]">
            {title}
          </h1>
          {children}
          {meta}
          {media}
        </div>
      </CasePageShell>
    </CaseSection>
  );
}

export function CaseMetaGrid({
  children,
  className,
  layout = "default",
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  layout?: "default" | "sidebar";
}) {
  return (
    <div
      {...props}
      className={clsx(
        "min-w-0 [&>*]:min-w-0",
        layout === "default" &&
          "grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_360px]",
        layout === "sidebar" && "grid grid-cols-1 gap-[32px] sm:grid-cols-2 lg:block",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CaseTextBlock({
  as = "div",
  children,
  className,
  unstyled = false,
  ...props
}: CaseElementProps & {
  unstyled?: boolean;
}) {
  return renderCaseElement(
    as,
    {
      ...props,
      className: clsx(
        "min-w-0",
        !unstyled && "max-w-[720px] text-[clamp(14px,1vw,16px)] leading-[1.65]",
        className
      )
    },
    children
  );
}

export function CaseSplitSection({
  children,
  className,
  layout = "default",
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  layout?: "default" | "desktopAbsolute";
}) {
  return (
    <div
      {...props}
      className={clsx(
        "min-w-0 [&>*]:min-w-0",
        layout === "default" &&
          "grid grid-cols-1 gap-[32px] lg:grid-cols-2 lg:gap-[64px]",
        layout === "desktopAbsolute" && "flex flex-col gap-[32px] lg:block",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CaseMediaBlock({
  children,
  className,
  aspect = "aspect-[1400/780]",
  maxWidth = "media",
  gutters = "viewport",
  rounded = "rounded-[16px]",
  overflow = true,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  aspect?: string;
  maxWidth?: CaseShellMaxWidth;
  gutters?: CaseShellGutters;
  rounded?: string;
  overflow?: boolean;
}) {
  return (
    <CasePageShell
      {...props}
      maxWidth={maxWidth}
      gutters={gutters}
      className={clsx(
        aspect,
        rounded,
        "shrink-0",
        overflow && "overflow-clip",
        className
      )}
    >
      {children}
    </CasePageShell>
  );
}

export function CaseImageGrid({
  children,
  className,
  layout = "responsive",
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  layout?: "responsive" | "desktopAbsolute";
}) {
  return (
    <div
      {...props}
      className={clsx(
        "min-w-0 [&>*]:min-w-0",
        layout === "responsive" &&
          "grid grid-cols-1 gap-[32px] sm:grid-cols-2 lg:grid-cols-3",
        layout === "desktopAbsolute" &&
          "grid grid-cols-1 gap-[32px] md:grid-cols-2 lg:block",
        className
      )}
    >
      {children}
    </div>
  );
}
