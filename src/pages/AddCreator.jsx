import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../client'

export function AddCreator(){
    const navigate = useNavigate()

    const [creator, setCreator] = useState({
        name: '',
        url: '',
        description: '',
        imageURL: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setCreator((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const createCreator = async (event) => {
        event.preventDefault()

        // console.log(creator)

        const { data, error } = await supabase.from('creators').insert([
            {
                name: creator.name,
                url: creator.url,
                description: creator.description,
                imageURL: creator.imageURL
            }
        ]).select()

        if (error) {
            console.error("Error inserting creator: ", error.message)

        } else {
            alert("Successfully Created a New Creator!")
            navigate('/')
        }
    }

    return(
        <div className="max-w-2xl mx-auto p-10 bg-base-100 rounded-xl shadow-xl mt-10">
            <h1 className="text-4xl font-black mb-8 text-secondary uppercase tracking-widest">Add New Creator</h1>
            
            <form onSubmit={createCreator} className="flex flex-col gap-6">
                {/* Name Input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">NAME</span>
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Creator Name"
                        value={creator.name} 
                        onChange={handleChange} 
                        className="input input-bordered w-full" 
                        required 
                    />
                </div>

                {/* URL Input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">SOCIAL MEDIA URL</span>
                    </label>
                    <input 
                        type="url" 
                        name="url" 
                        placeholder="https://..."
                        value={creator.url} 
                        onChange={handleChange} 
                        className="input input-bordered w-full" 
                        required 
                    />
                </div>

                {/* Description Input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">DESCRIPTION</span>
                    </label>
                    <textarea 
                        name="description" 
                        placeholder="Write a short bio..."
                        value={creator.description} 
                        onChange={handleChange} 
                        className="textarea textarea-bordered h-32 mx-4" 
                        required 
                    />
                </div>

                {/* Image URL Input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">IMAGE URL (Optional)</span>
                    </label>
                    <input 
                        type="text" 
                        name="imageURL" 
                        placeholder="Paste image link here"
                        value={creator.imageURL} 
                        onChange={handleChange} 
                        className="input input-bordered w-full" 
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block mt-4 text-lg">
                    Submit Creator
                </button>
            </form>
        </div>

    )
}