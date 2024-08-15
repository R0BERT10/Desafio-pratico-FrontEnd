import { handleSubmitStates } from "../@types/@handlesSubmit";

export function cleanField (handles:handleSubmitStates ) {
    const { setFormError } = handles
    setFormError([])
}