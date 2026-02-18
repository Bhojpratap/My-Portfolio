import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Message from Portfolio: ${name}`,
//       html: `
//         <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6fb; padding:20px; font-family:Arial, sans-serif;">
//   <tr>
//     <td align="center">
//       <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:10px; border:1px solid #eee;">
        
//         <!-- Header -->
//         <tr>
//           <td style="padding:20px; text-align:center; background-color:#667eea; color:#ffffff; border-radius:10px 10px 0 0;">
//             <h2 style="margin:0; font-weight:normal;">New Portfolio Message</h2>
//           </td>
//         </tr>

//         <!-- Content -->
//         <tr>
//           <td style="padding:20px;">
//             <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9f9f9; border-radius:6px; margin-bottom:15px;">
//               <tr>
//                 <td style="padding:12px; font-size:14px; color:#333;">
//                   <strong>Name:</strong> ${name}<br />
//                   <strong>Email:</strong> ${email}
//                 </td>
//               </tr>
//             </table>

//             <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eee; border-radius:6px;">
//               <tr>
//                 <td style="padding:12px; font-size:14px; color:#555; line-height:1.6;">
//                   <strong>Message:</strong><br /><br />
//                   ${message}
//                 </td>
//               </tr>
//             </table>
//           </td>
//         </tr>

//         <!-- Footer -->
//         <tr>
//           <td style="padding:15px; text-align:center; font-size:12px; color:#888;">
//             Sent from your portfolio website
//           </td>
//         </tr>

//       </table>
//     </td>
//   </tr>
// </table>

//       `,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
</head>

<body style="margin:0;padding:0;background-color:#f0f1f5;">

<table width="100%" cellpadding="0" cellspacing="0" bgcolor="#f0f1f5">
  <tr>
    <td align="center" style="padding:20px;">

      <!-- ONE ROUNDED CARD -->
      <table width="600" cellpadding="0" cellspacing="0"
        style="background:#ffffff;
               border-radius:20px;
               overflow:hidden;
               font-family:Arial,Helvetica,sans-serif;">

        <!-- ORIGINAL HEADER (UNCHANGED STRUCTURE) -->
        <tr>
          <td>
            <table width="100%" cellpadding="0" cellspacing="0"
              style="background:linear-gradient(135deg,#5de0e6,#004aad);">
              <tr>

                <!-- LEFT SPACE -->
                <td width="15%">&nbsp;</td>

                <!-- TITLE -->
                <td width="70%" align="center" style="padding:20px;">
                  <span style="color:#ffffff;font-size:29px;font-weight:bold;">
                    New Inquiry Message 😃
                  </span>
                </td>

                <!-- RIGHT IMAGE -->
                <td width="15%" align="center" style="padding:10px;">
                  <img src="https://res.cloudinary.com/dmwygoeny/image/upload/v1770150209/3cc2aed233eacacb37ee957c8a608664_dip7kq.png"
                       width="110"
                       style="display:block;max-width:110px;height:auto;"
                       alt="Header Image">
                </td>

              </tr>
            </table>
          </td>
        </tr>

        <!-- MAIN IMAGE -->
        <tr>
          <td style="padding:20px;">
            <img
  src="https://res.cloudinary.com/dmwygoeny/image/upload/v1770150209/20ab6579b1ee4585874b629766596985_ft9dbp.png"
  width="560"
  style="display:block;width:100%;max-width:560px;height:auto;"
  alt="Main Image">
          </td>
        </tr>

        <!-- NAME -->
        <tr>
          <td align="center" style="padding:10px 20px;">
            <strong>Name –</strong> ${name}
          </td>
        </tr>

        <!-- EMAIL -->
        <tr>
          <td align="center" style="padding-bottom:20px;">
            <strong>Email –</strong> ${email}
          </td>
        </tr>

        <!-- DIVIDER -->
        <tr>
          <td style="padding:0 20px;">
            <div style="height:1px;background:#bfc3c8;"></div>
          </td>
        </tr>

        <!-- MESSAGE TITLE -->
        <tr>
          <td align="center" style="padding:20px 20px 10px;">
            <strong>Message</strong>
          </td>
        </tr>

        <!-- MESSAGE CONTENT -->
        <tr>
          <td style="padding:0 20px 20px;">
            <table width="100%" cellpadding="0" cellspacing="0"
              style="background:#f7f7f7;border-radius:100px;">
              <tr>
                <td style="padding:17px;text-align:center;">
                  ${message}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- REPLY BUTTON -->
        <tr>
          <td align="center" style="padding-bottom:30px;">
            <a href="mailto:${email}?subject=Re:%20New%20Inquiry"
               style="display:inline-block;
                      width:164px;
                      text-align:center;
                      background:#00c4cc;
                      color:#ffffff;
                      padding:14px 0;
                      font-size:18px;
                      font-weight:bold;
                      text-decoration:none;
                      border-radius:100px;">
              Reply
            </a>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#070300;padding:30px 20px;">
            <div style="color:#f6f5f1;font-size:24px;font-weight:bold;">
              Need help?
            </div>
            <div style="color:#bfc3c8;font-size:13px;margin-top:6px;">
              this message is from my website
            </div>
          </td>
        </tr>

      </table>
      <!-- END CARD -->

    </td>
  </tr>
</table>

</body>
</html>



      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
