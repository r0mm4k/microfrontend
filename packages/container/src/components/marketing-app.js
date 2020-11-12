import React, { useEffect, useRef } from "react";
import { mount } from "marketing/marketing-app";

export const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
