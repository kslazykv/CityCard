
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex, Text } from "@chakra-ui/react"

export const Arrows = ({ prevHandler, nextHandler,currentIndex,lastIndex}:any) => {

    return (
        <Flex alignItems={'center'}>
        
            <Button 
                variant='unstyled' 
                onClick={prevHandler}
            >
                <ChevronLeftIcon 
                    color={currentIndex===0?'#CBD5E0':'black'}
                    boxSize={10}
                />
            </Button>

            <Text  fontSize={{base:"xs",md:'sm'}}>explore</Text>

            <Button
                variant='unstyled' 
                onClick={nextHandler}
            >
                <ChevronRightIcon 
                    color={currentIndex===lastIndex-1?'#CBD5E0':'black'}
                    boxSize={10}
                />
            </Button>
        </Flex>
        );
      };