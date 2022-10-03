<template>
  <div class="py-5 px-8">
    <div v-if="loading" class="flex justify-center">Loading...</div>
    <from @submit.prevent="submitSurvey" v-else class="container mx-auto">
      <div class="grid grid-cols-6 items-center">
        <div class="mr-4">
          <img :src="survey.image_url" alt="" />
        </div>
        <div class="col-span-5">
          <h1 class="text-3x1 mb-3">{{ survey.title }}</h1>
          <p class="text-gray-500 text-sm" v-html="survey.description"></p>
        </div>
      </div>

      <div 
        v-if="SurveyFinished"
        class="py-8 px-8 bg-emerald-400 text-white w-[600px] mx-auto"
      >
        <div class="text-xl mb-3 font-semibold">
          Thank you for participating in this survey.
        </div>
        <button
          @click="submitAnotherResponse"
          type="button"
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit another response
        </button>

      </div>
      <div v-else>
        <hr class="my-3" />
        <div v-for="(question, ind) of survey.questions" :key="question.id">
          <QuestionViewer
           v-model="answers[question.id]"
           :question="question"
           :index="ind"
           />1
        </div>

        <button
          type="submit"
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </from>
  </div>
</template>

<script setup></script>

<style></style>