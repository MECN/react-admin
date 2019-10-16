const menuList = [
    {
        title: '首页',
        key: '/home'
    },
    {
        title: '商品管理',
        key: '/product',
        children: [
            {
                title: '商品分类',
                key: '/product/category',
            },
            {
                title: '商品列表',
                key: '/product/product',
            },
            
        ]
    },
    {
        title: '用户管理',
        key: '/user',
        
    },
    {
        title: '角色管理',
        key: '/role',
    },
    {
        title: '图形图表',
        key: '/charts',
        children:[
            {
                title: '柱形图',
                key: '/charts/bar',
            },
            {
                title: '折线图',
                key: '/charts/line',
            },
            {
                title: '饼图',
                key: '/charts/pie',
            },

        ]
    },
    // {
    //     title: '城市管理',
    //     key: '/city'
    // },
    // {
    //     title: '订单管理',
    //     key: '/order',
    //     btnList: [
    //         {
    //             title: '订单详情',
    //             key: 'detail'
    //         },
    //         {
    //             title: '结束订单',
    //             key: 'finish'
    //         }
    //     ]
    // },
    // {
    //     title: '员工管理',
    //     key: '/user'
    // },
    // {
    //     title: '车辆地图',
    //     key: '/bikeMap'
    // },
    // {
    //     title: '图标',
    //     key: '/charts',
    //     children: [
    //         {
    //             title: '柱形图',
    //             key: '/charts/bar'
    //         },
    //         {
    //             title: '饼图',
    //             key: '/charts/pie'
    //         },
    //         {
    //             title: '折线图',
    //             key: '/charts/line'
    //         },
    //     ]
    // },
    // {
    //     title: '权限设置',
    //     key: '/permission'
    // },
];
export default menuList;