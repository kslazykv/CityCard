import { FC, useEffect, useRef, useState } from "react"
import { 
    Button,
    chakra, 
    Flex, 
    Text,  
} from "@chakra-ui/react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

type PropsCardContent = {
    array: any,
    currentIndex: number
}

export const CardContent:FC<PropsCardContent> =({array, currentIndex}:PropsCardContent) =>{
    const currentObject = array[currentIndex]; 
    const carouselRef = useRef<Carousel>(null);
    const [desc, setDesc] = useState([''])
    const [titlePart,setTitle] = useState('')

    useEffect(() => {
    
        const title = currentObject&& currentObject.title ? currentObject.title :''
        setTitle(title)
        
        const descript = currentObject&& currentObject.description ? currentObject.description :''
        setDesc(descript)
    
      }, [array.length,currentIndex,currentObject]);
    

    return(
        <Flex h='100%'  
                flexDir={'column'} 
                justifyContent={{base:'space-around',md:'space-between'}}
            >
                <Text  
                    fontSize={{base:"4xl",md:'6xl',lg:'9xl'}}
                    fontWeight={'extrabold'}
                    letterSpacing={'10px'}
                    textAlign={{base:'center',md:'end'}}
                    textTransform={'uppercase'}
                    color='gray.800'   
                >                 
                    <chakra.span display={{ base:'none',md:'inline'}}>{titlePart.slice(0, 2)}</chakra.span>
                    <chakra.span display={{ base:'inline',md:'none'}}>{titlePart}</chakra.span>
                </Text>

                  
                
                <Flex  flexDir={'column'} justifyContent='space-between' px={4} mb={{md:4}}>
                    <Text  
                    textAlign='left'
                    textTransform={'capitalize'}
                    fontSize='xl'
                    mb={{base:4,md:10}}

                >
                    Some nice title.
                </Text>
                    <Carousel 
                        ref={carouselRef}
                        showStatus={false}
                        showThumbs={false}  
                        
                        infiniteLoop  
                        className="CarouselText"
                        renderIndicator={(onClickHandler, isSelected, index) => {
                            return <CustomIndicator onClickHandler={onClickHandler} active={isSelected} key={index} />
                          }}
                    >
                        {desc && desc.map((item:string,index:any)=>(
                            <Text 
                                key={index}
                                borderLeft={'2px solid #CBD5E0'}
                                px={2}
                                w='100%'
                                minH='100px'
                                mb={{base:10}}
                                fontWeight='light'
                                textAlign={'left'}
                                color='gray.500'
                                letterSpacing={'-0.4px'}
                                wordBreak='break-word'
                            >
                                {item}   
                            </Text>
                        ))}
                       
                    </Carousel>
                  
                </Flex>
                  
                </Flex>
       
    )
}

function CustomIndicator(props:any) {
    const { onClickHandler, active } = props;
    return (
    
      <Button
        size={'xs'}
        variant={active ?'solid':'outline'}
        onClick={onClickHandler}
        bgColor= {active ? 'black' : 'transparent'}
        _hover={{
            bgColor:active ? 'black' : '#A0AEC0'
        }}
        border= '1px solid #A0AEC0'
        borderRadius= '50%'
        margin= '0 5px'
        transform={'scale(.6)'}
      />
    
    );
  }
  