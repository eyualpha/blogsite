import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="flex items-center justify-between space-x-4">
        <Link href={"/"}>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Blog<span className="text-orange-500">Site</span>
          </h1>
        </Link>
      </div>
      <div className="hidden sm:flex space-x-4">
        <Link href={"/"} className="hover:text-orange-500 duration-200">
          Home
        </Link>
        <Link href={"/dashbord"} className="hover:text-orange-500 duration-200">
          Dashbord
        </Link>
      </div>

      <div className="space-x-4">
        <Button variant={"outline"}>Login</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  );
}
