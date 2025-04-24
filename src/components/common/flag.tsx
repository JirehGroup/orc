// src/components/common/Flag.tsx

import React from 'react';

const Flag = () => {
  return (
    <div className="fixed right-0 top-0 h-full w-screen sm:w-[40px] z-50 flex flex-row">
      <div className="w-1/3 h-full bg-red-600" />
      <div className="w-1/3 h-full bg-white" />
      <div className="w-1/3 h-full bg-black" />
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
