<template>
  <button class="van-button van-button--primary van-button--small" @click="handleClick" ref="btnRef">{{ text }}</button>
</template>

<script lang="ts" setup>
import {defineProps, onMounted, ref, withDefaults} from "vue";
import http from "@/http/http";
import {HttpFetchConfig} from "js-http-fetch/types/types";

const btnRef = ref()

const props = withDefaults(defineProps<{
  validator: () => boolean
  requestConfig: HttpFetchConfig
}>(), {
  validator: () => true,
})
const text = '发送验证码'
const intervalTime = 60
let timer: number, time: number
onMounted(() => {
  const clickTime = parseInt(localStorage.getItem('code') || '0', 36) || 0
  time = Math.floor((Date.now() - clickTime) / 1000)
  if (time <= intervalTime) {
    time = intervalTime - time
    checkBtn(btnRef.value)
  }
})

function handleClick(e: PointerEvent) {
  e.preventDefault()
  if (!props.validator()) return
  http(props.requestConfig).then(() => {
    time = intervalTime
    localStorage.setItem('code', Date.now().toString(36))
    checkBtn(btnRef.value)
  })
}

function checkBtn(btn: HTMLElement) {
  btn.innerText = text + '（' + time + '）'
  btn.setAttribute('disabled', '')
  btn.classList.add('van-button--disabled')
  timer = setInterval(() => {
    time--
    if (time !== 0) {
      btn.innerText = text + '（' + time + '）'
    } else {
      btn.removeAttribute('disabled')
      btn.classList.remove('van-button--disabled')
      btn.innerText = text
      clearInterval(timer)
    }
  }, 1000)
}
</script>
