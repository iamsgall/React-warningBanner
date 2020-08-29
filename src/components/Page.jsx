import React, {useState} from 'react';
import WarningBanner from './WarningBanner';

export default function Page() {
  let [showWarning, setShowWarning] = useState(true);
  const handleToggleWarning = () => {
    setShowWarning((showWarning = !showWarning));
  };
  return (
    <div>
      <WarningBanner warning={showWarning} />
      <button onClick={handleToggleWarning}>
        {showWarning ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}
