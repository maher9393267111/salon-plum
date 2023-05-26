import React from 'react'
import SideMenu from './SideMenu'

import { StateContextProvider } from '@/utils/context'
export default function AdminLayout({children}) {
  return (

    <div>

<SideMenu/>

<div className=' relative left-[5px]'>
  {children}
</div>


    </div>
  )
}
