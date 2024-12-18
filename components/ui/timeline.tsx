import React from "react";

export const Timeline = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
      {children}
    </div>
  );
};

export const TimelineItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="mb-10 ml-6">{children}</div>;
};

export const TimelineIcon = () => {
  return (
    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
      <svg
        aria-hidden="true"
        className="w-3 h-3 text-blue-800 dark:text-blue-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clipRule="evenodd"
        ></path>
      </svg>
    </span>
  );
};

export const TimelineContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="mt-3 sm:pr-8">{children}</div>;
};
