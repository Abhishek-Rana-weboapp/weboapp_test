/** @type {import('tailwindcss').Config} */
export default {
  content:
    [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
  theme:
    {
      extend:
        {
          backgroundColor:
            {
              primarybg:
                '#ffffff',
              secondarybg:
                '#19427D',
              tertiarybg:
                '#041228',
            },
          colors:
            {
              primary:
                {
                  50: '#f2f5fc',
                  100: '#e1e9f8',
                  200: '#cad8f3',
                  300: '#a6bfea',
                  400: '#7c9ede',
                  500: '#5d7ed4',
                  600: '#4964c7',
                  700: '#3f52b6',
                  800: '#384595',
                  900: '#313c77',
                  950: '#282e56',
                },
            },
        },
      screens:
        {
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
          '2xl':
            '1400px',
        },
      fontFamily:
        {
          inter:
            [
              'inter',
            ],
          ubuntu:
            [
              'ubuntu',
            ],
          brico:
            [
              'Bricolage Grotesque',
            ],
        },
    },
  plugins:
    [],
};
