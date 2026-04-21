import { useState, useEffect } from 'react';
import { Card } from "../components/Card";
import { supabase } from "../client";

export function ShowCreators(){
    const [creators, setCreators] = useState([])

    useEffect(() => {
        const fetchCreators = async () => {
            const { data, error } = await supabase.from('creators').select('*')

        
        if (data) setCreators(data)
        if (error) console.error(error)
        }
    fetchCreators()
    }, [])

    return (
    <>
    <div className='p-8'>
        <div className="grid grid-cols-1 md:grid-cols-3 gapx-4 gapy-5">
            {creators.map((creator) => 
             <Card 
                key={creator.id}
                data={creator}
                /> 
            )}
        </div>
    </div>
    
    </>
    )
}