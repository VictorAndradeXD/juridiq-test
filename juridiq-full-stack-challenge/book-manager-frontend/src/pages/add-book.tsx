import { useState } from 'react';
import { VStack, Heading, Input, Button, useToast } from '@chakra-ui/react';
import { addBook } from '../services/api';

const AddBook = () => {
  const [form, setForm] = useState({ title: '', author: '', publishedYear: '' });
  const toast = useToast();

  const handleSubmit = async () => {
    try {
      await addBook(form);
      toast({ title: 'Livro cadastrado com sucesso!', status: 'success' });
      setForm({ title: '', author: '', publishedYear: '' });
    } catch {
      toast({ title: 'Erro ao cadastrar livro.', status: 'error' });
    }
  };

  return (
    <VStack spacing={4} p={4} align="stretch">
      <Heading>Cadastrar Novo Livro</Heading>
      <Input
        placeholder="Título"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <Input
        placeholder="Autor"
        value={form.author}
        onChange={(e) => setForm({ ...form, author: e.target.value })}
      />
      <Input
        type="number"
        placeholder="Ano de Publicação"
        value={form.publishedYear}
        onChange={(e) => setForm({ ...form, publishedYear: e.target.value })}
      />
      <Button colorScheme="blue" onClick={handleSubmit}>
        Cadastrar
      </Button>
    </VStack>
  );
};

export default AddBook;
