import { 
    Grid, 
    GridItem,  
    Text,  
} from "@chakra-ui/react"
import { FC, useEffect, useState } from "react"
import { CardMenu } from "./CardMenu"
import { CardContent } from "./CardContent"
import { CardFooter } from "./CardFooter"



type Props = {
    prevHandler: () => void,
    nextHandler: () => void,
    array: any,
    currentIndex: number
}

export const Card:FC<Props> = ({prevHandler,nextHandler,array, currentIndex}:Props) =>{ 
  
    const currentObject = array[currentIndex]; 
    const [titlePart,setTitle] = useState('')
 

    

  useEffect(() => {
    
    const title = currentObject&& currentObject.title ? currentObject.title :''
    setTitle(title)

  }, [array.length,currentIndex,currentObject]);


    
    return(
   
    <Grid
        w='100%'
        templateRows={{base:'repeat(7, 1fr)',md:'repeat(5, 1fr)'}}
        templateColumns={{base:'repeat(1, 1fr)',md:'repeat(4, 1fr)'}}
        gap={{base:1,md:0}}
        pos='relative'
        border='1px solid #A0AEC0'
        color='black'
        boxShadow={'dark-lg'}
    >
        <GridItem 
            colSpan={5}
            fontWeight={{base:'bold',md:'extrabold'}}
            fontSize={{base:'xs',md:'md'}}
            textTransform={'uppercase'}
            bg={{base:'#EDF2F7',md:'transparent'}}
            p={5}
            display={'flex'}
            justifyContent='space-between'
            alignItems={'center'}
            bgGradient={{
                lg:'linear(to-l, transparent 59.9vw,#EDF2F7 10vw)'
            }}
        >
           
            <CardMenu/>

        </GridItem>
        <GridItem 
            rowSpan={{base:5,md:4}} 
            colSpan={{base:5,md:1}} 
            bg={{base:'rgba(237,242,247,0.9)',md:'#EDF2F7' }}
        >
            <CardContent array={array} currentIndex={currentIndex}/>
      
        </GridItem>
        <GridItem 
            rowSpan={{base:1,md:3}}
            colSpan={{base:5,md:3}} 
            display={{base:'none',md:'flex'}}
            bg='transparent'
        >
            <Text
                 fontSize={{base:"4xl",md:'6xl',lg:'9xl'}}
                fontWeight={'extrabold'}
                letterSpacing={'10px'}
                textAlign={'start'}
                textTransform={'uppercase'}
                color='gray.100'     
            >
                {titlePart.substring(2)}
            </Text>
        </GridItem>
        <GridItem 
            rowSpan={{base:7,md:3}} 
            colSpan={{base:5,md:3}} 
            display={'flex'}
        >
            <CardFooter 
                titlePart={titlePart} 
                currentIndex={currentIndex} 
                array={array}
                prevHandler={prevHandler}
                nextHandler={nextHandler}
                
            />
        </GridItem>
        
    </Grid>
    
)
}

