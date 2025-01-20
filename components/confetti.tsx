"use client";

import React, { useEffect } from "react";
import confetti from "canvas-confetti";

const Confetti = () => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.5 },
    });
  }, []);

  return <></>;
};

export default Confetti;
