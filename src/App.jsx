import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import appStore from "./utlity/appStore";


function App() {
  
  

  return (
    <div >
    
      <Provider store={appStore}>
        
        <Header/>
        <MainContainer/>
      </Provider>
      
    </div>
  )
}

export default App