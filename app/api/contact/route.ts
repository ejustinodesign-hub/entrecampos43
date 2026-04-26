import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { nome, email, telefone, fracao, mensagem } = await req.json();

  const { error } = await resend.emails.send({
    from: "Entrecampos 43 <onboarding@resend.dev>",
    to: "flsilva@remax.pt",
    replyTo: email,
    subject: `Interesse Entrecampos 43${fracao ? ` — Fração ${fracao}` : ""}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f7f3ee;">
        <div style="background: #1b3025; padding: 24px; margin-bottom: 24px;">
          <h1 style="color: #dbba8a; font-size: 20px; margin: 0; font-weight: 400; letter-spacing: 2px;">ENTRECAMPOS 43</h1>
          <p style="color: #ffffff80; font-size: 12px; margin: 4px 0 0;">Novo contacto pelo site</p>
        </div>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #1b302520; color: #1b302580; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 120px;">Nome</td><td style="padding: 10px 0; border-bottom: 1px solid #1b302520; color: #1b3025; font-size: 15px;">${nome}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #1b302520; color: #1b302580; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #1b302520; color: #1b3025; font-size: 15px;">${email}</td></tr>
          ${telefone ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #1b302520; color: #1b302580; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Telefone</td><td style="padding: 10px 0; border-bottom: 1px solid #1b302520; color: #1b3025; font-size: 15px;">${telefone}</td></tr>` : ""}
          ${fracao ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #1b302520; color: #1b302580; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Fração</td><td style="padding: 10px 0; border-bottom: 1px solid #1b302520; color: #1b3025; font-size: 15px;">${fracao}</td></tr>` : ""}
          ${mensagem ? `<tr><td style="padding: 10px 0; color: #1b302580; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Mensagem</td><td style="padding: 10px 0; color: #1b3025; font-size: 15px; line-height: 1.6;">${mensagem.replace(/\n/g, "<br>")}</td></tr>` : ""}
        </table>
        <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #1b302520; color: #1b302550; font-size: 11px;">
          Enviado a partir de entrecampos43.pt
        </div>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
