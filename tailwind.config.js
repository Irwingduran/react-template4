/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '9/16': [9, 16], // Custom ratio for vertical videos
      },
    },
  },
  plugins: [
    daisyui, // Usando `import` para cargar DaisyUI
  ],
};
