-- Habilitando RLS em todas as tabelas relevantes
ALTER TABLE public.clientes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.produtos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pedidos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pedido_itens ENABLE ROW LEVEL SECURITY;

-- Políticas para a tabela `clientes`
CREATE POLICY "Clientes podem ver e atualizar seus próprios dados."
    ON public.clientes FOR ALL
    -- auth.uid() é uma função do Supabase que retorna o ID do usuário autenticado.
    -- A cláusula USING aplica a regra para SELECT, UPDATE, DELETE.
    -- A cláusula WITH CHECK aplica a regra para INSERT e UPDATE.
    USING ( auth.uid() = id )
    WITH CHECK ( auth.uid() = id );

-- Políticas para a tabela `produtos`
CREATE POLICY "Qualquer usuário pode visualizar os produtos."
    ON public.produtos FOR SELECT
    -- "USING (true)" significa que esta política sempre permite a ação (neste caso, SELECT).
    USING ( true );

-- Políticas para a tabela `pedidos`
CREATE POLICY "Clientes podem criar e visualizar seus próprios pedidos."
    ON public.pedidos FOR ALL
    USING ( auth.uid() = cliente_id )
    WITH CHECK ( auth.uid() = cliente_id );

-- Políticas para a tabela `pedido_itens`
CREATE POLICY "Clientes podem visualizar os itens de seus próprios pedidos."
    ON public.pedido_itens FOR SELECT
    -- Uma sub-consulta é usada para verificar se o item pertence a um pedido do usuário logado.
    USING ( EXISTS (
        SELECT 1
        FROM public.pedidos p
        WHERE p.id = pedido_itens.pedido_id AND p.cliente_id = auth.uid()
    ));