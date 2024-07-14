import type { ReactElement, ReactNode, FunctionComponent } from 'react';

export type Page = FunctionComponent & {
  getLayout?: (page: ReactElement) => ReactNode;
};
