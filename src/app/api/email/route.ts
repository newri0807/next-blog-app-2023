const nodemailer = require("nodemailer");

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    // 클라이언트로부터 받은 데이터
    const { email, subject, message } = req.body;

    try {
      // Nodemailer 설정
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: "your-email@example.com", // 이메일 계정
          pass: "your-password", // 이메일 계정 비밀번호
        },
      });

      // 이메일 전송
      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>',
        to: email,
        subject: subject,
        text: message,
      });

      console.log("Message sent: %s", info.messageId);

      // 클라이언트로 응답
      res.status(200).json({ message: "Email sent" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
