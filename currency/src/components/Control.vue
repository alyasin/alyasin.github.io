<template>
  <div class="currency__item">
    <div class="currency__textfield">
      <el-input
        placeholder="Please input"
        :value="val.count"
        :readonly="readonly"
        @keyup.native="setCount($event)"
      />
    </div>
    <div class="currency__dropdown">
      <el-select
        placeholder="Select"
        v-model="val.currency"
        @change="setCurrency($event)">
        <el-option
          v-for="currency in currencies"
          :key="currency.value"
          :label="currency.label"
          :value="currency.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  props: ['readonly', 'val'],
  data: () => ({
    currencies: [
      { label: 'USD', value: 'USD' },
      { label: 'UAH', value: 'UAH' },
      { label: 'EUR', value: 'EUR' },
    ],
    currency: 'UAH',
  }),
  methods: {
    setCount({ target }) {
      this.$emit('update:val', {
        ...this.val,
        count: target.value,
      })
    },
    setCurrency(val) {
      this.currency = val
      this.$emit('update:val', {
        ...this.val,
        currency: val,
      })
    },
  },
}
</script>


<style scoped>
.currency__item {
  display: flex;
  margin-bottom: 10px;
}

.currency__textfield {
  flex: 1 0;
}

.currency__dropdown {
  width: 100px;
  margin-left: 10px;
}
</style>
