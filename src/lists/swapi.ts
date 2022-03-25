import type { module } from 'vue'

import axios from 'axios'

import { Notyf } from 'notyf';
var notyf = new Notyf();


const swapi = {

    getPeople: async (apipath: string = ''): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            await axios
                .get(apipath)
                .then((response: any) => {
                    resolve(response.data)
                })
                .catch((error: any) => {
                    notyf.error("Network Error")
                    reject(error)
                })
        })
    },


}

export default swapi
