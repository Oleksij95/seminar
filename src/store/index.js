import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedTheme: "",
    accordions: [
      {
          accordion_id: 1,
          accordion_name: "ВІДЕО",
          type: "filter",
          icon: "video.svg",
          accordion_filters: [
              {
                  id: "1",
                  name: "Акція",
                  value: "sale",
                  quantity: "4"
              },
              {
                  id: "2",
                  name: "Популярнi",
                  quantity: "6",
                  value: "popular"
              },
              {
                  id: "3",
                  name: "Новинки",
                  quantity: "8",
                  value: "new"
              }
          ]
      },
      {
          accordion_id: 2,
          accordion_name: "теми",
          type: "links",
          icon: "list.svg",
          accordion_filters: [
              {
                  id: "4",
                  name: "Всі теми",
                  quantity: "18",
                  theme: "all"
              },
              {
                  id: "5",
                  name: "Акцизний податок",
                  quantity: "5",
                  theme: "excise_tax",
              },
              {
                  id: "6",
                  name: "Валюта",
                  quantity: "4",
                  theme: "currency",
              },
              {
                  id: "7",
                  name: "Виробництво і собівартість",
                  quantity: "3",
                  theme: "production",
              },
              {
                  id: "8",
                  name: "Відпустки",
                  quantity: "2",
                  theme: "vacation",
              },
              {
                  id: "9",
                  name: "Відрядження",
                  quantity: "4",
                  theme: "business_trips",
              }
          ]
      }
    ],
    videos: null,
    filteredVideoList: null,
    viewType: "4",
    selectedFilter: [],
    showMobileMenu: false,
    dateFilter: false
  },

  mutations: {

    setSelectedTheme(state, theme){
      state.selectedTheme = theme
    },

    setVideoList(state, videos){
      state.videos = videos
      state.filteredVideoList = videos
    },

    setFilteredItem(state, videoList){
      state.filteredVideoList = videoList
    },

    setViewType(state, viewType){
      state.viewType = viewType
    },

    addSelectFilter(state, filter){
      state.selectedFilter.push(filter)
    },

    removeSelectFilter(state, filter){
      if ( state.selectedFilter.indexOf(filter) > -1 ) {
        state.selectedFilter.splice(state.selectedFilter.indexOf(filter), 1)
      }
    },
    
    toggleMobileMenu(state, status){
      state.showMobileMenu = status
    },

    setDateFilter(state, value){
      state.dateFilter = value
    }

  },

  actions: {
    setSelectedTheme({commit}, theme){
      commit('setSelectedTheme', theme)
    },

    getVideoList({commit}){
      fetch('https://storage.7eminar.ua/content/test_task_front/data.json')
        .then((response) => {
        return response.json();
      }).then((data) => {
        commit('setVideoList', data)
      })
    },

    getFilteredItem({commit}, videoList){
      commit('setFilteredItem', videoList)
    },

    getViewType({commit}, viewType){
      commit('setViewType', viewType)
    },

    addSelectFilter({commit}, filter){
      commit('addSelectFilter', filter)
    },

    removeSelectFilter({commit}, filter){
      commit('removeSelectFilter', filter)
    },

    toggleMobileMenu({commit}, status){
      commit('toggleMobileMenu', status)
    },

    setDateFilter({commit}, value){
      commit('setDateFilter', value)
    }


  },

  getters: {
    ACCORDIONS: s => s.accordions,
    VIDEOS: s => s.videos,
    selectedTheme: s => s.selectedTheme,
    filteredVideoList: s => s.filteredVideoList,
    viewType: s => s.viewType,
    selectedFilter: s => s.selectedFilter,
    showMobileMenu: s => s.showMobileMenu,
    dateFilter: s => s.dateFilter
  }

})
