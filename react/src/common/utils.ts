import {Toast} from 'antd-mobile';
import {ToastHandler} from "antd-mobile/es/components/toast";

export const Loading = {
  vm: null as unknown as ToastHandler,
  closed: true,
  MANUAL: false, // 是否手动关闭，默认否
  open(options = {
    MANUAL: false,
    content: '加载中...',
    maskClickable: true,
    icon: 'loading',
    duration: 0
  } as const): void {
    this.vm = Toast.show(options)
    this.closed = false
    this.MANUAL = options.MANUAL
  },
  close(): void {
    this.vm.close()
    this.closed = true
    this.MANUAL = false
  }
}
