import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const formspreeId = process.env.FORMSPREE_FORM_ID;

    if (!formspreeId) {
      return NextResponse.json(
        { error: "Formspree is not configured yet." },
        { status: 500 },
      );
    }

    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Formspree submission failed." },
        { status: 400 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Inquire route error:", error);
    return NextResponse.json(
      { error: "Submission failed." },
      { status: 500 },
    );
  }
}
