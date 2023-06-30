export interface StringObject {
  [key: string]: string
}

export interface IFirebase {
  firebase: any
  auth: any
  firestore: any
}

export interface IFileds {
  name: string
  placeholder: string
  type?: string
  options: object
}

export interface IMessage {
  created: string
  displayName: string
  photoUrl: string
  text: string
  uid: string
}
