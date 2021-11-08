import { appWindow } from '@tauri-apps/api/window'

export function closeCurrentWindow() {
  return appWindow.close()
}
