// Importa a função para criar um cliente Supabase
import { createClient } from '@supabase/supabase-js';

// --- PREENCHA SUAS INFORMAÇÕES AQUI ---
const SUPABASE_URL = 'https://uzzafhiktdxrcuujyfev.supabase.co'; // Ex: 'https://xyz.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6emFmaGlrdGR4cmN1dWp5ZmV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0NTQ1NzUsImV4cCI6MjA3NjAzMDU3NX0.8WQhJ0EMgFNGXgbtkrwaYdW7E-VedP3IUj_zPfMltDc';

const userEmail = 'teste@email.com'; // O e-mail do seu usuário de teste
const userPassword = 'teste123321';   // A senha do seu usuário de teste
// -----------------------------------------

// Cria o cliente Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Função assíncrona para fazer o login e obter o token
async function getAuthToken() {
  console.log('Tentando fazer login como:', userEmail);

  // Faz o login com e-mail e senha
  const { data, error } = await supabase.auth.signInWithPassword({
    email: userEmail,
    password: userPassword,
  });

  if (error) {
    console.error('Erro ao fazer login:', error.message);
    return;
  }

  if (data.session) {
    console.log('\n✅ Login realizado com sucesso!');
    console.log('\n🔑 Seu Token de Acesso (JWT) é:\n');
    // Imprime o token de acesso no console
    console.log(data.session.access_token);
    console.log('\nCopie o token acima (sem as aspas) para usar no Thunder Client/Postman.');
  } else {
    console.log('Não foi possível obter a sessão.');
  }
}

// Executa a função
getAuthToken();