import { createContext, useState, useEffect, ReactNode } from 'react'
import { SnackData } from '../interfaces/SnackData';

import { getBurgers, getPizzas, getDrinks, getIceCreams } from '../services/api';

interface SnackContextProps {
  burgers: SnackData[],
  pizzas: SnackData[],
  drinks: SnackData[],
  iceCreams: SnackData[]
}

interface SnackProviderProps {
  children: ReactNode
}

export const SnackContext = createContext({} as SnackContextProps) 

export function SnackProvider({ children }: SnackProviderProps) {
  const [burgers, setBurges] = useState<SnackData[]>([]);
  const [pizzas, setPizzas] = useState<SnackData[]>([]);
  const [drinks, setDrinks] = useState<SnackData[]>([]);
  const [iceCreams, setIceCreams] = useState<SnackData[]>([]);

  useEffect(() => {
    (async () => {
      try {
      const burgerRequest = await getBurgers()
      const pizzasRequest = await getPizzas()
      const drinksRequest = await getDrinks()
      const iceCreamsRequest = await getIceCreams()

      const requests = [ burgerRequest, pizzasRequest, drinksRequest, iceCreamsRequest]

      const [ 
        { data: burgerResponse }, 
        { data: pizzasResponse }, 
        { data: drinksResponse }, 
        { data: iceCreamsResponse }, 
      ] = await Promise.all(requests)

      setBurges(burgerResponse)
      setPizzas(pizzasResponse)
      setDrinks(drinksResponse)
      setIceCreams(iceCreamsResponse)
    } catch (error) {
        console.error(error)
    }
    })()
  }, []);

  return (
    <SnackContext.Provider value={{ burgers, pizzas, drinks, iceCreams }}>
          { children }
        </SnackContext.Provider>
  )
}