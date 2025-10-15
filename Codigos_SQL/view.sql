/*
 * View: pedidos_detalhados
 * Fornece uma visão consolidada e amigável dos pedidos, juntando dados
 * de clientes e calculando o total, ideal para relatórios e listagens.
 */
CREATE OR REPLACE VIEW public.pedidos_detalhados AS
SELECT
    p.id AS pedido_id,
    p.criado_em AS data_do_pedido,
    p.status,
    c.id AS cliente_id,
    c.nome AS nome_do_cliente,
    c.email AS email_do_cliente,
    -- Reutiliza nossa função de cálculo para manter a lógica centralizada.
    public.calcular_total_pedido(p.id) AS total_do_pedido
FROM
    public.pedidos p
JOIN
    public.clientes c ON p.cliente_id = c.id;

COMMENT ON VIEW public.pedidos_detalhados IS 'Visão consolidada de pedidos com detalhes do cliente e valor total calculado.';


/*
Utilizei o alter para habilitar as regras de segurança na view também
*/
ALTER VIEW public.pedidos_detalhados SET (security_invoker = true);