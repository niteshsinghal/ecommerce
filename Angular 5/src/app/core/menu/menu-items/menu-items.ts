import { Injectable } from '@angular/core';

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'dashboard',
    name: 'DASHBOARD',
    type: 'sub',
    icon: 'explore',
    children: [
      {state: 'dashboard-v1', name: 'DASHBOARD 1'},
      {state: 'dashboard-v2', name: 'DASHBOARD 2'},
    ]
  },
  {
    state: 'file-manager',
    name: 'File Manager ',
    type: 'link',
    icon: 'folder'
  },
  {
    state: 'inbox',
    name: 'INBOX',
    type: 'link',
    icon: 'mail'
  },
  {
    state: 'chat',
    name: 'CHAT',
    type: 'link',
    icon: 'chat'
  },
  {
    state: 'calendar',
    name: 'CALENDAR',
    type: 'link',
    icon: 'date_range'
  },
  {
    state: 'editor',
    name: 'EDITOR',
    type: 'sub',
    icon: 'format_shapes',
    children: [
      {state: 'wysiwyg', name: 'WYSIWYG EDITOR'},
      {state: 'ckeditor', name: 'CKEDITOR'},
    ]
  },
  {
    state: 'icons',
    name: 'MATERIAL ICONS',
    type: 'link',
    icon: 'grade'
  },
  {
    state: 'chart',
    name: 'CHARTS',
    type: 'sub',
    icon: 'show_chart',
    children: [
      {state: 'ng2-charts', name: 'NG2 CHARTS'},
      {state: 'easy-pie-chart', name: 'EASY PIE'},
    ]
  },
  {
    state: 'components',
    name: 'COMPONENTS',
    type: 'sub',
    icon: 'layers',
    children: [
      {state: 'buttons', name: 'BUTTONS'},
      {state: 'cards', name: 'CARDS'},
      {state: 'grid', name: 'GRID'},
      {state: 'list', name: 'LIST'},
      {state: 'menu', name: 'MENU'},
      {state: 'slider', name: 'SLIDER'},
      {state: 'snackbar', name: 'SNACKBAR'},
      {state: 'tooltip', name: 'TOOLTIP'},
      {state: 'dialog', name: 'DIALOG'},
      {state: 'select', name: 'SELECT'},
      {state: 'input', name: 'INPUT'},
      {state: 'checkbox', name: 'CHECKBOX'},
      {state: 'radio', name: 'RADIO'},
      {state: 'toolbar', name: 'TOOLBAR'},
      {state: 'progress', name: 'PROGRESS'},
      {state: 'tabs', name: 'TABS'},
      {state: 'colorpicker', name: 'COLORPICKER'},
      {state: 'datepicker', name: 'DATEPICKER'},
    ]
  },
  {
    state: 'dragndrop',
    name: 'DRAG & DROP',
    type: 'sub',
    icon: 'mouse',
    children: [
      {state: 'dragula', name: 'DRAGULA'},
      {state: 'sortable', name: 'SORTABLEJS'}
    ]
  },
  {
    state: 'tables',
    name: 'TABLES',
    type: 'sub',
    icon: 'format_line_spacing',
    children: [
      {state: 'fullscreen', name: 'FULLSCREEN'},
      {state: 'selection', name: 'SELECTION'},
      {state: 'pinning', name: 'PINNING'},
      {state: 'sorting', name: 'SORTING'},
      {state: 'paging', name: 'PAGING'},
      {state: 'editing', name: 'EDITING'},
      {state: 'filter', name: 'FILTER'},
      {state: 'responsive', name: 'RESPONSIVE'}
    ]
  },
  {
    state: 'forms',
    name: 'FORMS',
    type: 'sub',
    icon: 'insert_comment',
    children: [
      {state: 'form-wizard', name: 'FORM WIZARD'},
      {state: 'form-validation', name: 'FORM VALIDATION'},
      {state: 'form-upload', name: 'UPLOAD'},
      {state: 'form-tree', name: 'TREE'}
    ]
  },
  {
    state: 'maps',
    name: 'MAPS',
    type: 'sub',
    icon: 'map',
    children: [
      {state: 'googlemap', name: 'GOOGLE MAP'},
      {state: 'leafletmap', name: 'LEAFLET MAP'}
    ]
  },
  {
    state: 'pages',
    name: 'PAGES',
    type: 'sub',
    icon: 'web',
    children: [
      {state: 'media', name: 'GALLERY'},
      {state: 'pricing', name: 'PRICING'},
      {state: 'blank', name: 'BLANK'},
    ]
  },
  {
    state: 'users',
    name: 'USERS',
    type: 'sub',
    icon: 'web',
    children: [
      {state: 'userprofile', name: 'USER PROFILE'},
      {state: 'userlist', name: 'USER LIST'},
    ]
  },
  {
    state: 'session',
    name: 'SESSIONS',
    type: 'sub',
    icon: 'face',
    children: [
      {state: 'login', name: 'LOGIN'},
      {state: 'register', name: 'REGISTER'},
      {state: 'forgot-password', name: 'FORGOT'},
      {state: 'lockscreen', name: 'LOCKSCREEN'}
    ]
  }

];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}
