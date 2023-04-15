
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { useAppDispatch } from "../reduxHelpers"
import { showSaving, removeSaving } from "../../features/statusSlice"

const useInputUpdate = () => {

    const supabase = useSupabaseClient()
    const dispatch = useAppDispatch()

    const updateName = async (state, user_id) => {
        
        dispatch(showSaving())
        const { data, error } = await supabase.from("cv").update({ name: state }).eq("user_id", user_id)

        if (error) {
            dispatch(removeSaving)
            console.log(error.message);
            return error 
        }

        dispatch(removeSaving())
    }

    const updateEmail = async (state, user_id) => {
        dispatch(showSaving())
        const { data, error } = await supabase.from("cv").update({ email: state }).eq("user_id", user_id)

        if (error) {
            dispatch(removeSaving)
            console.log(error.message);
            return error 
        }

        dispatch(removeSaving())
    }

    const updatePhone = async (state, user_id) => {
        dispatch(showSaving())
        const { data, error } = await supabase.from("cv").update({ phone: state }).eq("user_id", user_id)

        if (error) {
            dispatch(removeSaving)
            console.log(error.message);
            return error 
        }

        dispatch(removeSaving())
    }

    const updateTwitter = async (state, user_id) => {
        dispatch(showSaving())
        const { data, error } = await supabase.from("cv").update({ twitter: state }).eq("user_id", user_id)

        if (error) {
            dispatch(removeSaving)
            console.log(error.message);
            return error 
        }

        dispatch(removeSaving())
    }

    const updateLinkedIn = async (state, user_id) => {
        dispatch(showSaving())
        const { data, error } = await supabase.from("cv").update({ linkedIn: state }).eq("user_id", user_id)

        if (error) {
            dispatch(removeSaving)
            console.log(error.message);
            return error 
        }

        dispatch(removeSaving())
    }

    const updateGithub = async (state, user_id) => {
        dispatch(showSaving())
        const { data, error } = await supabase.from("cv").update({ github: state }).eq("user_id", user_id)

        if (error) {
            dispatch(removeSaving)
            console.log(error.message);
            return error 
        }

        dispatch(removeSaving())
    }

    const updateAbout = async (state, user_id) => {
        dispatch(showSaving())
        const { data, error } = await supabase.from("cv").update({ about: state }).eq("user_id", user_id)

        if (error) {
            dispatch(removeSaving)
            console.log(error.message);
            return error 
        }

        dispatch(removeSaving())
    }

    return { updateName, updateEmail, updatePhone, updateTwitter, updateGithub, updateLinkedIn, updateAbout }
}

export default useInputUpdate