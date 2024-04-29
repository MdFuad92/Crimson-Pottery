import React, { useEffect, useState } from 'react';

const ThemeController = () => {

    const [theme,setTheme] = useState('light')
    const handleToggle = (e)=>{
      if(e.target.checked){
        setTheme('dracula')
      }
      else{
        setTheme('light')
      }
    }

    useEffect(()=>{
      localStorage.setItem('theme',theme)
      const localTheme = localStorage.getItem('theme')
      document.querySelector('html').setAttribute('data-theme',localTheme) 
    },[theme])
    console.log(theme)
    return <button>Theme</button>
};

export default ThemeController;