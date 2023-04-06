<script lang="ts" setup>
import { ref } from 'vue'
import { NButton, NInput, useMessage } from 'naive-ui'
import { useSettingStore } from '@/store'
import type { SettingsState } from '@/store/modules/settings/helper'
import language from '@/locales'

const settingStore = useSettingStore()

const ms = useMessage()

const systemMessage = ref(settingStore.systemMessage ?? '')

function updateSettings(options: Partial<SettingsState>) {
  settingStore.updateSetting(options)
  ms.success(language.common.success)
}

function handleReset() {
  settingStore.resetSetting()
  ms.success(language.common.success)
  window.location.reload()
}
</script>

<template>
  <div class="p-4 space-y-5 min-h-[200px]">
    <div class="space-y-6">
      <div class="flex items-center space-x-4">
        <span class="flex-shrink-0 w-[100px]">{{ language.setting.role }}</span>
        <div class="flex-1">
          <NInput v-model:value="systemMessage" placeholder="" />
        </div>
        <NButton size="tiny" text type="primary" @click="updateSettings({ systemMessage })">
          {{ language.common.save }}
        </NButton>
      </div>
      <div class="flex items-center space-x-4">
        <span class="flex-shrink-0 w-[100px]">&nbsp;</span>
        <NButton size="small" @click="handleReset">
          {{ language.common.reset }}
        </NButton>
      </div>
    </div>
  </div>
</template>
