import { useEffect } from "react";
import AOS from "aos";

export const AnimationAOS = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
      offset: 200,
    });
  }, []);
};
