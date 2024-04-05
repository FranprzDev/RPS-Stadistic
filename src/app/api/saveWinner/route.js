import connectDB from "@/app/lib/db";
import { NextResponse } from "next/server";
import Winner from "@/app/model/Winner";

export const POST = async (req, res) => {
    await connectDB();

    try {
        const body = await req.json();

        if(!body.name || !body.score) return NextResponse.json({ data: null, error: ["Faltan campos obligatorios"] }) 

        const winner = new Winner(body  || {})
        await winner.save();

        return NextResponse.json({ data: winner, error: [] });
    } catch (error) {
        return NextResponse.json({ data: null, error: ["Hubo un error inesperado"] });
    }
}

export const PATCH = async (req, res) => { 
    await connectDB();

    try {
        const body = await req.json();

        if(!body.name) return NextResponse.json({ data: null, error: ["Faltan campos obligatorios"] })

        const winner = await Winner.findOneAndUpdate({ name: body.name }, { $inc: { score: 1 } }, { new: true })

        return NextResponse.json({ data: winner, error: [] });
    } catch (error) {
        return NextResponse.json({ data: null, error: ["Hubo un error inesperado"] });
    }
}

export const GET = async (req, res) => {
    await connectDB();

    try {
        const winners = await Winner.find({});

        return NextResponse.json({ data: winners, error: [] });
    } catch (error) {
        return NextResponse.json({ data: null, error: ["Hubo un error inesperado"] });
    }
}
