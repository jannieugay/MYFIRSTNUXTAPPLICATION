import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        palette: {
          obsidian: '#020403',
          graphite: '#141413',
          mineral: '#1A2324',
          'mineral-dark': '#0E1415',
          'mineral-light': '#273436',
          rust: '#5F2E1B',
          'rust-light': '#8B4226',
          'rust-hover': '#AC522F',
          'rust-dark': '#3D1C0F',
          sand: '#F2E8DF',
          'sand-muted': '#A7998E',
          'sand-dark': '#5E544D'
        }
      }
    }
  }
}
