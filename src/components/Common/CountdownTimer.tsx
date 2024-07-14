import { useEffect, useState } from 'react';

export const CountdownTimer = ({ onClose, timeSeconds = 30 }) => {
  const [countdown, setCountdown] = useState(timeSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        clearInterval(interval);
        onClose();
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [countdown, onClose]);

  return <div className="text-secondary">{countdown} seconds</div>;
};
