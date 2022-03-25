<template>
  <div class="justify-center max-w-md mt-10">
    <button
      fill
      large
      class="mt-10 bg-pink-600 shadow-pink-300/40 shadow-xl rounded-xl p-6 text-white text-xl font-semibold"
      @click="getUselessFact"
      id="fetchbutton"
    >Show me a useless fact</button>
    <div class="flex justify-center max-w-md mt-10 align-middle" v-if="UselessFact != null">
      <h1 class="font-extrabold text-6xl text-gray-600 mt-0 mb-auto font-serif">"</h1>
      <h1 class="font-normal text-3xl text-gray-400">{{ UselessFact }}</h1>
      <h1 class="font-extrabold text-6xl text-gray-600 mt-0 mb-auto font-serif">"</h1>
    </div>
    <div class="mt-16">
      <p class="font-thin text-gray-800">Gets data from Random Useless Facts</p>
      <a
        class="font-thin text-pink-600 mt-4"
        target="_blank"
        href="https://uselessfacts.jsph.pl/"
      >Check here</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'



import axios from 'axios'

import { Notyf } from 'notyf';
var notyf = new Notyf();

const message = ref('')

const uselessfacts = {
  getUselessFact: async (options: any = {}): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      await axios
        .get('https://uselessfacts.jsph.pl/random.json?language=en')
        .then((response: any) => {
          message.value = "SUCCESS"
          resolve(response.data)

        })
        .catch((error: any) => {
          notyf.error("Network Error")
          message.value = "ERROR"
          reject(error)
        })
    })
  },


}

const UselessFact = ref(null)
const getUselessFact = async () => {
  message.value = "SUCCESS"
  let getUselessFact = await uselessfacts.getUselessFact()
  UselessFact.value = getUselessFact.text

}

</script>