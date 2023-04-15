
export interface CV {
    name: string,
    email: string,
    phone: string,
    twitter: string,
    linkedIn: string,
    github: string,
    jobs: Job[],
    education: Education[],
    side_projects: SideProject[],
    about: string,
    skills: string[]
}

export interface CreatedCV extends CV {
    cv_id: string,
    user_id: string
}

export interface Job {
    job_title: string,
    employer: string,
    responsibilities: string[]
    achievements: string[],
    start_date: string,
    end_date: string
}

export interface CreatedJob extends Job {
    job_id: string,
    user_id: string
}

export interface Education {
    course: string,
    course_type: "Undergraduate" | "Postgraduate" | "PhD" | "Extracurricular" | "Other",
    institution: string,
    learnings: string[],
    start_date: string,
    end_date: string
}

export interface CreatedEducation extends Education {
    education_id: string,
    user_id: string
}

 export interface SideProject {
    name: string,
    description: string,
    url: string,
    skills_used: string[],
    status: "In progress" | "Completed"
}

export interface CreatedSideProject extends SideProject {
    side_project_id: string,
    user_id: string
}