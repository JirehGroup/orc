// src/components/common/Flag.tsx

import React from 'react';

const Flag = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-[20px] sm:w-[32px] z-50 flex flex-col">
      <div className="h-1/3 w-full bg-red-600" />
      <div className="h-1/3 w-full bg-white" />
      <div className="h-1/3 w-full bg-black" />
    </div>
  );
};

export default Flag;



// // src/components/common/Flag.tsx

// import React from 'react';

// const Flag = () => {
//   return (
//     <div className="fixed left-0 top-0 h-screen w-[40px] z-50 flex flex-row">
//       <div className="w-1/3 h-full bg-red-600" />
//       <div className="w-1/3 h-full bg-white" />
//       <div className="w-1/3 h-full bg-black" />
//     </div>
//   );
// };

// export default Flag;
