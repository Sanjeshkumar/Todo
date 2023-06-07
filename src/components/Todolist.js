import React from 'react'
import { HStack, VStack,Text,IconButton, StackDivider, Spacer, Badge} from '@chakra-ui/react';
import {FaTrash} from 'react-icons/fa'
function Todolist({todos , deletetodo}) {
    if(!todos.length){
        
        return (
            <Badge colorScheme='orange' p='4' m='4' borderRadius='10'>
                Your TODO is Empty!!
            </Badge>
        )
    }

  return (
        <VStack divider ={<StackDivider/>}  borderColor='pink.100' borderWidth='3px' p={2} borderRadius='lg'
        width='60%'
        maxW={{base:'90vw' ,sm:'80vw',lg:'50vw',xl:'40vw'}}alignItems="stretch">    {/* responsive */}         
{todos.map(todo =>
<HStack key={todo.id}>
    <Text>{todo.body}</Text>
    <Spacer />
    <IconButton icon={<FaTrash />} color="orange" backgroundColor="pink.100" onClick={() => deletetodo(todo.id)} />
</HStack>
    )}
        </VStack>
    
  )
}                  

export default Todolist;