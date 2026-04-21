import { useParams, Link, useNavigate } from "react-router-dom" 
import { useEffect, useState } from 'react'
import { supabase } from "../client"

export function ViewCreator() {
    const { id } = useParams()
    const navigate = useNavigate() 
    const [creator, setCreator] = useState(null)
    const [loading, setLoading] = useState(true)

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


    const deleteCreator = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this creator?")
        
        if (confirmDelete) {
            const { error } = await supabase
                .from('creators')
                .delete()
                .eq('id', id)

            if (error) {
                console.error("Error deleting creator:", error.message)
                alert("Could not delete creator.")
            } else {
                alert("Creator deleted successfully!")
                navigate('/')
            }
        }
    }

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

                {/* Updated Button Container */}
                <div className="flex flex-col gap-3 mt-4">
                    <a 
                        href={creator.url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn btn-secondary w-full"
                    >
                        Visit Social Media / Portfolio
                    </a>
                    
                    <div className="flex flex-row gap-3">
                        <Link to={`/edit/${id}`} className="flex-1">
                            <button className="btn btn-outline btn-accent w-full">Edit</button>
                        </Link>

                        <button 
                            onClick={deleteCreator} 
                            className="btn btn-outline btn-error flex-1"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}