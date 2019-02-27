import {
    Home,
    Login,

    Achievements,
    AddProject,
    ExpertsAudits,
    ScientificManagement,
    ScResearchProject,
    PaperWorks,
    FinancialAudit,
    Myscientific,

    MapChart,
    Budget,
    Patentresults,
    Reimbursement,

    SettingSys


} from 'view'
// import { AddressBook } from '../views/address-book';
// import { Quote } from '../views/quote';
// import { ReportForms } from '../views/report-forms';


const routes = [
    {
        path: '/home',
        component: Home,
        routes: [
            {
                path: '/home/my-scientific',     //我的科研
                component: Myscientific,
                routes: [
                    {
                        path: '/home/my-scientific/add',
                        component: AddProject,
                    },
                    {
                        path: '/home/my-scientific/achievements',
                        component: Achievements,
                    },
                    {
                        path: '/home/my-scientific/financialAudit',
                        component: FinancialAudit,
                    },
                    {
                        path: '/home/my-scientific/expertsAudits',
                        component: ExpertsAudits,
                    },
                    {
                        path: '/home/my-scientific/management',
                        component: ScientificManagement,
                    },
                    {
                        path: '/home/my-scientific/paperWorks',
                        component: PaperWorks,
                    },
                    {
                        path: '/home/my-scientific/project',
                        component: ScResearchProject,
                    },
                ]
            },
            {
                path: '/home/map-chart',     //数据图表
                component: MapChart,
                routes: [
                    {
                        path: '/home/map-chart/result',
                        component: Patentresults,
                    },
                    {
                        path: '/home/map-chart/reimbursement',
                        component: Reimbursement,
                    },
                    {
                        path: '/home/map-chart/budget',
                        component: Budget,
                    },
                ]
            },
            {
                path: '/home/setting',     //系统设置
                component: SettingSys,
            },

        ]
    },
    {
        path: '/',     //用户登录
        component: Login,
    }
]

export default routes