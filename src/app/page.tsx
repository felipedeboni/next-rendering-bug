import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 text-center pt-12">
      <Link href="/has-issues" className="text-blue-700 underline">
        Has Issues
      </Link>
      <Link href="/works-fine" className="text-blue-700 underline">
        Works fine
      </Link>
    </div>
  );
}
