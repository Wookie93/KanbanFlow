'use client';

import { useEffect } from 'react';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import '@shoelace-style/shoelace/dist/themes/light.css';

export default function ShoelaceProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    setBasePath('/shoelace-assets');
  }, []); 

  return <>{children}</>;
}