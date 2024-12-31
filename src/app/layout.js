import './globals.css'

export const metadata = {
  title: '个人网站',
  description: '我的个人网站和项目展示',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>
        {children}
      </body>
    </html>
  )
}