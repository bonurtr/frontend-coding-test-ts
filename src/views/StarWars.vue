<template>
    <div class="flex w-full min-h-screen">
        <div class="bg-white block overflow-y-auto w-[19rem]">
            <MyLoader size="large" :active="isLoading">
                <nav id="nav" class="lg:text-sm lg:leading-6">
                    <ul>
                        <li class="mt-5 text-left ml-6">
                            <h5 class="mb-8 lg:mb-3 font-semibold text-slate-90">People</h5>
                            <ul class="space-y-6 lg:space-y-2 border-l border-slate-100">
                                <li v-for="(item, index) in starWarsPeopleList" :key="index">
                                    <a
                                        @click="selectedPerson = item"
                                        class="block border-l pl-4 -ml-px border-transparent hover:border-slate-700 text-slate-700 hover:text-slate-900"
                                        href="#"
                                        :class="[
                                            selectedPerson == item && ' hover:border-red-200 border-red-600 border-l-2',
                                            ,
                                        ]"
                                    >{{ item.name }}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div class="sticky top-0 -ml-0.5 pointer-events-none">
                        <div class="h-5 bg-white"></div>
                        <div class="bg-white relative pointer-events-auto p-4 flex justify-between">
                            <button
                                @click="prevLink"
                                :disabled="prevLinkto == null"
                                type="button"
                                class="h-10 text-white ml-3 rounded-md px-4"
                                :class="[
                                    prevLinkto == null && 'bg-slate-100',
                                    'bg-slate-700',
                                ]"
                            >Prev</button>

                            <button
                                @click="nextLink"
                                :disabled="nextLinkto == null"
                                type="button"
                                class="h-10 text-white ml-3 rounded-md px-4"
                                :class="[
                                    nextLinkto == null && 'bg-slate-100',
                                    'bg-slate-700',
                                ]"
                            >Next</button>
                        </div>
                    </div>
                </nav>
            </MyLoader>

            <div class="mt-16">
                <p class="font-light text-gray-800">Gets data from SWAPI (StarWars API)</p>
                <a
                    class="font-light text-pink-600 mt-4"
                    target="_blank"
                    href="https://swapi.dev/"
                >Check here</a>
            </div>
        </div>
        <div class="w-full">
            <MyLoader
                size="large"
                :active="isLoading"
                :grey="true"
                class="px-20 pt-5 text-left w-full h-full"
            >
                <div class="px-20 pt-5 text-left w-full h-full" v-if="selectedPerson.name != null">
                    <div class="w-full border-b-2 border-slate-300 pb-2 mb-5 flex justify-between">
                        <h1
                            class="font-extrabold text-3xl text-slate-700 capitalize"
                        >{{ selectedPerson.name }}</h1>
                    </div>
                    <div class="flex">
                        <h1 class="font-extrabold text-xl text-slate-600">Birth Year :</h1>

                        <h1
                            class="font-bold text-xl text-slate-500 ml-3 capitalize"
                        >{{ selectedPerson.birth_year }}</h1>
                    </div>

                    <div class="flex">
                        <h1 class="font-extrabold text-xl text-slate-600">Eye Color :</h1>

                        <h1
                            class="font-bold text-xl text-slate-500 ml-3 capitalize"
                        >{{ selectedPerson.eye_color }}</h1>
                    </div>

                    <div class="flex">
                        <h1 class="font-extrabold text-xl text-slate-600">Gender :</h1>

                        <h1
                            class="font-bold text-xl text-slate-500 ml-3 capitalize"
                        >{{ selectedPerson.gender }}</h1>
                    </div>

                    <div class="flex">
                        <h1 class="font-extrabold text-xl text-slate-600">Hair Color :</h1>

                        <h1
                            class="font-bold text-xl text-slate-500 ml-3 capitalize"
                        >{{ selectedPerson.hair_color }}</h1>
                    </div>

                    <div class="flex">
                        <h1 class="font-extrabold text-xl text-slate-600">Height :</h1>

                        <h1
                            class="font-bold text-xl text-slate-500 ml-3 capitalize"
                        >{{ selectedPerson.height }}</h1>
                    </div>

                    <div class="flex">
                        <h1 class="font-extrabold text-xl text-slate-600">Mass :</h1>

                        <h1
                            class="font-bold text-xl text-slate-500 ml-3 capitalize"
                        >{{ selectedPerson.mass }}</h1>
                    </div>

                    <div class="flex">
                        <h1 class="font-extrabold text-xl text-slate-600">Skin Color :</h1>

                        <h1
                            class="font-bold text-xl text-slate-500 ml-3 capitalize"
                        >{{ selectedPerson.skin_color }}</h1>
                    </div>

                    <div class="flex">
                        <h1 class="font-extrabold text-xl text-slate-600">Skin Color :</h1>

                        <h1
                            class="font-bold text-xl text-slate-500 ml-3 capitalize"
                        >{{ selectedPerson.skin_color }}</h1>
                    </div>
                </div>
            </MyLoader>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'

import swapi from '../lists/swapi'

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
const isLoading = ref(false);

import MyLoader from '../components/partial/MyLoader.vue'


const notyf = new Notyf({
    position: {
        x: 'right',
        y: 'top',
    },
    types: [
        {
            type: 'warning',
            background: 'orange',
            duration: 2000,
            icon: {
                className: 'material-icons',
                tagName: 'i',
                text: 'warning'
            }
        },
        {
            type: 'error',
            background: 'indianred',
            duration: 2000,
            dismissible: true
        },
        {
            type: 'success',
            background: 'green',
            duration: 2000,
            icon: {
                className: 'material-icons',
                tagName: 'i',
                text: 'check'
            }
        },
    ]
});


const selectedPerson = ref([])
const starWarsPeopleList = ref(null)
const prevLinkto = ref(null)
const nextLinkto = ref(null)

const prevLink = async () => {


    if (prevLinkto.value != null) {
        isLoading.value = true
        notyf.open({
            type: 'warning',
            message: 'Starting to fecth previous page '
        });
        let people = await swapi.getPeople(prevLinkto.value)
        starWarsPeopleList.value = people.results
        prevLinkto.value = people.previous
        nextLinkto.value = people.next

        notyf.open({
            type: 'success',
            message: 'Previous page fetched successfully'
        });
        selectedPerson.value = []
        isLoading.value = false

    }

}

const nextLink = async () => {

    if (nextLinkto.value != null) {
        isLoading.value = true
        notyf.open({
            type: 'warning',
            message: 'Starting to fecth next page '
        });

        let people = await swapi.getPeople(nextLinkto.value)
        starWarsPeopleList.value = people.results
        prevLinkto.value = people.previous
        nextLinkto.value = people.next

        notyf.open({
            type: 'success',
            message: 'Next page fetched successfully'
        });
        selectedPerson.value = []
        isLoading.value = false
    }

}


onMounted(async () => {
    isLoading.value = true
    let apipath = "https://swapi.dev/api/people"
    let people = await swapi.getPeople(apipath)


    starWarsPeopleList.value = people.results
    prevLinkto.value = people.previous
    nextLinkto.value = people.next

    notyf.open({
        type: 'success',
        message: 'First page fetched successfully'
    });
    isLoading.value = false

})
</script>