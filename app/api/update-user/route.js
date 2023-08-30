import prisma from "@/lib/prismaDB";

import { NextResponse } from "next/server";

const PATCH = async (req) => {
  const { field, value, userId } = await req.json();

  //   console.log(field, value, userId);
  const updatedFields = {};

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
