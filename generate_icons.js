import fs from 'fs';
import path from 'path';

const dir = 'src/components/icons';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const generateIcon = (name, innerSVG, viewBox = "0 0 24 24", defaultFill = "none", defaultStroke = "currentColor") => {
  const code = `import React from 'react';

/**
 * Props for the ${name} component.
 */
export interface ${name}Props extends React.SVGProps<SVGSVGElement> {
  /**
   * The size of the icon (width and height).
   * @default 24
   */
  size?: number | string;
}

/**
 * ${name} component.
 * @param {${name}Props} props - The props for the component.
 * @returns {React.JSX.Element} The rendered SVG icon.
 */
export const ${name}: React.FC<${name}Props> = ({ size = 24, className, ...props }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="${viewBox}" 
      fill="${defaultFill}" 
      stroke="${defaultStroke}" 
      strokeWidth={props.strokeWidth || 2} 
      className={className} 
      {...props}
    >
      ${innerSVG}
    </svg>
  );
};
`;
  fs.writeFileSync(path.join(dir, `${name}.tsx`), code);
};

// Define icons
generateIcon('HeartIcon', '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />');
generateIcon('SearchIcon', '<circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />');
generateIcon('CartIcon', '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />');
generateIcon('UserIcon', '<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />', "0 0 24 24", "currentColor", "none");
generateIcon('MenuIcon', '<path d="M3 12h18M3 6h18M3 18h18" />');
generateIcon('CloseIcon', '<path d="M18 6L6 18M6 6l12 12" />');
generateIcon('ShareIcon', '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>');
generateIcon('PlusIcon', '<path d="M12 5v14M5 12h14"/>', "0 0 24 24", "none", "currentColor");
generateIcon('MinusIcon', '<path d="M5 12h14"/>', "0 0 24 24", "none", "currentColor");
generateIcon('StarIcon', '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>', "0 0 24 24", "currentColor", "none");
generateIcon('TagIcon', '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>');
generateIcon('ShieldCheckIcon', '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>');
generateIcon('BadgeCheckIcon', '<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>');
generateIcon('CheckIcon', '<path d="M20 6 9 17l-5-5"/>');
generateIcon('GlobeIcon', '<circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />');
generateIcon('TrashIcon', '<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>');
generateIcon('LockIcon', '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>');

// Create index.ts
fs.writeFileSync(path.join(dir, 'index.ts'), `
export * from './HeartIcon';
export * from './SearchIcon';
export * from './CartIcon';
export * from './UserIcon';
export * from './MenuIcon';
export * from './CloseIcon';
export * from './ShareIcon';
export * from './PlusIcon';
export * from './MinusIcon';
export * from './StarIcon';
export * from './TagIcon';
export * from './ShieldCheckIcon';
export * from './BadgeCheckIcon';
export * from './CheckIcon';
export * from './GlobeIcon';
export * from './TrashIcon';
export * from './LockIcon';
`);

console.log("Icons generated");
