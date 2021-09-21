import './terms.scss'
import lang from '../assets/icons/Language/English.svg'

import Footer from "../components/Footer/Footer";

const TermsLayout = ({children}) => (
  <div className="wrapper">
    <header className="header">
      <a href="#" className="logotype" aria-label="BITL">
        <svg width="108" height="40" viewBox="0 0 108 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M49.44 11.2H59.04C60.608 11.2 61.76 11.56 62.496 12.28C63.232 12.984 63.6 14.064 63.6 15.52C63.6 16.48 63.392 17.264 62.976 17.872C62.56 18.464 62.048 18.88 61.44 19.12C62.736 19.472 63.616 20.336 64.08 21.712C64.24 22.208 64.32 22.784 64.32 23.44C64.32 25.008 63.952 26.16 63.216 26.896C62.48 27.632 61.328 28 59.76 28H49.44V11.2ZM60 22.72C60 21.76 59.52 21.28 58.56 21.28H53.76V24.64H58.56C59.52 24.64 60 24.16 60 23.2V22.72ZM59.28 16C59.28 15.04 58.8 14.56 57.84 14.56H53.76V17.92H57.84C58.8 17.92 59.28 17.44 59.28 16.48V16ZM75.3991 28H66.7591V24.64H68.9191V14.56H66.7591V11.2H75.3991V14.56H73.2391V24.64H75.3991V28ZM86.7172 28H82.3972V14.56H77.3572V11.2H91.7572V14.56H86.7172V28ZM98.76 24.64H107.52V28H94.44V11.2H98.76V24.64Z" fill="#7B61FF"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M15.9215 0.553009C17.2077 -0.184336 18.7923 -0.184336 20.0785 0.553008L33.9215 8.48915C35.2077 9.2265 36 10.5892 36 12.0639V27.9361C36 29.4108 35.2077 30.7735 33.9215 31.5109L20.0785 39.447C18.7923 40.1843 17.2077 40.1843 15.9215 39.447L2.07846 31.5109C0.792305 30.7735 0 29.4108 0 27.9361V12.0639C0 10.5892 0.792305 9.2265 2.07846 8.48915L15.9215 0.553009ZM13 12C12.4477 12 12 12.4477 12 13V27C12 27.5523 12.4477 28 13 28H21.7097C23.1849 28 24.2688 27.6495 24.9613 26.9486C25.6538 26.2476 26 25.1505 26 23.6571C26 23.0324 25.9247 22.4838 25.7742 22.0114C25.3376 20.701 24.5097 19.8781 23.2903 19.5429C23.8624 19.3143 24.3441 18.9181 24.7355 18.3543C25.1269 17.7752 25.3226 17.0286 25.3226 16.1143C25.3226 14.7276 24.9763 13.699 24.2839 13.0286C23.5914 12.3429 22.5075 12 21.0323 12H13ZM20.5806 21.6C21.4839 21.6 21.9355 22.0571 21.9355 22.9714V23.4286C21.9355 24.3429 21.4839 24.8 20.5806 24.8H16.0645V21.6H20.5806ZM19.9032 15.2C20.8065 15.2 21.2581 15.6571 21.2581 16.5714V17.0286C21.2581 17.9429 20.8065 18.4 19.9032 18.4H16.0645V15.2H19.9032Z" fill="#7B61FF"/>
        </svg>
      </a>

      <div className="header-bar">
        <div className="language">
          <img src={lang} alt="lang"/>
        </div>
        <div className="return-bar">
          <span>back</span>
          <a href="#" className="return-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.705 17.295a.998.998 0 0 1-.001-1.41L13.58 12 9.704 8.115a.998.998 0 0 1 1.411-1.41L16.41 12l-5.295 5.295a.998.998 0 0 1-1.41 0Z" fill="#33343E"/></svg>
          </a>
        </div>
      </div>
    </header>
    <main className="main">
      {children}
    </main>
    <Footer />
  </div>
)

export default TermsLayout