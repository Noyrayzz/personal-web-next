// Next Dymamic Method
// import dynamic from 'next/dynamic'
// import { LucideProps } from 'lucide-react';
// import dynamicIconImports from 'lucide-react/dynamicIconImports';

// interface IconProps extends LucideProps {
//   name: keyof typeof dynamicIconImports;
// }

// const Icon = ({ name, ...props }: IconProps) => {
//   const LucideIcon = dynamic(dynamicIconImports[name])

//   return <LucideIcon {...props} />;
// };

// export default Icon;

// React Lazy Load Method
// import React, { lazy, Suspense } from 'react';
// import { LucideProps } from 'lucide-react';
// import dynamicIconImports from 'lucide-react/dynamicIconImports';

// const fallback = <div style={{ background: '#ddd', width: 24, height: 24 }}/>

// interface IconProps extends Omit<LucideProps, 'ref'> {
//   name: keyof typeof dynamicIconImports;
// }

// const Icon = ({ name, ...props }: IconProps) => {
//   const LucideIcon = lazy(dynamicIconImports[name]);

//   return (
//     <Suspense fallback={fallback}>
//       <LucideIcon {...props} />
//     </Suspense>
//   );
// }

// export default Icon