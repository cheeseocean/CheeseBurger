import {Toast} from 'vant'
import {ComponentInstance} from 'vant/es/utils'

export const Loading = {
  vm: null as unknown as ComponentInstance,
  closed: true,
  MANUAL: false, // 是否手动关闭，默认否
  open(options = {
    MANUAL: false,
    message: '加载中...',
    forbidClick: true,
    loadingType: 'spinner',
    duration: 0
  } as const): void {
    this.vm = Toast.loading(options)
    this.closed = false
    this.MANUAL = options.MANUAL
  },
  close(): void {
    this.vm.clear()
    this.closed = true
    this.MANUAL = false
  }
}
