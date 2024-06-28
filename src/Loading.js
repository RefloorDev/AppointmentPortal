// Loading.js
import React from 'react';
import { BounceLoader, HashLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="loading-container">
      <HashLoader
      color="#000080"
      size={100}
      speedMultiplier={1}
      />
    </div>
  );
};

const DataLoading = () => {
  return (
    <div className="overlay-container">
      <BounceLoader
        color="#000080"
        size={100}
        speedMultiplier={1}
      />
    </div>

  );
};

// toast.error('Failed to GetQCBatches: ' + response.statusText + ':' + response.status, {
//   // Auto close Set to 5sec
//   position: 'top-right',
//   autoClose: 5000,
// })


export { Loading, DataLoading };
