import React from 'react';

/**
 * Props for the StarIcon component.
 */
export interface StarIconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * The size of the icon (width and height).
   * @default 24
   */
  size?: number | string;
}

/**
 * StarIcon component.
 * @param {StarIconProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered SVG icon.
 */
export const StarIcon: React.FC<StarIconProps> = ({ size = 24, className, ...props }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      stroke="none" 
      strokeWidth={props.strokeWidth || 2} 
      className={className} 
      {...props}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
};
