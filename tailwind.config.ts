// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: ["class"],
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "*.{js,ts,jsx,tsx,mdx}",
//   ],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//         // KnowEra Custom Colors
//         "knowera-blue": "hsl(var(--knowera-blue))",
//         "knowera-blue-light": "hsl(var(--knowera-blue-light))",
//         "knowera-orange": "hsl(var(--knowera-orange))",
//         "knowera-orange-light": "hsl(var(--knowera-orange-light))",
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//         "fade-in-up": {
//           "0%": { opacity: "0", transform: "translateY(20px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//         "slide-up": {
//           "0%": { transform: "translateY(100%)" },
//           "100%": { transform: "translateY(0)" },
//         },
//         expand: {
//           "0%": { width: "0%" },
//           "100%": { width: "100%" },
//         },
//         shimmer: {
//           "0%": { backgroundPosition: "-200% 0" },
//           "100%": { backgroundPosition: "200% 0" },
//         },
//         float: {
//           "0%, 100%": { transform: "translateY(0) translateX(0)" },
//           "25%": { transform: "translateY(-5px) translateX(5px)" },
//           "50%": { transform: "translateY(0) translateX(0)" },
//           "75%": { transform: "translateY(5px) translateX(-5px)" },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//         "fade-in-up": "fade-in-up 0.6s ease-out forwards",
//         "slide-up": "slide-up 0.6s ease-out forwards",
//         expand: "expand 0.6s ease-out forwards",
//         shimmer: "shimmer 2s infinite linear",
//         float: "float 4s ease-in-out infinite",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // KnowEra Custom Colors
        "knowera-blue": "hsl(var(--knowera-blue))",
        "knowera-blue-light": "hsl(var(--knowera-blue-light))",
        "knowera-orange": "hsl(var(--knowera-orange))",
        "knowera-orange-light": "hsl(var(--knowera-orange-light))",
        "knowera-blue-bg": "hsl(var(--knowera-blue))",
        "knowera-orange-bg": "hsl(var(--knowera-orange))",
        "knowera-blue-light-bg": "hsl(var(--knowera-blue-light))",
        "knowera-orange-light-bg": "hsl(var(--knowera-orange-light))",
      },
      backgroundImage: {
        "gradient-to-r-knowera":
          "linear-gradient(to right, hsl(var(--knowera-blue)), hsl(var(--knowera-orange)))",
        "gradient-to-r-knowera-reverse":
          "linear-gradient(to right, hsl(var(--knowera-orange)), hsl(var(--knowera-blue)))",
        "gradient-knowera-blue":
          "linear-gradient(to right, hsl(var(--knowera-blue)), hsl(var(--knowera-blue-light)))",
        "gradient-knowera-orange":
          "linear-gradient(to right, hsl(var(--knowera-orange)), hsl(var(--knowera-orange-light)))",
        "gradient-knowera-diagonal":
          "linear-gradient(135deg, hsl(var(--knowera-blue)), hsl(var(--knowera-orange)))",
        "gradient-knowera-radial":
          "radial-gradient(circle, hsl(var(--knowera-blue)), hsl(var(--knowera-orange)))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        expand: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "25%": { transform: "translateY(-5px) translateX(5px)" },
          "50%": { transform: "translateY(0) translateX(0)" },
          "75%": { transform: "translateY(5px) translateX(-5px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsla(var(--knowera-blue), 0.3)" },
          "50%": { boxShadow: "0 0 40px hsla(var(--knowera-blue), 0.6)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        expand: "expand 0.6s ease-out forwards",
        shimmer: "shimmer 2s infinite linear",
        float: "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
