import { ref } from 'vue'
import { useMessage } from 'naive-ui'

export function useChangeModel() {
  const ms = useMessage()
  const changeModel = ref<boolean>(true)

  function toggleChangeModel() {
    changeModel.value = !changeModel.value
    if (changeModel.value)
      ms.success('当前模型为ChatGPT-3.5-Turbo')
    else
      ms.success('当前模型为ChatGPT-4')
  }

  return {
    changeModel,
    toggleChangeModel,
  }
}
