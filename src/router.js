const routers = [ 
    {
        path: '/login',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/login.vue'], resolve)
    },
    {
        path: '/login/:status',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/login.vue'], resolve)
    },
     
    {
        path: '/sample/printcode/:id',
        meta: {
            title: '打印二维码',
            requireAuth: false,
        },
        component: (resolve) => require(['./views/print/print.vue'], resolve)
    },

    {
        path: '/',
        meta: {
            title: '',
        },
        component: (resolve) => require(['./views/layout.vue'], resolve),
        children: [
            {
                path: '/',
                meta: {
                    title: '样衣管理',
                    requireAuth: true,
                },
                component: (resolve) => require(['./views/sample/findSample.vue'], resolve)
            },

            {
                path: '/sample/findSample/',
                meta: {
                    title: '样衣信息',
                    requireAuth: true,
                },
                component: (resolve) => require(['./views/sample/findSample.vue'], resolve)
            },
            {
                path: '/sample/mySample',
                meta: {
                    title: '我的样衣',
                    requireAuth: true,
                },
                component: (resolve) => require(['./views/sample/mySample.vue'], resolve)
            },
            
            {
                path: '/sample/newSample',
                meta: {
                    title: '样衣录入',
                    requireAuth: true,
                },
                component: (resolve) => require(['./views/sample/addSample.vue'], resolve)
            },

            {
                path: '/sample/editSample/:id',
                meta: {
                    title: '样衣编辑',
                    requireAuth: true,
                },
                component: (resolve) => require(['./views/sample/addSample.vue'], resolve)
            },

          
            {
                path: '/samplemange/inOutmange',
                meta: {
                    title: '入库管理',
                    requireAuth: true,
                },
                component: (resolve) => require(['./views/samplemange/inOutmange.vue'], resolve)
            },
            {
                path: '/samplemange/LendMange',
                meta: {
                    title: '借样管理',
                    requireAuth: true,
                },
                component: (resolve) => require(['./views/samplemange/LendMange.vue'], resolve)
            },
            {
                path: '/samplemange/Setting',
                meta: {
                    title: '系统设置',
                    requireAuth: true,
                },
                component: (resolve) => require(['./views/samplemange/Setting.vue'], resolve)
            }
        ]

    },

];
export default routers;