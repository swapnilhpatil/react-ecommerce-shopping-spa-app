import React from 'react';

/**
 * Props for the UserIcon component.
 */
export interface UserIconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * The size of the icon (width and height).
   * @default 24
   */
  size?: number | string;
}

/**
 * UserIcon component.
 * @param {UserIconProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered SVG icon.
 */
export const UserIcon: React.FC<UserIconProps> = ({ size = 24, className, ...props }) => {
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
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
};
