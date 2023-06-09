import nodemailer from "nodemailer";

export type EmailData = {
  email: string;
  subject: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  // 아래 secure 옵션을 사용하려면 465 포트를 사용해야함
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    // 초기에 설정해둔 env 데이터
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function sendEmail({ email, subject, message }: EmailData) {
  const mailData = {
    to: process.env.AUTH_USER,
    subject: `[BLOG] ${subject}`,
    from: email,
    //	html 옵션 또는 text 옵션 둘중 하나만 사용해야함
    html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    </br>
    <p>보낸사람 : ${email}</p>
    `,
    //	attachments 옵션으로 첨부파일도 전송 가능함
    //	attachments : [첨부파일]
  };
  try {
    const info = await transporter.sendMail(mailData);
    console.log("Message sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email-----------", error);
    throw error;
  }
}
