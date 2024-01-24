<script setup>
import { ref } from "vue";

let playerTurn = ref("1");
const changeTurn = () => {
  if (playerTurn.value === "1") {
    playerTurn.value = "2";
  } else {
    playerTurn.value = "1";
  }
};

let cellValues = ref(Array(9).fill(null));
const chosenCell = (index) => {
  if (cellValues.value[index] === null) {
    cellValues.value[index] = playerTurn.value;
    changeTurn();
  }
};
</script>

<template>
  <div class="tic-tac-toe">
    <div class="board">
      <div
        class="cell"
        @click="chosenCell(index)"
        :disabled="cellValues[index] !== null"
        v-for="(cell, index) in 9"
        :key="index"
      >
        <span v-if="cellValues[index] == 1">X</span>
        <span v-else-if="cellValues[index] == 2">O</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.board {
  background: #f8f8f8;
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  height: 400px;
}

.row {
  display: flex;
}
.cell {
  height: 133px;
  width: 133px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
}
.cell:hover {
  background: lightpink;
  cursor: pointer;
}
</style>
