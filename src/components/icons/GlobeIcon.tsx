import React from 'react';

/**
 * Props for the GlobeIcon component.
 */
export interface GlobeIconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * The size of the icon (width and height).
   * @default 24
   */
  size?: number | string;
}

/**
 * GlobeIcon component.
 * @param {GlobeIconProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered SVG icon.
 */
export const GlobeIcon: React.FC<GlobeIconProps> = ({ size = 24, className, ...props }) => {
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
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
};
