import React, { useState } from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'

import { Header } from '../components'

export const ColorPicker = () => {

  const [ color, setColor ] = useState('');

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl" >
    <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" style={{backgroundColor: color}} />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <h4 className="text-2xl font-semibold mt-2 mb-4">
              Inline Pallete
            </h4>
            <ColorPickerComponent
            mode="Palete"
            id="inline-pallete"
            modeSwitcher={false}
            inline
            showButtons={false} 
            change={({currentValue: { hex }})=> setColor(hex)}
            />
          </div>
          <div>
            <h4 className="text-2xl font-semibold mt-2 mb-4">
              Inline Picker
            </h4>
            <ColorPickerComponent
            id="inline-pallete"
            mode="Picker"
            modeSwitcher={false}
            inline
            showButtons={false}         
            change={({currentValue: { hex }})=> setColor(hex)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
