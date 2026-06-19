export async function onRequestPost(context) {

    const body = await context.request.json();

    const response = await fetch("https://api.resend.com/emails", {

        method: "POST",

        headers: {

            Authorization: `Bearer ${context.env.RESEND_API_KEY}`

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            from: "AutoColor Colombia <onboarding@resend.dev>",

            to: ["contacto@autocolorcolombia.com"],

            subject: "Nueva solicitud desde la página web",

            html: `

                <h2>Nueva solicitud</h2>

                <p><strong>Nombre:</strong> ${body.nombre}</p>

                <p><strong>Correo:</strong> ${body.correo}</p>

                <p><strong>Teléfono:</strong> ${body.telefono}</p>

                <p><strong>Mensaje:</strong></p>

                <p>${body.mensaje}</p>

            `

        })

    });

    return Response.json({

        message: "Solicitud enviada correctamente."

    });

}