import './globals.css'

export const metadata = {
  title: 'Handlelapp',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html className='bg-[#ffefe1]' lang="en">
      <body >{children}</body>
    </html>
  )
}
