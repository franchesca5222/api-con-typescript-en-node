import { DiaryEntry, InfoDiaryEntry,  newDiaryEntry } from '../types';

import diaryData from './diaries.json';

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = (): DiaryEntry[] => diaries;

export const findById = (id: number): InfoDiaryEntry | undefined => {
   const entry = diaries.find(d => d.id === id)
   if (entry != null ) {
      const {comment, ...restofDiary} = entry
      return restofDiary
   } 
    return undefined
}

export const getEntriesWithoutSensitiveInfo = (): InfoDiaryEntry[] => { return diaries.map(({id, date, kind, pay}) => {
    return {
        id,
        date,
        kind,
        pay,
    }
})

}

export const addDiary = (newDiaryEntry:newDiaryEntry): DiaryEntry =>
 {
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
       ...newDiaryEntry
    }
diaries.push(newDiary)    
return newDiary
}











