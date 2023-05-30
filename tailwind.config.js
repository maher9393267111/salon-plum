// ! Only edit where there is blue text.
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      fontSize: {
        fontFamily: {
          sans: ["Noto Sans Arabic', 'sans-serif"],
          serif: [""],
          'inter': ['Inter', 'sans-serif'], 
         'urbanist': ['Urbanist', 'sans-serif'], 
        'arabic': ['Noto Sans Arabic', 'sans-serif'], 
         SansArabic: ["IBM Plex Sans Arabic", "sans-serif"],
        },
        fontSize: {
          16: ["16px"],
          h1: ["24px", { lineHeight: "48px" }],
          32: "32px",
          40: "40px",
          48: "48px",
          56: "56px",
          64: "64px",
          72: "72px",
          80: "80px",
        },
        colors: {
          primary: {
            50: "#F8FAFC",
            100: "#F1F5F9",
            200: "#E2E8F0",
            300: "#008396",
            400: "#006E7E",
            500: "",
            600: "",
            700: "",
            800: "",
            900: "",
          },
          secondary: {
            50: "",
            100: "",
            200: "",
            300: "",
            400: "",
            500: "",
            600: "",
            700: "",
            800: "",
            900: "",
          },
          neutral: {
            50: "#F8FAFC",
            100: "#F1F5F9",
            200: "#E2E8F0",
            300: "#CBD5E1",
            400: "#94A3BB",
            500: "#64748B",
            600: "#475569",
            700: "#334155",
            800: "#1E292B",
            900: "#1E1E1E",
          },
          danger: {
            50: "#FEF2F2",
            100: "#",
            200: "#",
            300: "#93C%FD",
            400: "#",
            500: "#EF4444",
            600: "#",
            700: "#7F1D1D",
            800: "#",
            900: "#7F1D1D",
          },
          white: "#ffffff",
          black: "#000000",
          'yellohero':'bg-(rgb(226, 198, 120))'
        },
        //
        // TODO  Set box shadow settings if the project has them. If not, delete line 31-33
        boxShadow: {
          shadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
        },
        // TODO Set the border radius for buttons
        borderRadius: {
          circle: "9999px",
          rund: "24px",
        },
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        spacing: {
          0: "0px",
          1: "1px",
          2: "2px",
          3: "3px",
          4: "4px",
          6: "6px",
          8: "8px",
          10: "10px",
          12: "12px",
          15: "15px",
          16: "16px",
          18: "18px",
          20: "20px",
          24: "24px",
          25: "25%",
          30: "30px",
          32: "32px",
          33: "33%",
          40: "40px",
          50: "50%",
          48: "48px",
          50: "50%",
          56: "56px",
          64: "64px",
          72: "72px",
          80: "80px",
          95: "95%",
          96: "96px",
          100: "100%",
          120: "120px",
          160: "160px",
          240: "240px",
          320: "320px",
          400: "400px",
          560: "560px",
          640: "640px",
          800: "800px",
          960: "960px",
          auto: "auto",
        },
        width: {
          0: "0px",
          1: "1px",
          2: "2px",
          3: "3px",
          4: "4px",
          6: "6px",
          8: "8px",
          10: "10px",
          12: "12px",
          15: "15px",
          16: "16px",
          18: "18px",
          20: "20px",
          24: "24px",
          25: "25%",
          30: "30px",
          32: "32px",
          33: "33%",
          40: "40px",
          50: "50%",
          48: "48px",
          50: "50%",
          56: "56px",
          64: "64px",
          72: "72px",
          80: "80px",
          95: "95%",
          96: "96px",
          100: "100%",
          120: "120px",
          160: "160px",
          240: "240px",
          320: "320px",
          400: "400px",
          560: "560px",
          640: "640px",
          800: "800px",
          960: "960px",
          auto: "auto",
        },
        minHeight: {
          100: "100%",
        },
        minWidth: {
          100: "100%",
        },
        height: {
          0: "0px",
          1: "1px",
          2: "2px",
          3: "3px",
          4: "4px",
          6: "6px",
          8: "8px",
          10: "10px",
          12: "12px",
          15: "15px",
          16: "16px",
          18: "18px",
          20: "20px",
          24: "24px",
          25: "25%",
          30: "30px",
          32: "32px",
          33: "33%",
          40: "40px",
          50: "50%",
          48: "48px",
          50: "50%",
          56: "56px",
          64: "64px",
          72: "72px",
          80: "80px",
          95: "95%",
          96: "96px",
          100: "100%",
          120: "120px",
          160: "160px",
          240: "240px",
          320: "320px",
          400: "400px",
          560: "560px",
          640: "640px",
          800: "800px",
          960: "960px",
          auto: "auto",
        },
        maxWidth: {
          60: "60%",
          80: "80%",
          90: "90%",
          95: "95%",
          100: "100%",
          340: "340px",
          740: "740px",
          900: "900px",
          1200: "1200px",
        },
        maxHeight: {
          50: "50%",
          1000: "1000px",
        },
        flex: {
          1: "1 1 0%",
          2: "2 2 0%",
          3: "3 3 0%",
          4: "4 4 0%",
          5: "5 5 0%",
        },
        screens: {
          mobile: "415px",
          md: "618px",
          lg: "1024px",
          xl: "1200px",
        },
        container: {
          center: true,
        },
        zIndex: {
          0: "0",
          1: "1",
          2: "2",
          3: "3",
          100: "100",
          200: "200",
          300: "300",
        },
        opacity: {
          50: ".5",
        },
        backgroundOpacity: {
          96: "0.96",
          97: "0.97",
          98: "0.98",
          99: "0.99",
        },
        variants: {
          extend: {},
        },
      },
      future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
      },
    },
  };














// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
//     // Or if using `src` directory:
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     theme: {
//       layers: {
//           toastr: {
//               // Define toastr layer variants here
//           },
//       },
//       screens: {
//           sm: "480px",
//           md: "768px",
//           lg: "976px",
//           "xlm":'1199px',
//           xl: "1200px",
//           "2xl": "1536px",
//       },

//       container: {
//           padding: {
//               DEFAULT: "1.7rem",
//               sm: "2.5rem",
//               md: "4rem",
//               lg: "6rem",
//               xl: "9rem",
//               "2xl": "12rem",
//           },
//           center: true,
//       },
//       colors: {
//           cyan: "#2DD3E3",
//           "light-cyan": "#EAF8F9",
//           yellow: "#FEE89E",
//           black: "#000",
//           "light-black": "#1A1A1A",
//           gray: "#424A4F",
//           "light-gray": "#718096",
//           "grayish-cyan": "#94AFB6",
//           phosphorescent: "#6BD24D",
//           background: "#E5E5E5",
//           white: "#FFF",
//           "light-white": "#FBFBFB",
//           transparent: "transparent",
//           red: "#EF4444",
//       },
//       fontFamily: {
//         'inter': ['Inter', 'sans-serif'], 
//         'urbanist': ['Urbanist', 'sans-serif'], 
//         'arabic': ['Noto Sans Arabic', 'sans-serif'], 
//         SansArabic: ["IBM Plex Sans Arabic", "sans-serif"],
     
//       },
//       fontSize: {
//           xs: [
//               "0.575rem", // 9px
//               {
//                   lineHeight: "12px",
//               },
//           ],
//           sm: [
//               "0.875rem", // 14px
//               {
//                   lineHeight: "21px",
//               },
//           ],
//           base: [
//               "1rem", // 16px
//               {
//                   lineHeight: "24px",
//               },
//           ],
//           lg: [
//               "1.125rem", // 18px
//               {
//                   lineHeight: "27px",
//               },
//           ],
//           xl: [
//               "1.25rem", // 20px
//               {
//                   lineHeight: "30px",
//               },
//           ],
//           "2xl": [
//               "1.5rem", // 24px
//               {
//                   lineHeight: "36px",
//               },
//           ],
//           "3xl": [
//               "1.875rem", // 30px
//               {
//                   lineHeight: "38px",
//               },
//           ],
//           "4xl": [
//               "2.25rem", // 36px
//               {
//                   lineHeight: "40px",
//               },
//           ],
//           "5xl": [
//               "3.1rem", // 50px
//               {
//                   lineHeight: "75px",
//               },
//           ],
//           "6xl": [
//               "3.75rem", // 60px
//               {
//                   lineHeight: "90px",
//               },
//           ],
//           "9xl": [
//               "8rem", // 128px
//               {
//                   lineHeight: "192px",
//               },
//           ],
//       },
//       fontWeight: {
//           light: "300",
//           normal: "400",
//           medium: "500",
//           semibold: "600",
//       },
//       extend: {
//           borderRadius: {
//               sm: "2px",
//               md: "5px",
//               lg: "10px",
//               "2xl": "16px",
//               "3xl": "25px",
//               "4xl": "35px",
//           },
//           animation: {
//               "spin-slow": "spin 3s linear infinite",
//           },
//       },
//   },
//     // extend: {},
//   },
//   plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
// }