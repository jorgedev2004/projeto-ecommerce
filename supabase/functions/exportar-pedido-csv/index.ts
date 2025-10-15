import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    )
    const url = new URL(req.url)
    const pedidoId = url.searchParams.get('pedido_id')
    if (!pedidoId) throw new Error("O ID do pedido é obrigatório.")
    const { data: itens, error } = await supabaseClient
      .from('pedido_itens')
      .select(`quantidade, preco_unitario, produtos ( nome, descricao )`)
      .eq('pedido_id', pedidoId)
    if (error) throw error
    if (!itens || itens.length === 0) return new Response("Nenhum item encontrado para este pedido.", { status: 404 });
    let csv = 'Produto,Quantidade,Preco Unitario,Subtotal\n';
    itens.forEach(item => {
      const subtotal = item.quantidade * item.preco_unitario;
      csv += `"${item.produtos.nome}",${item.quantidade},${item.preco_unitario},${subtotal}\n`;
    });
    return new Response(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="pedido_${pedidoId}.csv"`
      },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    })
  }
})