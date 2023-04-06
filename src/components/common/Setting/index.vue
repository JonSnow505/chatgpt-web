<script setup lang='ts'>
import { computed, ref } from 'vue'
import { NModal, NTabPane, NTabs } from 'naive-ui'
import Advanced from './Advanced.vue'
import { SvgIcon } from '@/components/common'
import language from '@/locales'
interface Props {
  visible: boolean
}

interface Emit {
  (e: 'update:visible', visible: boolean): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emit>()

const active = ref('Advanced')

const show = computed({
  get() {
    return props.visible
  },
  set(visible: boolean) {
    emit('update:visible', visible)
  },
})
</script>

<template>
  <NModal v-model:show="show" :auto-focus="false" preset="card" style="width: 95%; max-width: 640px">
    <div>
      <NTabs v-model:value="active" type="line" animated :default-value = active>
        <NTabPane name="Advanced" tab="Advanced">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri:equalizer-line" />
            <span class="ml-2">{{ language.setting.advanced }}</span>
          </template>
          <div class="min-h-[100px]">
            <Advanced />
          </div>
        </NTabPane>
      </NTabs>
    </div>
  </NModal>
</template>
