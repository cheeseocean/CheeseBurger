import http from "@/http/http";
import React, {useEffect, useRef} from "react";
import {HttpFetchConfig} from "js-http-fetch/types/types";

interface Props {
  validator: () => boolean
  requestConfig: HttpFetchConfig
}

function CodeButton(props: Props) {
  const btnRef = useRef(null)
  const text = '发送验证码'
  const intervalTime = 60
  let timer: NodeJS.Timer, time = useRef(0)
  useEffect(() => {
    const clickTime = parseInt(localStorage.getItem('code') || '0', 36) || 0
    time.current = Math.floor((Date.now() - clickTime) / 1000)
    if (time.current <= intervalTime) {
      time.current = intervalTime - time.current
      checkBtn(btnRef.current as any)
    }
    // eslint-disable-next-line
  }, [])

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault()
    if (!props.validator()) return
    http(props.requestConfig).then(() => {
      time.current = intervalTime
      localStorage.setItem('code', Date.now().toString(36))
      checkBtn(btnRef.current as any)
    })
  }

  function checkBtn(btn: HTMLElement) {
    btn.innerText = text + '（' + time.current + '）'
    btn.setAttribute('disabled', '')
    btn.classList.add('adm-button-disabled')
    timer = setInterval(() => {
      time.current--
      if (time.current !== 0) {
        btn.innerText = text + '（' + time.current + '）'
      } else {
        btn.removeAttribute('disabled')
        btn.classList.remove('adm-button-disabled')
        btn.innerText = text
        clearInterval(timer)
      }
    }, 1000)
  }

  return <button className='adm-button adm-button-primary adm-button-small adm-button-shape-default' onClick={handleClick} ref={btnRef}>{text}</button>
}

CodeButton.defaultProps = {
  validator: () => true
}
export default CodeButton
