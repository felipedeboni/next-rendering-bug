import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-3 gap-4 w-full pt-12">
        <div className="w-full aspect-square bg-blue-100" />
        <div className="w-full aspect-square bg-blue-100" />
        <div className="w-full aspect-square bg-blue-100" />
        <div className="w-full aspect-square bg-blue-100" />
        <div className="w-full aspect-square bg-blue-100" />
        <div className="w-full aspect-square bg-blue-100" />
        <div className="w-full aspect-square bg-blue-100" />
      </div>
      <Link href="/" className="text-blue-700 underline">
        Go back
      </Link>
    </div>
  );
}
