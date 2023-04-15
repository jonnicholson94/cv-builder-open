import { useSupabaseClient } from "@supabase/auth-helpers-react"

const useJobsFetch = () => {

    const supabase = useSupabaseClient()

    const fetchJobs = async (user_id) => {
        const { data, error } = await supabase.from("jobs").select("*").eq("user_id", user_id)

        return { data, error }
    }

    return fetchJobs 
}

export default useJobsFetch