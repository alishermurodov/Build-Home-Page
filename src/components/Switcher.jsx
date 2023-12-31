import React, {useState} from 'react'
import UseDarkSide from "../hooks/UseDarkSide"
import {DarkModeSwitch} from 'react-toggle-dark-mode'

export default function Switcher() {
    const [colorTheme, setTheme] = UseDarkSide()
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false)

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkSide(checked)
    }

    return(
        <>
          <div className="">
            <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={56}
                moonColor='#aaa3b5'
                sunColor='gold'
            />
            <img src="" className='text-[#aaa3b5]' alt="" />
          </div>
        </>
    )
}