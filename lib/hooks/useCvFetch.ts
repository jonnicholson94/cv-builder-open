import { useSupabaseClient } from "@supabase/auth-helpers-react"

const useCvFetch = () => {

    const supabase = useSupabaseClient()

    const fetchCv = async (user_id) => {
        const { data, error } = await supabase.from("cv").select("*").eq("user_id", user_id)

        if (error) {
            return error
        }

        return data
    }

    return fetchCv 
}

export default useCvFetch