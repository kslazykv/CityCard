import * as React from "react"
import { Image, Flex } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './style.css'
import { Card } from "./cards/Card";
import { getCityData } from "../mockServer";



type PropsData ={
    title?: string,
    description?: string[],
    image?: string
  }

export const CitySlider=({}) => {
    
    const carouselRef = useRef<Carousel>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [data, setData]= useState<PropsData[]>([])

  const getData =  async () =>{
    const dataFromServer = await getCityData()
    setData(dataFromServer.elements)
  }

  useEffect(()=>{
    getData()
   
  },[])

  
    const handlePrevClick = () => {
      if (carouselRef.current && currentIndex > 0) {
        const newIndex = currentIndex - 1;
        setCurrentIndex(newIndex);
      }
    };
  
    const handleNextClick = () => {
      if (carouselRef.current && currentIndex < data.length) {
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);
      }
    };
   
    
    return(

    <Flex
        w='100vw'
        h='100vh'
        overflow={'hidden'}
    >
        <Carousel 
        ref={carouselRef}
        className='Carousel'
        showArrows={false}
        showStatus={false}
        swipeable={false}
        autoPlay={false}
        showThumbs={false}  
        showIndicators={false}
        onChange={setCurrentIndex}
        selectedItem={currentIndex}
            
        >
        {data.map((item,index)=><Image key={index} src={item.image} alt={item.title}/>)}

        </Carousel>
        <Flex
            px={{base:5,md:'10vw'}}
            pt='10vh'
            pb={{base:'10vh',md:'20vh'}}
        >     
            <Card
                prevHandler={handlePrevClick} 
                nextHandler={handleNextClick} 
                array={data} 
                currentIndex={currentIndex}
            />
        </Flex>
       

    </Flex> 
)

}