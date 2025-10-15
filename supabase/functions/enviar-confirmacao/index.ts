import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  try {
    const { pedido } = await req.json()
    console.log("Simulando envio de e-mail de confirmação para:", pedido.cliente_email);
    return new Response(JSON.stringify({ message: "Simulação: Email de confirmação enviado." }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    })
  }
})