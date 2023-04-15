import { useSupabaseClient } from "@supabase/auth-helpers-react"

const useJobCreate = () => {
    const supabase = useSupabaseClient()

    const createJob = async (user_id, job_title, employer, responsibilities, achievements, start_date, end_date) => {

        const { data, error } = await supabase.from("jobs").insert({
            user_id,
            job_title,
            employer,
            responsibilities, 
            achievements,
            start_date,
            end_date
        })

        return { data, error }
    }

    return { createJob }
}

export default useJobCreate