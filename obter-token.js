import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mbxayqbkrqtitovdwxuz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ieGF5cWJrcnF0aXRvdmR3eHV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0NjcxMjcsImV4cCI6MjA3NjA0MzEyN30.NpjDF1VkATVHZEhneBFw6plLXYRNiqCUtklJ52mozi8';

const userEmail = 'jorge@email.com';   // O e-mail do usuário - se encontra no arquivo readme
const userPassword = 'jorge123';       // A senha dele - se encontra no arquivo readme

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function getAuthToken() {
  console.log('Tentando fazer login como:', userEmail);
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
    console.log(data.session.access_token);
    console.log('\nCopie o token acima para usar no Thunder Client.');
  }
}

getAuthToken();