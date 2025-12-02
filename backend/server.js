const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://127.0.0.1:5500' 
}));

app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

app.get('/', (req, res) => {
  res.json({ mensagem: 'API rodando!' });
});

app.get('/produtos', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('produtos')
      .select('*');  

    if (error) throw error;
    res.json(data);  

  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

app.get('/produtos/:id', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('produtos')
      .select('*')
      .eq('id', req.params.id)  
      .single();  

    if (error) throw error;
    res.json(data);  

  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

app.post('/produtos', async (req, res) => {
  try {
    const { nome, preco } = req.body;  

    const { data, error } = await supabase
      .from('produtos')
      .insert([{ nome, preco }]);  

    if (error) throw error;
    res.status(201).json(data);  

  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

app.put('/produtos/:id', async (req, res) => {
  try {
    const { nome, preco } = req.body;

    const { data, error } = await supabase
      .from('produtos')
      .update({ nome, preco })
      .eq('id', req.params.id)
      .select()
      .single();

    if (error) throw error;

    res.json(data);

  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

app.delete('/produtos/:id', async (req, res) => {
  try {
    const { error } = await supabase
      .from('produtos')
      .delete()
      .eq('id', req.params.id);

    if (error) throw error;

    res.json({ mensagem: 'Produto deletado com sucesso!' });  

  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
