import { enumModalsShow } from "./data/@types/enumModalState"
import mainStore from "./data/stores/MainStore"
import Home from "./pages/Home"
import ModalSingIn from "./ui/components/modals/ModalSingIn"
import ModalSingUp from "./ui/components/modals/ModalSingUp"


function App() {
  //const user = mainStore(state => state.user)
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
        return (<p>profile</p>)
      case enumModalsShow.NONE:
        return null
    }
  }
}

export default App
