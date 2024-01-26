<script setup>
import { ref, computed } from "vue";

let _displayValue = ref(0);
const displayValue = computed(() => String(_displayValue.value));
let firstValue = ref(null);
let operator = ref(null);
let operatorClicked = ref(false);

const getValue = (value) => {
  if (operatorClicked.value || _displayValue.value === 0) {
    _displayValue.value = value;
    operatorClicked.value = false;
  } else {
    _displayValue.value = _displayValue.value * 10 + value;
  }
};

const clear = () => {
  _displayValue.value = 0;
  firstValue.value = null;
  operator.value = null;
  operatorClicked.value = false;
};

const performOperation = () => {
  if (operator.value === "+") {
    firstValue.value += _displayValue.value;
  } else if (operator.value === "-") {
    firstValue.value -= _displayValue.value;
  }
  _displayValue.value = firstValue.value;
};

const add = () => {
  if (firstValue.value !== null) {
    performOperation();
  } else {
    firstValue.value = _displayValue.value;
  }
  operator.value = "+";
  operatorClicked.value = true;
};

const subtract = () => {
  if (firstValue.value !== null) {
    performOperation();
  } else {
    firstValue.value = _displayValue.value;
  }
  operator.value = "-";
  operatorClicked.value = true;
};

const sum = () => {
  performOperation();
  firstValue.value = null;
  operator.value = null;
};
</script>

<template>
  <div class="calculator">
    <div class="display">{{ displayValue }}</div>
    <div class="top-buttons">
      <button @click="clear()">C</button>
      <button @click="divide()">/</button>
    </div>
    <div class="middle-buttons">
      <button @click="getValue(7)">7</button>
      <button @click="getValue(8)">8</button>
      <button @click="getValue(9)">9</button>
      <button @click="multiply()">*</button>
      <button @click="getValue(4)">4</button>
      <button @click="getValue(5)">5</button>
      <button @click="getValue(6)">6</button>
      <button @click="subtract()">-</button>
      <button @click="getValue(1)">1</button>
      <button @click="getValue(2)">2</button>
      <button @click="getValue(3)">3</button>
      <button @click="add()">+</button>
    </div>
    <div class="bottom-buttons">
      <button @click="getValue(0)">0</button>
      <div>
        <button>.</button>
        <button @click="sum()">=</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.calculator {
  height: 290px;
  width: 300px;
  background: #eee;
  box-shadow: 1px 1px 1px lightgrey;
  border-radius: 4px;
  padding: 22px;
  margin: 20px 0;
}

.display {
  width: 100%;
  background: #fff;
  padding: 10px;
  text-align: right;
  font-size: 20px;
}

.top-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px -5px 0 -5px;
}

.middle-buttons {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
}

.bottom-buttons {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
  justify-content: space-between;
}

.bottom-buttons > div {
  display: flex;
}

.bottom-buttons div button {
  width: 57px;
}

button {
  box-shadow: 1px 1px 1px lightgrey;
  background: #f4f4f4;
  width: calc(25% - 10px);
  height: 30px;
  margin: 5px;
}
</style>
