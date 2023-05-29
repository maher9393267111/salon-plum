/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      layers: {
          toastr: {
              // Define toastr layer variants here
          },
      },
      screens: {
          sm: "480px",
          md: "768px",
          lg: "976px",
          "xlm":'1199px',
          xl: "1200px",
          "2xl": "1536px",
      },

      container: {
          padding: {
              DEFAULT: "1.7rem",
              sm: "2.5rem",
              md: "4rem",
              lg: "6rem",
              xl: "9rem",
              "2xl": "12rem",
          },
          center: true,
      },
      colors: {
          cyan: "#2DD3E3",
          "light-cyan": "#EAF8F9",
          yellow: "#FEE89E",
          black: "#000",
          "light-black": "#1A1A1A",
          gray: "#424A4F",
          "light-gray": "#718096",
          "grayish-cyan": "#94AFB6",
          phosphorescent: "#6BD24D",
          background: "#E5E5E5",
          white: "#FFF",
          "light-white": "#FBFBFB",
          transparent: "transparent",
          red: "#EF4444",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], 
        'urbanist': ['Urbanist', 'sans-serif'], 
        'arabic': ['Noto Sans Arabic', 'sans-serif'], 
        SansArabic: ["IBM Plex Sans Arabic", "sans-serif"],
     
      },
      fontSize: {
          xs: [
              "0.575rem", // 9px
              {
                  lineHeight: "12px",
              },
          ],
          sm: [
              "0.875rem", // 14px
              {
                  lineHeight: "21px",
              },
          ],
          base: [
              "1rem", // 16px
              {
                  lineHeight: "24px",
              },
          ],
          lg: [
              "1.125rem", // 18px
              {
                  lineHeight: "27px",
              },
          ],
          xl: [
              "1.25rem", // 20px
              {
                  lineHeight: "30px",
              },
          ],
          "2xl": [
              "1.5rem", // 24px
              {
                  lineHeight: "36px",
              },
          ],
          "3xl": [
              "1.875rem", // 30px
              {
                  lineHeight: "38px",
              },
          ],
          "4xl": [
              "2.25rem", // 36px
              {
                  lineHeight: "40px",
              },
          ],
          "5xl": [
              "3.1rem", // 50px
              {
                  lineHeight: "75px",
              },
          ],
          "6xl": [
              "3.75rem", // 60px
              {
                  lineHeight: "90px",
              },
          ],
          "9xl": [
              "8rem", // 128px
              {
                  lineHeight: "192px",
              },
          ],
      },
      fontWeight: {
          light: "300",
          normal: "400",
          medium: "500",
          semibold: "600",
      },
      extend: {
          borderRadius: {
              sm: "2px",
              md: "5px",
              lg: "10px",
              "2xl": "16px",
              "3xl": "25px",
              "4xl": "35px",
          },
          animation: {
              "spin-slow": "spin 3s linear infinite",
          },
      },
  },
    // extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
}