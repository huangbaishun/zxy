const routes = [
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/home.vue'),
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import(/* webpackChunkName: "home" */ '@/views/index/index.vue'),
      },
      {
        path: 'hot',
        name: 'hot',
        component: () => import(/* webpackChunkName: "home" */ '@/views/information/hot.vue'),
      },
      {
        path: 'notice',
        name: 'notice',
        component: () => import(/* webpackChunkName: "home" */ '@/views/information/notice.vue'),
      },
      {
        path: 'preparation',
        name: 'preparation',
        component: () => import(/* webpackChunkName: "home" */ '@/views/information/preparation.vue'),
      },
      {
        path: 'plan',
        name: 'plan',
        component: () => import(/* webpackChunkName: "home" */ '@/views/information/plan.vue'),
      },
      {
        path: 'universities',
        name: 'universities',
        component: () => import(/* webpackChunkName: "home" */ '@/views/information/universities.vue'),
      },
      {
        path: 'major',
        name: 'major',
        component: () => import(/* webpackChunkName: "home" */ '@/views/information/major.vue'),
      },
      {
        path: 'tutorialClass',
        name: 'tutorialClass',
        component: () => import(/* webpackChunkName: "home" */ '@/views/tutorialClass/index.vue'),
        meta: {
          title: '辅导课堂'
        }
      },
      {
        path: 'testCenter',
        name: 'testCenter',
        component: () => import(/* webpackChunkName: "home" */ '@/views/testCenter/index.vue'),
        meta: {
          title: '试题中心'
        }
      },
      {
        path: 'aboutUs',
        name: 'aboutUs',
        component: () => import(/* webpackChunkName: "home" */ '@/views/aboutUs/index.vue'),
        meta: {
          title: '关于我们'
        }
      }
    ]
  },
  {
    path: '/admin',
    component: () => import(/* webpackChunkName: "admin" */ '@/views/admin/admin.vue'),
    children: [
      {
        path: 'admintest',
        name: 'admintest',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/admin/test.vue'),
      },
      {
        path: 'adminaddtest',
        name: 'adminaddtest',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/admin/adminaddtest.vue'),
      },
      {
        path: 'adminpaln',
        name: 'adminpaln',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/adminpaln/index.vue'),
      },
      {
        path: 'adminAddPaln',
        name: 'adminAddPaln',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/adminpaln/adminAddPaln.vue'),
      },
      {
        path: 'adminuniversities',
        name: 'adminuniversities',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/adminuniversities/index.vue'),
      },
      {
        path: 'adminAddUniversities',
        name: 'adminAddUniversities',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/adminuniversities/adminAddUniversities.vue'),
      },
      {
        path: 'adminmajor',
        name: 'adminmajor',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/adminmajor/index.vue'),
      },
      {
        path: 'adminAddMajor',
        name: 'adminAddMajor',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/adminmajor/adminAddMajor.vue'),
      },
      {
        path: 'admincar',
        name: 'admincar',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/admincar/index.vue'),
      },
      {
        path: 'adminAddCcar',
        name: 'adminAddCcar',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/admincar/adminAddCcar.vue'),
      },
      {
        path: 'adminmajortest',
        name: 'adminmajortest',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/adminmajortest/index.vue'),
      },
      {
        path: 'specializedTraining',
        name: 'specializedTraining',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/specializedTraining/index.vue'),
      },
      {
        path: 'addspecializedTraining',
        name: 'addspecializedTraining',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/specializedTraining/addSpecialiZedtraining.vue'),
      },


      {
        path: 'themeYear',
        name: 'themeYear',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/themeYear/index.vue'),
      },
      {
        path: 'addthemeYear',
        name: 'addthemeYear',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/themeYear/addthemeYear.vue'),
      },
      {
        path: 'simulationTest',
        name: 'simulationTest',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/simulationTest/index.vue'),
      },
      {
        path: 'addsimulationTest',
        name: 'addsimulationTest',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/simulationTest/addsimulationTest.vue'),
      },
      {
        path: 'examination',
        name: 'examination',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/examination/index.vue'),
      },
      {
        path: 'addexamination',
        name: 'addexamination',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/examination/addexamination.vue'),
      }
    ]
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "admin" */ '@/views/login/index.vue'),
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "home" */ '@/notFound.vue')
  }
]
export default routes;