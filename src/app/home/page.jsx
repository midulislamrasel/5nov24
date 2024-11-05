import prisma from "@/lib/prisma";
import Home from "@/components/Home";
import React from "react";
import Footer from "@/components/footer";

function page() {
  const handesubmit = async (formData) => {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");

    const data = await prisma.User.create({
      data: {
        name,
        email,
      },
    });
    console.log(data);
  };
  return (
    <div>
      <form action={handesubmit}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <button type="submit">Submit</button>
      </form>
      <Home />
      <Footer />
    </div>
  );
}

export default page;
