"use client";

import { useState } from "react";

export default function Page() {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    try {
      console.log("ENV:", process.env.NEXT_PUBLIC_API_BASE_URL);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/convert/length?value=10&from=inch&to=cm`
      );

      const result = await res.json();
      console.log("API RESULT:", result);

      setData(result);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Convert</button>

      <h3>ENV: {process.env.NEXT_PUBLIC_API_BASE_URL}</h3>

      <pre>{JSON.stringify(data, null, 2)}</pre>

      {data && <h2>Result: {data.result}</h2>}
    </div>
  );
}