
import React from 'react';
import ChevronRightIcon from './icons/ChevronRightIcon';

interface BreadcrumbPath {
  name: string;
  isCurrent: boolean;
  action: () => void;
}

interface BreadcrumbsProps {
  paths: BreadcrumbPath[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ paths }) => {
  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2">
        {paths.map((path, index) => (
          <li key={path.name}>
            <div className="flex items-center">
              {index > 0 && (
                 <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              )}
              <button
                onClick={(e) => {
                    e.preventDefault();
                    if (!path.isCurrent) {
                        path.action();
                    }
                }}
                className={`ml-2 text-sm font-medium ${
                  path.isCurrent ? 'text-gray-500 cursor-default' : 'text-gray-600 hover:text-gray-800'
                }`}
                aria-current={path.isCurrent ? 'page' : undefined}
              >
                {path.name}
              </button>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
