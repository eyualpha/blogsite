import { Button, buttonVariants } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const session = await getUser();

  return (
    <nav className="flex items-center justify-between py-4">
      <div className="flex items-center justify-between space-x-4">
        <Link href={"/"}>
          <h1 className="text-2xl md:text-3xl font-bold ">
            Blog<span className="text-orange-500">Site</span>
          </h1>
        </Link>
      </div>
      <div className="hidden sm:flex space-x-4">
        <Link href={"/"} className="hover:text-orange-500 duration-200">
          Home
        </Link>
        <Link
          href={"/dashboard"}
          className="hover:text-orange-500 duration-200"
        >
          Dashbord
        </Link>
      </div>

      {session ? (
        <div className="flex items-center gap-4">
          {session.given_name}
          <LogoutLink className={buttonVariants()}>Logout</LogoutLink>
        </div>
      ) : (
        <div className="space-x-4">
          <LoginLink className={buttonVariants({ variant: "secondary" })}>
            Login
          </LoginLink>
          <RegisterLink className={buttonVariants()}>Sign Up</RegisterLink>
        </div>
      )}
    </nav>
  );
}
