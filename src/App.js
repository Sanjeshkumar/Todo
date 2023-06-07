import { Heading } from '@chakra-ui/react';
import './App.css';
import Todolist from './components/Todolist';
import Addtodo from './components/Addtodo';
import { VStack, IconButton, useColorMode,Button,Text,Box } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';


function App() {
  const initialTodos = [
    {
      id: 1,
      body: 'Wake Up at 6:00 AM',
    },
    {
      id: 2,
      body: '6:00 to 7:00 >>> Jogging',
    },
  ];

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || initialTodos || []
  );
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function deletetodo(id) {
    const newtodos = todos.filter((todo) => todo.id !== id);
    setTodos(newtodos);
  }

  function addtodo(todo) {
    setTodos([...todos, todo]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound='true'
        size='lg'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />
      <Heading
        mb='8'
        fontWeight='bold'
        size='2xl'
        bgGradient='linear(to-l, pink.900, pink.300, blue.700)'
        bgClip='text'
      >
        DaY Schedule
      </Heading>
      <Todolist todos={todos || []} deletetodo={deletetodo} />
      <Addtodo addtodo={addtodo} />
   
  
    </VStack>
  );
}

export default App;
