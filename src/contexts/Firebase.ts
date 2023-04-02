import type { IFirebase } from '../types'
import { createContext } from 'react'

const defaultState = {
  firebase: [],
  auth: [],
  firestore: []
}

export const Firebase = createContext<IFirebase>(defaultState)