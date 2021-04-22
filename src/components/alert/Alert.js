import React from 'react';
import { useRecoilState } from 'recoil';
import { alertState } from '../../store';
import './Alert.css';

const Alert = () => {
  const [alert, setAlertState] = useRecoilState(alertState);

  return (
    alert.message ? (
      <div className={`alert alert--${alert.type}`}>
        <div className="alert-message">
          {alert.message}
          <button className="alert-close-btn" onClick={() => setAlertState({})}> &#10006;</button>
        </div>
      </div>
    ) : null
  );
};

export default Alert;