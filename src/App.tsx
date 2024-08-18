import { enumModalsShow } from "./data/@types/enumModalState"
import mainStore from "./data/stores/MainStore"
import Home from "./pages/Home"
import ModalProfile from "./ui/components/modals/ModalProfile"
import ModalSingIn from "./ui/components/modals/ModalSingIn"
import ModalSingUp from "./ui/components/modals/ModalSingUp"


function App() {
  const modalOpen = mainStore(state => state.modalOpen)
  
  return (
    <>
      <Home></Home>
      <Modal/>
    </>
  )

  function Modal() {
    switch (modalOpen) {
      case enumModalsShow.SING_UP:
        return (<ModalSingUp/>)
      case enumModalsShow.SING_IN:
        return (<ModalSingIn/>)
      case enumModalsShow.PROFILE:
        return (<ModalProfile/>)
      case enumModalsShow.NONE:
        return null
    }
  }
}

export default App
