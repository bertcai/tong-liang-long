import './assets/main.css'
import 'animate.css'

import { createApp } from 'vue'
import Vue3Lottie from 'vue3-lottie'
import App from './App.vue'
import router from './router'
import clickSound from './assets/audio/click.wav'
import bgmSound from './assets/audio/bgm.flac'
const app = createApp(App)

app.use(router)

app.use(Vue3Lottie)
app.mount('#app')

// 添加全局的点击事件监听器
document.addEventListener('click', () => {
    const audio = new Audio(clickSound);
    audio.play();
});

// 添加背景音乐
const bgm = new Audio(bgmSound);
bgm.loop = true;
// bgm.volume = 0.1;
bgm.play();