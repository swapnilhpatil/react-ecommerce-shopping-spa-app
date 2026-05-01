import React from 'react';

/**
 * Props for the SearchIcon component.
 */
export interface SearchIconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * The size of the icon (width and height).
   * @default 24
   */
  size?: number | string;
}

/**
 * SearchIcon component.
 * @param {SearchIconProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered SVG icon.
 */
export const SearchIcon: React.FC<SearchIconProps> = ({ size = 24, className, ...props }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={props.strokeWidth || 2} 
      className={className} 
      {...props}
    >
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  );
};
