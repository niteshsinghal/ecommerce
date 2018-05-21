import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '', title: 'Dashboards', icon: 'mdi mdi-gauge', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/dashboard/modern', title: 'Modern', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/dashboard/classic', title: 'Classic', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/dashboard/analytical', title: 'Analytical', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Apps', icon: 'mdi mdi-apps', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/apps/email', title: 'Mailbox', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/apps/fullcalendar', title: 'Calendar', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/apps/taskboard', title: 'Taskboard', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Component', icon: 'mdi mdi-bullseye', class: 'has-arrow two-column', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/component/accordion', title: 'Accordion', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/alert', title: 'Alert', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/carousel', title: 'Carousel', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/dropdown', title: 'Dropdown', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/modal', title: 'Modal', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/pagination', title: 'Pagination', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/poptool', title: 'Popover & Tooltip', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/progressbar', title: 'Progressbar', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/rating', title: 'Ratings', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/tabs', title: 'Tabs', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/timepicker', title: 'Timepicker', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/buttons', title: 'Button', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/cards', title: 'Card', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/extra-component/toastr', title: 'Basic Forms', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/extra-component/upload', title: 'File Upload', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/extra-component/editor', title: 'Editor', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/extra-component/dragndrop', title: 'Datepicker', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Extra', icon: 'mdi mdi-widgets', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            {
                path: '/widgets', title: 'Widgets', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: []
            },
            {
                path: '', title: 'Forms', icon: '', class: 'has-arrow', label: '', labelClass: '', extralink: false,
                submenu: [
                    { path: '/forms/basicform', title: 'Basic Forms', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: '/forms/formvalidation', title: 'Form Validation', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: '/component/typehead', title: 'Form Typehead', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: '/component/datepicker', title: 'Datepicker', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    
                ]
            },
            {
                path: '', title: 'Tables', icon: '', class: 'has-arrow', label: '', labelClass: '', extralink: false,
                submenu: [
                    { path: '/tables/basictable', title: 'Basic Tables', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: '/tables/smarttable', title: 'Smart Tables', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: '/tables/datatable', title: 'Data Tables', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                ]
            },
            {
                path: '', title: 'Charts', icon: '', class: 'has-arrow', label: '', labelClass: '', extralink: false,
                submenu: [
                    { path: '/charts/chartjs', title: 'Chart Js', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: '/charts/chartistjs', title: 'Chartist Js', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    
                ]
            },
            {
                path: '', title: 'Icons', icon: '', class: 'has-arrow', label: '', labelClass: '', extralink: false,
                submenu: [
                    { path: '/icons/fontawesome', title: 'Fontawesome', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: '/icons/simpleline', title: 'Simple Line Icons', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: '/icons/material', title: 'Material Icons', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                ]
            },
            
        ]
    },
    {
        path: '', title: 'Pages', icon: 'mdi mdi-file', class: '', label: '', labelClass: '', extralink: false,
        submenu: [
            {
                path: '', title: 'Authentication', icon: '', class: 'has-arrow', label: '', labelClass: '', extralink: false,
                submenu: [
                    { path: '/authentication/login', title: 'Login', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: '/authentication/signup', title: 'Register', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: '/authentication/404', title: '404', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                ]
            },
            { path: '/sample-pages/timeline', title: 'Timeline', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/sample-pages/profile', title: 'Profile', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/sample-pages/pricing', title: 'Pricing', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/sample-pages/invoice', title: 'Invoice', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/sample-pages/helperclasses', title: 'Helper Classes', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/starter', title: 'Starter Page', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    }
     
];

