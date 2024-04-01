import { BACKEND_HOST } from "@/constants";
import type { Invoice } from "@/models/invoice";

export async function generateInvoice(invoice: Invoice, stripeToken: string): Promise<string> {
    const res = await fetch(`${BACKEND_HOST}/generate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${stripeToken}`,
        },
        body: JSON.stringify(invoice),
    })

    if (!res.ok) {
        throw new Error("Failed to generate invoice")
    }

    return await res.text()
}