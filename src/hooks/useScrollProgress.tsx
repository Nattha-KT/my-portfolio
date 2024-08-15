import { useEffect, useState } from "react";

const useScrollProgress = (): number => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight > 0) {
        const progress = (currentProgress / scrollHeight) * 100;
        setCompletion(parseFloat(progress.toFixed(2)));
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);
    updateScrollCompletion(); // Initialize the progress on mount

    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
};

export default useScrollProgress;
