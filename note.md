# For creating react-app by vite; run command 
        npm create vite@latest

  after this, installing required node modules; run command
        npm install / npm i



# 06 Virtual DOM

1- createRoot() --> behind the scenes hamare liye DOM like structure create karta hai,
                  then continuously main DOM aur apne DOM ko compare karta hai aur fir unhi cheezon ko update
                  karta h jo ki UI me update hui hain

                  lekin jo browser h, wo poora dom remove karta hai aur poore dom ko wapas se repaint karta h, isi 
                  ko "PAGE RELOAD" bolte hain, ki dom ka poora ka poora structure fir taiyar ho raha hai 

2- why we should use keys in loop or iteration in react  ?
ans -> Fibre jo algo likhi thi, usme agar list ki performance ko improve karna h to har ek iteration pr hamko keys ka
        use karna hi padega.


# Context Api

## How to setup(use) context  api

### steps

1- create context folder inside src then create a contextfile (i.e. UserContext.js)
2- In context-file 
        - create a context variable(UserContext) using createContext() method
                        const UserContext = React.createContext();
        - Export the context-variable  {Provider - who provides the data}

3- Create a provider inside context folder (i.e. UserContextProvider.jsx)
