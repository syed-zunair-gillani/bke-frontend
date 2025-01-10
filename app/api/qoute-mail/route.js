import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    const {
        companyName,
        contactName,
        mcDotType,
        mcDotNumber,
        email,
        phone,
        city,
        state,
        zip,
        trailerType,
        commodity,
        pickupAddress,
        pickupCity,
        pickupState,
        pickupZip,
        deliveryAddress,
        deliveryCity,
        deliveryState,
        deliveryZip,
        pickupDate,
        deliveryDate,
        weight,
        specialNeeds,
        smsOptIn
    }
        = await req.json();

    const transporter = nodemailer.createTransport({
        host: process.env.NEXT_PUBLIC_EMAIL_HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL,
            pass: process.env.NEXT_PUBLIC_APP_PASSWORD_FOR_EMAIL,
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_EMAIL,
            to: process.env.NEXT_PUBLIC_EMAIL,
            subject: `Quote Email`,
            html: `
                <p><strong>Contact Name: </strong>${contactName}</p>
                <p><strong>Company Name: </strong>${companyName}</p>
                <p><strong>MC Dot Type: </strong>${mcDotType}</p>
                <p><strong>MC Dot Number: </strong>${mcDotNumber}</p>
                <p><strong>Email: </strong>${email}</p>
                <p><strong>Phone: </strong>${phone}</p>
                <p><strong>City: </strong>${city}</p>
                <p><strong>State: </strong>${state}</p>
                <p><strong>Zip: </strong>${zip}</p>
                <p><strong>Trailer Type: </strong>${trailerType}</p>
                <p><strong>Commodity: </strong>${commodity}</p>
                <p><strong>Pickup Address: </strong>${pickupAddress}</p>
                <p><strong>Pickup City: </strong>${pickupCity}</p>
                <p><strong>Pickup State: </strong>${pickupState}</p>
                <p><strong>Pickup Zip: </strong>${pickupZip}</p>
                <p><strong>Delivery Address: </strong>${deliveryAddress}</p>
                <p><strong>Delivery City: </strong>${deliveryCity}</p>
                <p><strong>Delivery State: </strong>${deliveryState}</p>
                <p><strong>Delivery Zip: </strong>${deliveryZip}</p>
                <p><strong>Pickup Date: </strong>${pickupDate}</p>
                <p><strong>Delivery Date: </strong>${deliveryDate}</p>
                <p><strong>Weight: </strong>${weight}</p>
                <p><strong>Special Needs: </strong>${specialNeeds}</p>
                <p><strong>SMS Opt-In: </strong>${smsOptIn}</p>
            `,
        });
        return new NextResponse(
            JSON.stringify({
                status: "ok",
                message: "Email sent",
            }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Email sending error:', error);
        return new NextResponse(
            JSON.stringify({
                status: "error",
                message: error.message,
                errorCode: error.code,
                dnsError: error.dns,
                stack: error.stack,
            }),
            { status: 500 }
        );
    }
}
