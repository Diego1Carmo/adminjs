import { AdminJSOptions } from '../../adminjs-options.interface'

import { PageJSON } from '../interfaces'

const pagesToStore = (pages: AdminJSOptions['pages'] = {}): Array<PageJSON> => Object.entries(pages)
  .map(([key, adminPage]) => ({
    name: key,
    component: adminPage.component,
    icon: adminPage.icon,
    isVisible: adminPage.isVisible == undefined ? true : adminPage.isVisible
  }))

export default pagesToStore
