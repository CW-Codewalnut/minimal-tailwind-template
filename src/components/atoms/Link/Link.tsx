import { type AnchorHTMLAttributes, type ReactNode } from 'react';
import clsx from 'clsx';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isExternal?: boolean;
  children: ReactNode;
}

export function Link({
  className,
  children,
  isExternal = false,
  href,
  ...props
}: LinkProps) {
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={clsx(
        'text-blue-600 hover:text-blue-700 underline underline-offset-4 font-medium',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
