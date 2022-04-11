import { createStore } from "vuex";

export default createStore({
  state: {
    isOpen: false,
    currentProjectIndex: 0,
    projectCards: [
      {
        img: "/Soulful.png",
        type: "branding",
        title: "Soulful Rebrand",
      },
      {
        img: "/Datadash.png",
        type: "Product Design",
        title: "Datadash Product design",
      },
      {
        img: "/Maize.jpg",
        type: "Web Design",
        title: "Maize Website Design",
      },
      {
        img: "/Maize.jpg",
        type: "Web Design",
        title: "Maize Website Design",
      },
    ],
  },
  getters: {
    currentProjectIndex: (state) => {
      return state.currentProjectIndex;
    },
    projectCards: (state) => {
      return state.projectCards;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
