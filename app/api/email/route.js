import { NextResponse } from "next/server";
import ConnectDB from "../../../lib/config/db";
import { writeFile } from "fs/promises";
import * as fs from "node:fs/promises";
import EmailModel from "../../../lib/models/EmailModel";

const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();

export async function POST(request) {
    const formData = await request.formData();
    const email = {
        email: `${formData.get("email")}`,
    }
    await EmailModel.create(email);
    return NextResponse.json({ success: true, msg: "Email saved successfully" });
}

export async function GET(request) {
    const emails = await EmailModel.find({});
    return NextResponse.json({ success: true, emails });
}

export async function DELETE(request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    await EmailModel.findByIdAndDelete(id);
    return NextResponse.json({ success: true, msg: "Email deleted successfully" });
}

