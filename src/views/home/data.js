export const menus = [
    {
        route: '/home/my-scientific',     //我的科研
        login: true,
        icon: 'desktop',
        text: '我的科研',
        childs: [
            {
                route: '/home/my-scientific/add',
                icon: 'folder-add',
                text: '项目申报'
            },
            {
                route: '/home/my-scientific/achievements',
                icon: '',
                text: '我的成果'
            },
            {
                route: '/home/my-scientific/financialAudit',
                icon: '',
                text: '财务审核'
            },
            {
                route: '/home/my-scientific/expertsAudits',
                icon: '',
                text: '专家审核'
            },
            {
                route: '/home/my-scientific/management',
                icon: '',
                text: '科研管理'
            },
            {
                route: '/home/my-scientific/paperWorks',
                icon: 'book',
                text: '论文论著'
            },
            {
                route: '/home/my-scientific/project',
                icon: 'project',
                text: '科研项目'
            },
        ]
    },
    {
        route: '/home/map-chart',     //数据图表
        icon: 'area-chart',
        text: '数据图表',
        childs: [
            {
                route: '/home/map-chart/result',
                icon: 'folder-add',
                text: '专利成果'
            },
            {
                route: '/home/map-chart/reimbursement',
                icon: '',
                text: '项目报账'
            },
            {
                route: '/home/map-chart/budget',
                icon: '',
                text: '项目预算'
            },
        ]
    },
    {
        route: '/home/setting',     //系统设置
        icon: 'setting',
        text: '后台设置',
    },
]