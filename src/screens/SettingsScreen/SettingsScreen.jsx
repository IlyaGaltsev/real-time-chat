import { Pencil } from "akar-icons"
import { updateProfile } from "firebase/auth"
import {
  useContext,
  useLayoutEffect,
  useRef,
  useState
} from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Context } from "../.."
import { NavbarBottom } from "../../components/NavbarBottom"
import { SettingsInput } from "../../components/SettingsInput"
import "./SettingsScreen.scss"

const SettingsScreen = () => {
  const inputImage = useRef(null)
  const inputDisplayName = useRef(null)
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)

  const [urlImage, setUrlImage] = useState(
    user.photoURL
  )
  const [displayName, setDisplayName] = useState(
    user.displayName
  )

  const updateImage = name => {
    updateProfile(auth.currentUser, {
      photoURL: name
    })
  }

  const updateDisplayName = name => {
    updateProfile(auth.currentUser, {
      displayName: name
    })
  }

  const handleOnChange = e => {
    let name = e.target.name

    name === "diplayName"
      ? setDisplayName(e.target.value)
      : setUrlImage(e.target.value)
  }

  return (
    <div className="settings-wrapper">
      <div className="settings-contant">
        <div className="settings-page">
          <SettingsInput
            title={"diplayName"}
            value={displayName}
            name={"diplayName"}
            onChange={handleOnChange}
            referense={inputDisplayName}
            onSave={updateDisplayName}
          />
          <SettingsInput
            title={"photoURL"}
            value={urlImage}
            name={"photoURL"}
            onChange={handleOnChange}
            referense={inputImage}
            onSave={updateImage}
          />
        </div>
      </div>
      <NavbarBottom />
    </div>
  )
}
export { SettingsScreen }
