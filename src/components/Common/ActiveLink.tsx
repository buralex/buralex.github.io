'use client';
import { usePathname } from 'next/navigation';
import Link, { LinkProps } from 'next/link';
import React, { PropsWithChildren } from 'react';
import { cssClasses } from '@/utils';

type ActiveLinkProps = LinkProps & {
  className?: string;
  activeClassName: string;
};

const ActiveLink = ({
  children,
  activeClassName,
  className,
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const pathname = usePathname();

  return (
    <Link
      className={cssClasses(
        className,
        pathname === props.href && activeClassName,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
