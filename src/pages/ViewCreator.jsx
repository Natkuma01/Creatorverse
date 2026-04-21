import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { supabase } from "../client"

export function ViewCreator() {
    const { id } = useParams()
    const [creator, setCreator] = useState(null)
    const [loading, setLoading] = useState(true) // Track loading state

    useEffect(() => {
        const fetchSingleCreator = async () => {
            setLoading(true)
            const { data, error } = await supabase
                .from('creators')
                .select('*')
                .eq('id', id)
                .single()
        
            if (error) {
                console.error("Error fetching creator:", error.message)
            } else {
                setCreator(data)
            }
            setLoading(false)
        }

        fetchSingleCreator()
    }, [id])

    if (loading) {
        return <div className="p-10 text-center text-2xl">Loading creator details...</div>
    }

    if (!creator) {
        return <div className="p-10 text-center text-2xl">Creator not found.</div>
    }

    return (
       <div className="flex flex-col md:flex-row gap-10 m-10 items-start">
            {/* Left Column: Image */}
            <div className="flex-1 w-full">
                <img 
                    src={creator.imageURL} 
                    alt={creator.name} 
                    className="w-full aspect-square object-cover rounded-2xl shadow-lg"
                />
            </div>

            {/* Right Column: Info */}
            <div className="flex-1 flex flex-col gap-4">
                <h1 className="text-5xl font-extrabold text-primary">{creator.name}</h1>
                
                <div className="bg-base-200 p-6 rounded-xl">
                    <h3 className="text-lg font-bold mb-2 uppercase opacity-50">Description</h3>
                    <p className="text-xl leading-relaxed">{creator.description}</p>
                </div>

                {/* Clickable URL */}
                <div className="mt-4">
                    <a 
                        href={creator.url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn btn-outline btn-secondary w-full md:w-auto"
                    >
                        Visit Social Media / Portfolio
                    </a>
                </div>
            </div>
        </div>
    )
}