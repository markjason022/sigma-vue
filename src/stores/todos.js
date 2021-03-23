const apiUrl = `https://todos-ictu.herokuapp.com/api`
import axios from 'axios'

import route from '../library/route'

import { useRouter } from 'vue-router'


const router = useRouter()

const GET_TODOS = `${apiUrl}/todos`
const getTodos = () => {
    return axios.get(GET_TODOS)
}

const todo = {
    id: 0,
    name: null,
    description: null,
}

const todos = []

const state = () => {
    return {
        todo,
        todos,
    }
}

const mutations = {
    INIT(state) {
        state.todo = todo
        state.todos = todos
    },
    TODO(state, payload) {
        state.todo = payload
    },
    TODOS(state, payload) {
        state.todos = payload
    }
}

const actions = {

    INIT({commit}) {
        commit('INIT')
    },

    async GET_TODOS({dispatch}, payload) {

        try {
            const { data: { data: { data } } } = await getTodos()
            dispatch('GET_TODOS_SUCCESS', data)
        } catch(error) {
            dispatch('GET_TODOS_ERROR', error)
        }
    },
    GET_TODOS_SUCCESS({commit}, payload) {
        commit('TODOS', payload)
    },
    GET_TODOS_ERROR({commit}, error) {

    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}