import { ss } from '@/utils/storage'

const LOCAL_NAME = 'appSetting'

export type Theme = 'light' | 'dark' | 'auto'

export type Language = 'zh-CN' | 'zh-TW' | 'en-US'

export interface AppState {
  siderCollapsed: boolean
  theme: Theme
  language: Language
  chatgpt_user: string
}

export function defaultSetting(): AppState {
    const qstr = location.href.substr(1).split('?')[1]
    var user = ''
    if (qstr != undefined) {
        user = qstr.split('=')[1]
    }
    return { siderCollapsed: false, theme: 'light', language: 'zh-CN', chatgpt_user: user }
}

export function getLocalSetting(): AppState {
  const localSetting: AppState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalSetting(setting: AppState): void {
    const qstr = location.href.substr(1).split('?')[1]
    var user = ''
    if (qstr != undefined) {
        user = qstr.split('=')[1]
    }
    if (setting['chatgpt_user'].length === 0) {
        setting.chatgpt_user = user
    }
    if (user != window.location.href.split('=')[1]) {
        const url = window.location.href + '/?id=' + user
        window.location.href = url
    }

    ss.set(LOCAL_NAME, setting)
}
