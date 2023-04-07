import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { FaExclamationCircle } from "react-icons/fa";

function Alert() {
  const { alert } = useContext(AppContext);
  return (
    alert !== null && (
      <div className="flex self-center max-w-2xl mb-6 gap-2">
        {alert.type === "error" && (
          <FaExclamationCircle className="flex-none text-3xl text-error" />
        )}
        {alert.type === "warning" && (
          <FaExclamationCircle className="flex-none text-3xl text-warning" />
        )}
        {alert.type === "success" && (
          <FaExclamationCircle className="flex-none text-3xl text-success" />
        )}
        <p className="flex-1 text-lg">
          <strong>{alert.message}</strong>
        </p>
      </div>
    )
  );
}

export default Alert;
