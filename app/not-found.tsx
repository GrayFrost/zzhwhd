import Link from "next/link";
export default function NotFound() {
  return (
    <div className="container min-h-screen flex items-center justify-center text-lg">
      <div className="font-bold mr-2">404</div>
      <Link href="/">返回首页</Link>
    </div>
  );
}
