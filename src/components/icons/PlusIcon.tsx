import React from 'react';

/**
 * Props for the PlusIcon component.
 */
export interface PlusIconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * The size of the icon (width and height).
   * @default 24
   */
  size?: number | string;
}

/**
 * PlusIcon component.
 * @param {PlusIconProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered SVG icon.
 */
export const PlusIcon: React.FC<PlusIconProps> = ({ size = 24, className, ...props }) => {
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
      <path d="M12 5v14M5 12h14"/>
    </svg>
  );
};
