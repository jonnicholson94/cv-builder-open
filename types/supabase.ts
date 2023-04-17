export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      cv: {
        Row: {
          about: string | null
          cv_id: number
          education: number[] | null
          email: string | null
          github: string | null
          jobs: number[] | null
          linkedIn: string | null
          name: string | null
          phone: string | null
          side_projects: number[] | null
          skills: string[] | null
          twitter: string | null
          user_id: string
        }
        Insert: {
          about?: string | null
          cv_id?: number
          education?: number[] | null
          email?: string | null
          github?: string | null
          jobs?: number[] | null
          linkedIn?: string | null
          name?: string | null
          phone?: string | null
          side_projects?: number[] | null
          skills?: string[] | null
          twitter?: string | null
          user_id: string
        }
        Update: {
          about?: string | null
          cv_id?: number
          education?: number[] | null
          email?: string | null
          github?: string | null
          jobs?: number[] | null
          linkedIn?: string | null
          name?: string | null
          phone?: string | null
          side_projects?: number[] | null
          skills?: string[] | null
          twitter?: string | null
          user_id?: string
        }
      }
      education: {
        Row: {
          course: string | null
          course_type: string | null
          education_id: number
          end_date: string | null
          institution: string | null
          learnings: string[] | null
          start_date: string | null
          user_id: number
        }
        Insert: {
          course?: string | null
          course_type?: string | null
          education_id?: number
          end_date?: string | null
          institution?: string | null
          learnings?: string[] | null
          start_date?: string | null
          user_id: number
        }
        Update: {
          course?: string | null
          course_type?: string | null
          education_id?: number
          end_date?: string | null
          institution?: string | null
          learnings?: string[] | null
          start_date?: string | null
          user_id?: number
        }
      }
      jobs: {
        Row: {
          achievements: string[] | null
          employer: string
          end_date: string
          job_id: number
          job_title: string
          responsibilities: string[] | null
          start_date: string
          user_id: string
        }
        Insert: {
          achievements?: string[] | null
          employer?: string
          end_date: string
          job_id?: number
          job_title?: string
          responsibilities?: string[] | null
          start_date: string
          user_id: string
        }
        Update: {
          achievements?: string[] | null
          employer?: string
          end_date?: string
          job_id?: number
          job_title?: string
          responsibilities?: string[] | null
          start_date?: string
          user_id?: string
        }
      }
      side_projects: {
        Row: {
          description: string | null
          name: string | null
          side_project_id: number
          skills_used: string[] | null
          status: string | null
          url: string | null
          user_id: number
        }
        Insert: {
          description?: string | null
          name?: string | null
          side_project_id?: number
          skills_used?: string[] | null
          status?: string | null
          url?: string | null
          user_id: number
        }
        Update: {
          description?: string | null
          name?: string | null
          side_project_id?: number
          skills_used?: string[] | null
          status?: string | null
          url?: string | null
          user_id?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
