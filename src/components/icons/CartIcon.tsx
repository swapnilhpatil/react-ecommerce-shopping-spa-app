import React from 'react';

/**
 * Props for the CartIcon component.
 */
export interface CartIconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * The size of the icon (width and height).
   * @default 24
   */
  size?: number | string;
}

/**
 * CartIcon component.
 * @param {CartIconProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered SVG icon.
 */
export const CartIcon: React.FC<CartIconProps> = ({ size = 24, className, ...props }) => {
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
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
};
