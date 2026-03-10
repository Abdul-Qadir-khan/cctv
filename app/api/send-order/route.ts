import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const adminMail = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `New Order ${data.orderId}`,
    html: `
      <h2>New Order Received</h2>

      <p><b>Order ID:</b> ${data.orderId}</p>

      <h3>Customer Details</h3>
      <p>Name: ${data.name}</p>
      <p>Email: ${data.email}</p>
      <p>Phone: ${data.phone}</p>
      <p>Address: ${data.address}</p>

      <h3>Order Items</h3>
      ${data.items.map((item:any)=>`
        <p>${item.name} - Qty: ${item.qty}</p>
      `).join("")}

      <h3>Total: $${data.total}</h3>
    `
  };

  const userMail = {
    from: process.env.EMAIL_USER,
    to: data.email,
    subject: `Your Order Confirmation`,
    html: `
      <h2>Thanks for your order!</h2>

      <p>Your order id is:</p>

      <h1>${data.orderId}</h1>

      <p>Keep this ID to track your order.</p>
    `
  };

  await transporter.sendMail(adminMail);
  await transporter.sendMail(userMail);

  return NextResponse.json({ success: true });
}