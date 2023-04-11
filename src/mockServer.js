import data from './data/data.json'

  export function getCityData()  {
    return new Promise((resolve) => resolve(data))    
   }