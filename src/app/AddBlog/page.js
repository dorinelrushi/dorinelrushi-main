import React from "react";
import FormInput from "../components/FormInput";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

async function AddBlog() {
  const user = await currentUser();
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "My Blog",
      path: "/Blog",
      show: user,
    },
    {
      label: "Profile",
      path: "/Profile",
      show: user,
    },
    {
      label: "Login",
      path: "/sign-in",
      show: !user,
    },
    {
      label: "Register",
      path: "/sign-up",
      show: !user,
    },
  ];
    return (
      <div className="py-[100px]">
       <div>
       <div className="bg-[#ffffff] py-[15px]">
      <div className="flex w-[80%] justify-between m-auto">
        <div>Logo</div>
        <div className="flex gap-[12px]">
          {menuItems.map((item) =>
            item.show ? (
              <Link key={item.label} href={item.path}>
                {item.label}
              </Link>
            ) : null
          )}
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
       </div>
        <FormInput />
      </div>
    );
  }
  
  export default AddBlog;
  