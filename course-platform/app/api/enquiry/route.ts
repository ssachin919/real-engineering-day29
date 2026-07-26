import { NextResponse } from "next/server";

type EnquiryRequest = {
  name?: string;
  email?: string;
  course?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EnquiryRequest;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const course = body.course?.trim();

    if (!name || !email || !course) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and course are required.",
        },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const enquiry = {
      id: crypto.randomUUID(),
      name,
      email,
      course,
      createdAt: new Date().toISOString(),
    };

    console.log("New course enquiry:", enquiry);

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been submitted successfully.",
        enquiryId: enquiry.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to process enquiry:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit the enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}