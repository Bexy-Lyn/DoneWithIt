import { useState } from "react";

export default useApi = (apiFunction) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const res = await apiFunction(...args);
    setLoading(false);

    if (!res.ok) return setError(true);
    else {
      setError(false);
      setData(res.data);
    }
  };

  return {
    request,
    data,
    error,
    loading,
  };
};
