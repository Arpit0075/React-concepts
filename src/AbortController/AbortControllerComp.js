import React, { useState, useEffect } from "react";

function AbortControllerComp() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // Fetch data when the component mounts
    fetchData(signal);

    // Cleanup function to abort the fetch request if the component unmounts
    return () => {
      controller.abort();
    };
  }, []); // Empty dependency array to run effect only once when component mounts

  const fetchData = async (signal) => {
    try {
      const response = await fetch("https://api.example.com/data", { signal });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Request aborted");
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <p>Data: {JSON.stringify(data)}</p>
        </div>
      )}
    </div>
  );
}

export default AbortControllerComp;
