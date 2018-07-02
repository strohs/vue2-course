<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 m-auto">
        <h1 class="text-center">The Super Quiz</h1>
        <hr>

        <transition
          name="flip"
          mode="out-in">
          <!-- we are explicitly overriding Vue's default classes and specifying our third party library -->
          <!-- can also use v-show  to do animations -->
          <!-- appear attribute causes animation to trigger when page loads -->
          <div v-if="!showResult" key="showQuestion">
            <div class="card text-center">
              <div class="card-header">
                <span class="font-weight-bold">What is {{ question.x }} + {{ question.y }}?</span>
              </div>

              <div class="card-body">
                <div class="row">
                  <!-- answer buttons are components -->
                  <div class="col-md-6" v-for="(answer,index) in randomAnswers">
                    <app-answer-button :value="answer" @answerSent="answerSelected($event)"></app-answer-button>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div v-if="showResult" key="showResult">
            <div :class="[correctAnswer ? 'alert-success' : 'alert-danger', 'card','text-center']">
              <div class="card-header">
                <span class="font-weight-bold" v-if="correctAnswer">Correct!!</span>
                <span class="font-weight-bold" v-else>Wrong Answer</span>
              </div>

              <div class="card-body">
                <div class="row">
                  <!-- answer buttons are components -->
                  <div class="col">
                    <span v-if="correctAnswer">{{ question.x }} + {{ question.y }} is indeed {{ question.answer}}</span>
                    <span v-else> {{ question.x }} + {{ question.y }} is {{ question.answer}}</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col mt-4">
                    <div class="btn btn-primary m-auto" @click="initializeQuestions">Next Question</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>

      </div>
    </div>
  </div>
</template>

<script>
  import AnswerButton from './components/AnswerButton.vue';

  export default {

    data() {
      return {
        questions: [],
        question: {x: 0, y: 0, answer: 0},
        randomAnswers: [],
        selectedAnswer: -999,
        showResult: false
      }
    },
    methods: {
      answerSelected( event ) {
        this.selectedAnswer = event;
        this.showResult = true;
      },
      initializeQuestions() {
        //generate random questions
        this.questions = this.generateQuestions();
        //select a question from the random questions
        this.question = this.questions[ this.generateRandomInt( 0, 3 ) ];
        //generate random answers
        this.randomAnswers = this.generateRandomAnswers( this.question );
        this.showResult = false;
      },
      generateRandomAnswers( question ) {
        let rAnswers = [];
        const rIndex = this.generateRandomInt(0, this.questions.length - 1);
        for (let i = 0; i < this.questions.length; i++) {
          rAnswers.push( this.generateRandomInt( -50, 50) );
        }
        //set the correct answer at a random index
        rAnswers[rIndex] = question.answer;
        return rAnswers;
      },

      //helper methods
      generateRandomInt( start, end ) {
        return Math.floor(Math.random() * end) + start;
      },
      generateRandomQuestion() {
        const x = this.generateRandomInt(-50,50);
        const y = this.generateRandomInt(-50,50);
        const answer = x + y;
        return { x: x, y: y, answer:answer };
      },
      generateQuestions() {
        let quests = [];
        for (let i = 0; i < 4; i++) {
          quests.push( this.generateRandomQuestion() );
        }
        return quests;
      }
    },
    computed: {
      correctAnswer() {
        return this.selectedAnswer === this.question.answer;
      }
    },

    components: {
      appAnswerButton: AnswerButton
    },
    created() {
      this.initializeQuestions();
    }

  }
</script>

<!-- simplified styles using transitions -->
<style>
  .flip-enter-active, .flip-leave-active {
    transition: 0.3s ease-out;
  }

  .flip-enter, .flip-leave-to {
    transform: scaleX(0);
  }
</style>

<!-- original styles from the instructor -->
<!--<style>-->
  <!--.flip-enter {-->
    <!--/* handled by keyframes */-->
    <!--/*transform: rotateY(0deg);*/-->
  <!--}-->

  <!--.flip-enter-active {-->
    <!--animation: flip-in 0.5s ease-out forwards;-->
  <!--}-->

  <!--.flip-leave {-->
    <!--/* handled by keyframes */-->
    <!--/*transform: rotateY(0deg);*/-->
  <!--}-->

  <!--.flip-leave-active {-->
      <!--animation: flip-out 0.5s ease-out forwards;-->
  <!--}-->

  <!--@keyframes flip-out {-->
    <!--from {-->
      <!--transform: rotateY(0deg);-->
    <!--}-->
    <!--to {-->
      <!--transform: rotateY(90deg);-->
    <!--}-->
  <!--}-->

  <!--@keyframes flip-in {-->
    <!--from {-->
      <!--transform: rotateY(90deg);-->
    <!--}-->
    <!--to {-->
     <!--transform: rotateY(0deg);-->
    <!--}-->
  <!--}-->
<!--</style>-->
