import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Compose the plain-text-style email body
    const formattedMessage = `
From: ${name} <${email}>
Subject: ${subject}

${message}

---

This message was sent via your portfolio contact form.
`;

    // Send email via Resend
    const data = await resend.emails.send({
      from: `${name} <contact@blainepanares.xyz>`, // Use your verified domain, but sender's name
      to: ["blainepanaresofficial@gmail.com"],      // Your actual inbox
      subject: subject,                             // Subject from the user
      replyTo: `${email}`,                          // Enables direct reply to sender
      text: formattedMessage,                       // Simple readable message (text email)
      html: `
        <div style="font-family: sans-serif; font-size: 15px; line-height: 1.6;">
          <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p style="margin-top: 20px; white-space: pre-line;">${message}</p>
          <hr style="margin-top: 30px;" />
          <p style="font-size: 12px; color: gray;">This message was sent via your portfolio contact form.</p>
        </div>
      `,
    });

    if (data.error) {
      console.error("Resend error:", data.error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
