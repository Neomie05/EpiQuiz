import React, { Dispatch, SetStateAction, useContext } from 'react'

export interface ContextStruct {
  page: string,
  setPage: Dispatch<SetStateAction<string>>,
  userName?: string,
  userImage?: any,
}

const initialDatas : ContextStruct = ({
  page: 'loading',
  setPage: ()=>{},
})

export const dataContext = React.createContext(initialDatas)

export default function useGetContext() {
  return useContext(dataContext)
}
