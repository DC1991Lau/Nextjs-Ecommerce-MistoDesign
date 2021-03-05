module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
      'heroxl':'490px',
      'min_block':'260px',
      'full':'100%'
     },
    fontSize: {
      'bt': '.813rem',
      'sm': ['0.688rem', '1.125rem'],
      'body': ['0.875rem', '1.135rem'],
      'subtitle': ['0.75rem', '1.125rem'],
      'h5': ['0.875rem', '1.135rem'],
      'h4': ['1rem', '1.15rem'],
      'h3': ['1.375rem', '1.875rem'],
      'h2': ['1.625rem', '2.25rem'],
      'h1': ['2.25rem', '2.625rem'],
     },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      dark: {
        DEFAULT: '#121212',
      },
      grey: {
        DEFAULT: '#E5E5E5',
      },
      gr_white: {
        DEFAULT: '#F8F8F8',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      sale: {
        DEFAULT: '#E91E63',
      },
      yell: {
        DEFAULT: '#F0CC84',
      },
      error: {
        DEFAULT: '#D61313',
      },
      ok: {
        DEFAULT: '#0BB17F',
      },

    },
    extend: {
      fontFamily: {
        sans: ['Spartan', 'ui-sans-serif']
      },
      backgroundImage: () => ({
        'hero-1': "url('/img/img-hero-1.png')",
        'hero-2': "url('/img/img-hero-2.png')",
        'hero-3': "url('/img/img-hero-3.png')",
        'hero-4': "url('/img/img-hero-4.png')",
        'new-season': "url('/img/new-season.png')",
        'sale': "url('/img/sale.png')",
        'subscribe-bcgd': "url('/img/img-bg-subscribe.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
