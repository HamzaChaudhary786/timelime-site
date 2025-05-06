'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';


type CaseStudy = {
    id: string;
    title: string;
    description: string;
    function: string;
    industry: string;
    companySize: string;
    region: string;
};


const CaseStudyPage = () => {
    const { id } = useParams();
    const [story, setStory] = useState<CaseStudy | null>(null);

    useEffect(() => {
        const data = sessionStorage.getItem('selectedStory');
        console.log('Raw data from sessionStorage:', data);

        if (data) {
            try {
                const parsed = JSON.parse(data);
                console.log('Parsed story:', parsed);

                // Safe compare (ensure types match)
                if (String(parsed.id) === String(id)) {
                    setStory(parsed);
                } else {
                    console.warn('ID mismatch:', parsed.id, id);
                }
            } catch (e) {
                console.error('Failed to parse sessionStorage data:', e);
            }
        } else {
            console.warn('No data in sessionStorage');
        }
    }, [id]);

    if (!story) return <p>Loading or story not found...</p>;

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-4">{story.title}</h1>
            <p className="mb-2">{story.description}</p>
            <div className="text-gray-700 space-y-1">
                <p><strong>Function:</strong> {story.function}</p>
                <p><strong>Industry:</strong> {story.industry}</p>
                <p><strong>Size:</strong> {story.companySize}</p>
                <p><strong>Region:</strong> {story.region}</p>
            </div>
        </div>
    );
};

export default CaseStudyPage;
