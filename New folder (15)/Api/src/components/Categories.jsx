import React from 'react'
import { Button } from '@chakra-ui/react'
import {
    ListItem,

    UnorderedList,
} from '@chakra-ui/react'

const Categories = ({data}) => {
    return (
        <>
            <UnorderedList>
                {data.map((elem, i) => {
                    return (
                        <ListItem key={i}>{elem.name}
                           <Button btn-id={elem.id}  colorScheme='purple' >Delete</Button>
                           <Button colorScheme='gray'>Edit</Button></ListItem>
                        
                    )
                    
                })}
            
            </UnorderedList>
        </>
    )
}

export default Categories