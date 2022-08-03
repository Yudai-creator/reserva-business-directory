/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headline-image': "url('https://ik.imagekit.io/u33i3sss0/Reserva_Business_Directory/home_image/james-baltz-YbBWmI4hZys-unsplash_yZSgue4BP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659531102844')",
        'headline-image-2': "url('https://ik.imagekit.io/u33i3sss0/Reserva_Business_Directory/home_image/james-baltz-zuhouVw4ZkQ-unsplash_wH8HPPq5v.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659531129965')",
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
  },
  plugins: [],
}