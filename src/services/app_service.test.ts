import { closeCurrentWindow } from './app.service'
import { appWindow } from '@tauri-apps/api/window'

jest.mock('@tauri-apps/api/window', () => ({
  appWindow: {
    close: jest.fn(),
  },
}))

describe('App Service', () => {
  it('should close current window', async () => {
    await closeCurrentWindow()
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(appWindow.close).toBeCalled()
  })
})
