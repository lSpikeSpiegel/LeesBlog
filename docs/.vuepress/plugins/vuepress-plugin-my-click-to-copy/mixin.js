import CopyBtn from './CopyBtn.vue'
import Vue from 'vue'

export default {
    updated() {
        setTimeout(() => {

            let list = document.querySelectorAll('div[class*=language-] pre')
            for (let el of list) {
                // 防止重复写入
                if (el.classList.contains('copyBtn-added')) return
                let copyComponent = Vue.extend(CopyBtn)
                let instance = new copyComponent()
                instance.code = el.innerText
                instance.$mount() // 如果直接挂载到目标元素节点，会清空该元素节点
                el.classList.add('copyBtn-added')
                el.appendChild(instance.$el)
            }

        }, 100)

    }
}