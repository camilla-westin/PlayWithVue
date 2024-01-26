<script setup>
import { ref, watch } from "vue";
import quizData from "@/data/quiz.json";

const quiz = ref(quizData);
const selectedAnswer = ref(null);

const currentQuestionIndex = ref(0);
const questionIsAnswered = ref(false);
const isCorrectAnswer = ref(false);
const score = ref(0);
const scoreIsShown = ref(false);

const submitAnswer = () => {
  const userAnswer = selectedAnswer.value;
  const correctAnswerValue = quiz.value[currentQuestionIndex.value].correct;

  if (userAnswer === correctAnswerValue) {
    score.value++;
    isCorrectAnswer.value = true;
  } else {
    isCorrectAnswer.value = false;
  }

  questionIsAnswered.value = true;
};

const nextQuestion = () => {
  if (currentQuestionIndex.value < quiz.value.length - 1) {
    currentQuestionIndex.value++;
    selectedAnswer.value = null;
    isCorrectAnswer.value = false;
    questionIsAnswered.value = false;
  }
};

const showScore = () => {
  scoreIsShown.value = true;
};
</script>

<template>
  <VForm v-if="!scoreIsShown">
    <div v-for="(quizItem, index) in quiz">
      <div v-if="index === currentQuestionIndex">
        <h2 class="text-2xl mb-4">{{ quizItem.question }}</h2>
        <v-radio-group v-model="selectedAnswer">
          <v-radio :label="quizItem.answers[0]" value="0"></v-radio>
          <v-radio :label="quizItem.answers[1]" value="1"></v-radio>
          <v-radio :label="quizItem.answers[2]" value="2"></v-radio>
          <v-radio :label="quizItem.answers[3]" value="3"></v-radio>
        </v-radio-group>
      </div>
    </div>
    <VBtn class="mr-4" @click="submitAnswer" v-if="!questionIsAnswered"
      >Submit answer</VBtn
    >
    <div v-if="questionIsAnswered">
      <span v-if="isCorrectAnswer">Correct!</span>
      <span v-else>Incorrect!</span>
    </div>
    <VBtn @click="nextQuestion" v-if="currentQuestionIndex <= quiz.length - 2"
      >Next question</VBtn
    >
    <VBtn v-else @click="showScore">Show my result</VBtn>
  </VForm>
  <div v-else class="p-6 bg-vue-green text-center">
    <h2 class="text-3xl">Your score is: {{ score }} / {{ quiz.length }}</h2>
  </div>
</template>
