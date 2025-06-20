import { useEffect, useState } from "react"

export const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Welcome";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);
  
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-offwhite">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-black">
          {displayText}
        </h1>
      </div>
    </div>
  )
};