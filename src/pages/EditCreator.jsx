import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../client'

export function EditCreator() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [creator, setCreator] = useState({
        name: '',
        url: '',
        description: '',
        imageURL: ''
    })

    useEffect(() => {
        const fetchCreator = async () => {
            const { data, error } = await supabase
                .from('creators')
                .select()
                .eq('id', id)
                .single()

            if (data) setCreator(data)
            if (error) console.error(error)
        }
        fetchCreator()
    }, [id])

    const handleChange = (event) => {
        const { name, value } = event.target
        setCreator((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const updateCreator = async (event) => {
        event.preventDefault()
        const { error } = await supabase
            .from('creators')
            .update({ 
                name: creator.name, 
                url: creator.url, 
                description: creator.description, 
                imageURL: creator.imageURL 
            })
            .eq('id', id)

        if (error) {
            console.error(error)
        } else {
            // Send user back to the view page to see their changes
            navigate(`/view/${id}`)
        }
    }

    return (
        <div className="max-w-2xl mx-auto p-10">
            <h1 className="text-3xl font-bold mb-6">Edit Content Creator</h1>
            <form onSubmit={updateCreator} className="flex flex-col gap-4">
                <label className="form-control w-full">
                    <span className="label-text font-bold">Name</span>
                    <input type="text" name="name" value={creator.name} onChange={handleChange} className="input input-bordered w-full" />
                </label>

                <label className="form-control w-full">
                    <span className="label-text font-bold">URL</span>
                    <input type="text" name="url" value={creator.url} onChange={handleChange} className="input input-bordered w-full" />
                </label>

                <label className="form-control w-full">
                    <span className="label-text font-bold">Description</span>
                    <textarea name="description" value={creator.description} onChange={handleChange} className="m-3 textarea textarea-bordered h-24" />
                </label>

                <label className="form-control w-full">
                    <span className="label-text font-bold">Image URL</span>
                    <input type="text" name="imageURL" value={creator.imageURL} onChange={handleChange} className="input input-bordered w-full" />
                </label>

                <button type="submit" className="btn btn-primary mt-4">Update Creator</button>
            </form>
        </div>
    )
}