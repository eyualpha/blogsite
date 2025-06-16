import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default async function DashboardPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Your Blog Article</h2>
        <div className={buttonVariants({ variant: "secondary" })}>
          <Link href={"/dashboard/create"}>Create Post</Link>
        </div>
      </div>
    </div>
  );
}
