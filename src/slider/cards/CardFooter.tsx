import { 
    Divider, 
    Flex, 
    Text,  
    VStack
} from "@chakra-ui/react"
import { FC } from "react"

import { Arrows } from "../Arrows"

type PropsCardFooter ={
    titlePart: string
    prevHandler: () => void,
    nextHandler: () => void,
    array: any,
    currentIndex: number
}

export const CardFooter: FC<PropsCardFooter> = ({
    titlePart,
    prevHandler,
    nextHandler,
    array,
    currentIndex
}:PropsCardFooter) =>{
    
    return(
        <>
        <VStack 
        w={{md:'fit-content'}}
        h='100%'
        spacing='-0.2'
        justify={'center'}
        bg='gray.100'
        borderLeft={'1px solid #CBD5E0'}

    >
        <Text 
            fontWeight={'bold'} 
            fontSize='xl'
            textTransform={'capitalize'}
            p={2}
        >
            {titlePart}
        </Text>
        <Arrows 
            prevHandler={prevHandler} 
            nextHandler={nextHandler} 
            currentIndex={currentIndex} 
            lastIndex={array.length}
        />
   
        
    </VStack>
    <Flex px={10} bgColor={'red.300'} justifyContent={'center'} alignItems='center' ml={{base:1,md:0}}>
        <Text h='fit-content'>
            Some nice text.
        </Text>
    </Flex>

    <Flex 
        ml='auto'
        mr={{base:'-4vw',md:0}}
        alignItems='center'
        transform={'rotate(90deg)'}
        h='fit-content'
        fontWeight={'bold'}
        fontSize='xl'
        color={{base:'black',md:'white'}}
        borderColor={'white'}
    >
        <Text pr={8} h='fit-content' >Visit the City</Text>
        <Divider w={{base:5,md:'60px'}} borderWidth={'1px'} opacity={1}/>
    </Flex>
    </>
    )
}