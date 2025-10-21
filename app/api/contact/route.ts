import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	phone: z.string().optional().default(""),
	message: z.string().min(5),
});

export async function POST(req: Request) {
	try {
		const data = schema.parse(await req.json());
		const resendApiKey = process.env.RESEND_API_KEY;
		const contactTo = process.env.CONTACT_TO_EMAIL;

		if (!resendApiKey || !contactTo) {
			return new Response(
				JSON.stringify({ ok: true, delivery: "skipped" }),
				{ status: 200 }
			);
		}

		const resend = new Resend(resendApiKey);
		const { error } = await resend.emails.send({
			from: "Evoliq <noreply@evoliq.dev>",
			to: [contactTo],
			reply_to: data.email,
			subject: `Nová správa — ${data.name}`,
			text: `Meno: ${data.name}\nEmail: ${data.email}\nTelefón: ${data.phone}\n\nSpráva:\n${data.message}`,
		});

		if (error) {
			return new Response(JSON.stringify({ error: error.message }), {
				status: 500,
			});
		}

		return new Response(JSON.stringify({ ok: true }), { status: 200 });
	} catch (error: unknown) {
		return new Response(
			JSON.stringify({ error: (error as Error)?.message || "Invalid request" }),
			{ status: 400 }
		);
	}
}
