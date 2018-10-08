<template>
  <div
    class="currency-container currency"
    v-loading="isLoading"
  >
    <control :val.sync="current" />
    <control
      :val.sync="target"
      :readonly="true"
    />

    <footer class="currency__footer">
      <el-button
        type="primary"
        @click="onSubmit"
        :disabled="!current.count"
      >
        Get
      </el-button>
      <el-button type="primary" plain @click="onSwitch">Switch</el-button>
      <el-button type="danger" @click="onClear">Clear</el-button>
    </footer>
  </div>
</template>

<script>
import Control from './Control'
import { API } from '../api'

export default {
  data: () => ({
    current: { count: null, currency: 'UAH' },
    target: { count: null, currency: 'UAH' },
    isLoading: false,
  }),
  methods: {
    onSubmit() {
      this.getCurrency(this.current.currency, this.target.currency)
    },
    onSwitch() {
      const temp = this.target.currency
      this.target.currency = this.current.currency
      this.current.currency = temp
      this.getCurrency(this.current.currency, this.target.currency)
    },
    onClear() {
      this.current.count = 0
      this.target.count = 0
    },
    calculate(from, to, data) {
      const { val } = data[`${from}_${to}`]
      this.target.count = val * this.current.count
    },
    getCurrency(from, to) {
      this.isLoading = true
      API.getCurrency(from, to)
        .then(r => r.json())
        .then(data => {
          this.calculate(from, to, data)
          this.isLoading = false
        })
    },
  },
  components: {
    Control,
  },
}
</script>

<style scoped>
.currency-container {
  border-radius: 20px;
  box-shadow: 0 0px 25px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 420px;
  overflow: hidden;
}
.currency__footer {
  display: flex;
  align-items: center;
}
</style>
