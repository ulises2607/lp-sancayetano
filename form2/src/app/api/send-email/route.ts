import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  const data = {
    message: "This is a GET request",
  };
  return NextResponse.json({ data });
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("fullname");
    const email = formData.get("Email");
    const message = `
      Nombre y Apellido: ${name}
      Email: ${email}
      Fecha de Nacimiento: ${formData.get("bornDate")}
      D.N.I.: ${formData.get("D.N.I.")}
      Domicilio: ${formData.get("Domicilio")}
      Telefono: ${formData.get("Telefono")}
      Profesion: ${formData.get("Profesion")}
      Estudiante: ${formData.get("Estudiante")}
      Tipo de Asistente: ${formData.get("Tipo de Asistente")}
    `;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `III Congreso - Inscripcion de ${email}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent" });
  } catch (error) {
    console.error("Error sending email", error as Error);
    return NextResponse.json(
      { message: "Email not sent", error: error },
      { status: 500 }
    );
  }
}
