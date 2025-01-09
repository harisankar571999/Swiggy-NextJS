import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Swiggy App',
    short_name: 'Swiggy',
    description: `Order Food Online from India's Best Food Delivery Service`,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/assets/192 icon.avif',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/192 icon.avif',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}