import { useTranslation } from 'react-i18next';



function Home() {
  const { t, i18n } = useTranslation();


  const changeEN = () =>{
    i18n.changeLanguage("en");
  }
  const changeAR = () =>{
    i18n.changeLanguage("ar");
  }
  return( 
  <>
  <div>
  <button onClick={changeEN}>EN</button>
  <button onClick={changeAR}>AR</button>
  <input class="input__2o8B " spellcheck="false"
   autocorrect="off" autocapitalize="off" type="password"
    name="password1" autocomplete="new-password"
     placeholder="Password" value="" aria-autocomplete="list"></input>
  </div>
  <div>
    <h1>{t("Welcome to React")}</h1>
    <h1>{t("hi users")}</h1>
  </div>

  </>
  )
  ;
}

export default Home;
