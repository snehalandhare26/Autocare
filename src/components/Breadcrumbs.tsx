import { ChevronRight, Home } from 'lucide-react';
import { Breadcrumb } from '../types/seo';

interface BreadcrumbsProps {
  items: Breadcrumb[];
  className?: string;
}

export const Breadcrumbs = ({ items, className = '' }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <a
            href="/"
            className="flex items-center text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
          </a>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.url} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-slate-400 mx-2" />
              {isLast ? (
                <span className="text-slate-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <a
                  href={item.url}
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {item.name}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
