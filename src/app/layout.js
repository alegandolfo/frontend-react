import './globals.css'

export const metadata = {
  title: 'App React',
  description: 'React Project with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
