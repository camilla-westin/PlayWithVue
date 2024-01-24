<script setup>
import { ref, computed } from "vue";

let playerTurn = ref("X");
const changeTurn = () => {
  if (playerTurn.value === "X") {
    playerTurn.value = "O";
  } else {
    playerTurn.value = "X";
  }
};

let cellValues = ref(Array(9).fill(null));

const checkForWin = () => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      cellValues.value[a] &&
      cellValues.value[a] === cellValues.value[b] &&
      cellValues.value[a] === cellValues.value[c]
    ) {
      return cellValues.value[a];
    }
  }
  return null;
};

const chosenCell = (index) => {
  if (cellValues.value[index] === null) {
    cellValues.value[index] = playerTurn.value;
    checkForWin();
    changeTurn();
  }
};

let winner = computed(() => checkForWin());
</script>

<template>
  <div class="tic-tac-toe bg-pink-50 p-8">
    <div>
      <h2 class="text-3xl pb-8">Tic Tac Toe</h2>
      <h3 class="text-xl pb-4">
        <span v-if="winner">Player {{ winner }} wins!</span>
        <span v-else-if="playerTurn == 'X'">Player X's turn!</span>
        <span v-else-if="playerTurn == 'O'">Player O's turn!</span>
      </h3>
      <div class="board bg-slate-100 flex flex-wrap">
        <div
          class="cell"
          @click="cellValues[index] === null ? chosenCell(index) : null"
          v-for="(cell, index) in 9"
          :key="index"
        >
          <span v-if="cellValues[index] == 'X'">X</span>
          <span v-else-if="cellValues[index] == 'O'">O</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.board {
  width: 400px;
  height: 400px;
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
