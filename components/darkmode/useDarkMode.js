import { useEffect, useState } from "react";


const useDarkMode = () => {
    const [Themes, setThemes] = useState('light');
    const colorTheme= Themes==='dark'?'light':'dark';
    useEffect(() => {
      if(!window) return

      const theme = localStorage['theme'] || 'light'
      setThemes(theme)
    },[])
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme)
        root.classList.add(Themes);
        if(window) {
          localStorage.setItem("theme",Themes)
        }
    }, [Themes,colorTheme])
    return [colorTheme,setThemes]
}

export default useDarkMode
 