import { Box, VStack, Text } from '@chakra-ui/react';

const BookList = ({ books }: { books: any[] }) => (
  <VStack spacing={4} align="stretch">
    {books.map((book) => (
      <Box key={book.id} p={4} borderWidth={1} borderRadius="md" shadow="sm">
        <Text fontSize="lg" fontWeight="bold">{book.title}</Text>
        <Text>Autor: {book.author}</Text>
        <Text>Ano de Publicação: {book.publishedYear}</Text>
      </Box>
    ))}
  </VStack>
);

export default BookList;
