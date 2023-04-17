import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { Database } from "../../types/supabase"

const useJobsFetch = () => {

    const supabase = useSupabaseClient<Database>()

    const fetchJobs = async (user_id: string) => {
        const { data, error } = await supabase.from("jobs").select("*").eq("user_id", user_id)

        return { data, error }
    }

    return fetchJobs 
}

export default useJobsFetch