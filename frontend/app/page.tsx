"use client";

import { useState } from "react";

export default function Page() {
  const [data, setData] = useState<any>(null);
  const [conversiontype, setConversionType] = useState("length");
  const [value, setValue] = useState<number | "">("");
  const [fromUnit, setFromUnit] = useState<string>("");
  const [toUnit, setToUnit] = useState<string>("");

  const units: Record<string, string[]> = {
    length: ["mm","cm","meter","km","inch","foot","yard","mile"],
    weight: ["mg","gram","kg","ounce","pound"],
    temperature: ["c","f","k"]
  };


  const fetchData = async () => {
    try {
      console.log("ENV:", process.env.NEXT_PUBLIC_API_BASE_URL);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/convert/${conversiontype}?value=${value}&from=${fromUnit}&to=${toUnit}`
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
        <h1>Unit Converter</h1>
        <div>
            <button onClick={()=>setConversionType("length")}>Length</button>
            <button onClick={()=>setConversionType("weight")}>weight</button>
            <button onClick={()=>setConversionType("temperature")}>Temperature</button>
        </div>
        <label>
            value:
            <input type="number" value={value} onChange={e => setValue(Number(e.target.value))} />
        </label>
        <label>
          From: 
          <select value={fromUnit} onChange={e => setFromUnit(e.target.value)}>
            <option value="">Select</option>
            {units[conversiontype].map(u => <option key={u} value={u}>{u}</option>)}
          </select>
        </label>
        <label>
          To: 
          <select value={toUnit} onChange={e => setToUnit(e.target.value)}>
            <option value="">Select</option>
            {units[conversiontype].map(u => <option key={u} value={u}>{u}</option>)}
          </select>
        </label>

      <button onClick={fetchData}>Convert</button>

      {data && <h2>Result: {data.result}</h2>}
    </div>
  );
}