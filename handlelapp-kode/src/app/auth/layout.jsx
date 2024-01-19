export default function AuthLayout({ children }) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div>{children}</div>
      </div>
    )
  }