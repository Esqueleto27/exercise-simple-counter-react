import React, { useState, useEffect } from "react";

function SecondsCounter() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [alertTime, setAlertTime] = useState("");

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => {
        const newTime = prev + 1;

        if (alertTime && newTime === Number(alertTime)) {
          alert("¡Se alcanzó el tiempo!");
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, alertTime]);

  const reset = () => {
    setSeconds(0);
  };

  const pause = () => {
    setIsRunning(false);
  };

  const resume = () => {
    setIsRunning(true);
  };

  const startCountdown = () => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            alert("Cuenta regresiva terminada");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  return (
    <div className="text-center">
      <h1 className="bg-dark text-white p-3">
        <i className="fa-solid fa-clock me-3"></i>
        {seconds}
      </h1>

      <div className="mt-3">
        <button onClick={pause} className="btn btn-warning m-1">
          Pausar
        </button>

        <button onClick={resume} className="btn btn-success m-1">
          Reanudar
        </button>

        <button onClick={reset} className="btn btn-danger m-1">
          Reiniciar
        </button>

        <button onClick={startCountdown} className="btn btn-primary m-1">
          Cuenta regresiva
        </button>
      </div>

      <div className="mt-3">
        <input
          type="number"
          placeholder="Tiempo alerta"
          value={alertTime}
          onChange={(e) => setAlertTime(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SecondsCounter;
