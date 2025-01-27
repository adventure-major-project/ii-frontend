/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			blacklooking: '#131313',
  			cream: '#F3F3F3',
      },
  		backgroundImage: {
  			'hero-bg': "url('/bg.jpg')",
        'introduction-video':"url('/introduction-video.mp4') "
  		},
    

    }
  }
}
