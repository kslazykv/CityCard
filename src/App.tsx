import * as React from "react"
import { ChakraProvider, theme } from "@chakra-ui/react"
import { CitySlider } from "./slider/CitySlider"


export const App = () => (
  <ChakraProvider theme={theme}>
    <CitySlider />
  </ChakraProvider>
)
