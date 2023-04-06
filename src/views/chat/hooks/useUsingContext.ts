import { computed } from 'vue'
import { useMessage } from 'naive-ui'
import language from '@/locales'
import { useChatStore } from '@/store'

export function useUsingContext() {
  const ms = useMessage()
  const chatStore = useChatStore()
  const usingContext = computed<boolean>(() => chatStore.usingContext)

  function toggleUsingContext() {
    chatStore.setUsingContext(!usingContext.value)
    if (usingContext.value)
      ms.success(language.chat.turnOnContext)
    else
      ms.warning(language.chat.turnOffContext)
  }

  return {
    usingContext,
    toggleUsingContext,
  }
}
