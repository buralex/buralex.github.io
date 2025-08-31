'use client';
import { usePathname } from 'next/navigation';
import Link, { LinkProps } from 'next/link';
import React, { PropsWithChildren } from 'react';
import { cssClass } from '@/utils';

interface ActiveLinkProps extends LinkProps {
  className?: string;
  activeClassName: string;
}

export const ActiveLink = ({
  children,
  activeClassName,
  className,
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const pathname = usePathname();

  return (
    <Link
      className={cssClass(
        className,
        pathname === props.href && activeClassName,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
