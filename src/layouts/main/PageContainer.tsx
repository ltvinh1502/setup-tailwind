import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  title?: string;
}

export function PageContainer({ children, title }: PageContainerProps) {
  return (
    <div className="p-6">
      {title && (
        <h1 className="mb-6 text-2xl font-semibold text-foreground">
          {title}
        </h1>
      )}
      <div className="rounded-lg bg-card p-6 shadow-sm text-card-foreground border border-border">
        {children}
      </div>
    </div>
  );
}
