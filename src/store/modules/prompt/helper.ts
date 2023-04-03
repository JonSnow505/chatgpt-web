import { ss } from '@/utils/storage'
import  defaultPrompts  from '@/assets/prompt.json'

const LOCAL_NAME = 'promptStore'

export type PromptList = []

export interface PromptStore {
  promptList: PromptList
}

export function getLocalPromptList(): PromptStore {
  const promptStore: PromptStore | undefined = ss.get(LOCAL_NAME)
  if (promptStore == undefined) {
    setLocalPromptList({ promptList: defaultPrompts as [] });
  }
  return promptStore ?? { promptList: defaultPrompts as [] }
}

export function setLocalPromptList(promptStore: PromptStore): void {
  ss.set(LOCAL_NAME, promptStore)
}
