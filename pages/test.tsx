import { useState } from "react";

export default function MyComponent() {
  const [output, setOutput] = useState("");

  const handleClick = async () => {
    console.log("Button clicked!");
    const response = await fetch("/api/chains/searchproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        domain: "https://checkhq.com/",
      }),
    });

    const data = await response.json();

    setOutput(data.output);
  };

  return (
    <div>
      <button onClick={handleClick}>Get output</button>
      <p>{output}</p>
    </div>
  );
}