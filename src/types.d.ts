export type kind = 'to go' | 'lounge' | 'bar' | 'terrace'
export type pay  = 'cash' | 'credit card' | 'discount' | 'courtesy'

export interface DiaryEntry {

  id: number,
  date:string,
  kind:kind,
  pay:pay,
  comment: string

}
export type InfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type newDiaryEntry = Omit<DiaryEntry, 'id'>



