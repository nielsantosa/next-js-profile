import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="flex min-w-full flex-row justify-end bg-indigo-500 p-4">
      <div className="p-1"><Link href="/">Home</Link></div>
      <div className="p-1"><Link href="/about">Bio</Link></div>
      <div className="p-1"><Link href="/portfolios">Portfolios</Link></div>
    </div>
  )
}