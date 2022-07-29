<template>
  <span class="copyBtn" @click="copyBtnClick">{{ btnTxt }}</span>
</template>

<script>
export default {
  name: 'CopyBtn',
  data () {
    return {
      btnTxt: copyButtonText
    }
  },
  methods: {
    copyBtnClick () {
      this.copyCodeToClipboard(this.code, this.changeTxt)
    },

    copyCodeToClipboard (code, cb) {
      console.log(cb)
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(code)
          .then(() => {
            cb && cb()
          })
          .catch(() => {
            alert('copy failed')
          })
      } else {
        let copyEl = document.createElement('textarea')
        document.body.appendChild(copyEl)
        copyEl.value = code
        copyEl.select()
        document.execCommand('Copy')
        copyEl.remove()
        cb && cb()
      }
    },
    changeTxt () {
      this.btnTxt = copiedButtonText
      setTimeout(() => {
        this.btnTxt = copyButtonText
      }, 1000)
    }
  }
}
</script>

<style scoped>
.copyBtn {
  position: absolute;
  bottom: 10px;
  right: 7.5px;
  opacity: 0.75;
  cursor: pointer;
  font-size: 14px;
}

.copyBtn:hover {
  opacity: 1;
}
</style>
