import prisma from "@/lib/prismaDB";

import { NextResponse } from "next/server";

import bcrypt from "bcrypt";

const PATCH = async (req) => {
  const { field, value, userId, oldPassword } = await req.json();

  //   console.log(field, value, userId);
  const updatedFields = {};

  if (field === "password") {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { password: true },
    });

    const isPasswordValid = await bcrypt.compare(
      oldPassword,
      user.password || ""
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Old password is incorrect. Try again!!" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(value, 10);

    updatedFields.password = hashedPassword;
  }

  if (field === "name") {
    updatedFields.name = value;
  }

  if (field === "email") {
    updatedFields.email = value;
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updatedFields,
    });

    return NextResponse.json(
      { message: `User ${field} updated successfully`, user: updatedUser },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
};

export { PATCH };
