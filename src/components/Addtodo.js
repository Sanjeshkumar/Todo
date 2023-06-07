import { Button, HStack, Input,useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import {nanoid } from 'nanoid';

function Addtodo({addtodo}) {
const toast =useToast()
    function handlesubmit(e){
        e.preventDefault();
        if(!content){
            toast({
                title: 'No Data',
                status: 'warning',
                duration: 2000,
                isClosable: true,
              });
              return
        }
{/*console.log(content);*/}
const todo ={
    id: nanoid(),
    body:content,
};
{/*console.log(todo);*/}
addtodo(todo);
setContent('');
    }

    const [content, setContent] = useState('')
  return (
   <form onSubmit={handlesubmit}>
    <HStack mt='50px'>
        <Input variant="filled" placeholder='Add your Routine' 
        value={content} onChange={(e) => setContent(e.target.value)}/>
        <Button color="white" backgroundColor="pink.700" px="8" type='submit'>Add</Button>
    </HStack>

   </form>
  )
}

export default Addtodo;