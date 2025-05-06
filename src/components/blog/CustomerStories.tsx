'use client';


import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface CustomerStory {
    id: number;
    title: string;
    image: string;
    logo: string;
    description: string;
    button: string;
    function: string;
    industry: string;
    companySize: string;
    region: string;
}

const CustomerStories = () => {
    const customerStories: CustomerStory[] = [
        {
            id: 1,
            title: 'Customer 1',
            image: '',
            logo: '',
            description: 'We had a great experience with this solution.',
            button: 'Read More',
            function: 'FunctionA',
            industry: 'IndustryA',
            companySize: 'Large',
            region: 'Karachi',
        },
        {
            id: 2,
            title: 'Customer 2',
            image: '',
            logo: '',
            description: 'Helped scale our business quickly.',
            button: 'Read More',
            function: 'FunctionB',
            industry: 'IndustryB',
            companySize: 'Medium',
            region: 'Lahore',
        },
        {
            id: 3,
            title: 'Customer 3',
            image: '',
            logo: '',
            description: 'An excellent platform for small teams.',
            button: 'Read More',
            function: 'FunctionA',
            industry: 'IndustryA',
            companySize: 'Small',
            region: 'Sahiwal',
        },
    ];


    const [filters, setFilters] = useState({
        function: '',
        industry: '',
        companySize: '',
        region: '',
    });

    const router = useRouter();
    
    const handleNavigate = (story: CustomerStory) => {
        sessionStorage.setItem('selectedStory', JSON.stringify(story));
        router.push(`/casestudy/${story.id}`);
      };
      



    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const filteredStories = customerStories.filter(story => {
        return (
            (filters.function ? story.function === filters.function : true) &&
            (filters.industry ? story.industry === filters.industry : true) &&
            (filters.companySize ? story.companySize === filters.companySize : true) &&
            (filters.region ? story.region === filters.region : true)
        );
    });

    return (
        <section className="px-4 lg:px-10 my-20">
            <h1 className="text-4xl font-bold text-center mb-10">Customer Stories</h1>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-center mb-10">
                <select
                    name="function"
                    onChange={handleChange}
                    className="w-full lg:w-40 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Function</option>
                    <option value="FunctionA">Function A</option>
                    <option value="FunctionB">Function B</option>
                </select>

                <select
                    name="industry"
                    onChange={handleChange}
                    className="w-full lg:w-48 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Industry</option>
                    <option value="IndustryA">Industry A</option>
                    <option value="IndustryB">Industry B</option>
                </select>

                <select
                    name="companySize"
                    onChange={handleChange}
                    className="w-full lg:w-48 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Company Size</option>
                    <option value="Large">Large</option>
                    <option value="Medium">Medium</option>
                    <option value="Small">Small</option>
                </select>

                <select
                    name="region"
                    onChange={handleChange}
                    className="w-full lg:w-48 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Region</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Sahiwal">Sahiwal</option>
                </select>
            </div>

            {/* Filtered Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStories.length > 0 ? (
                    filteredStories.map((story, index) => (
                        <div
                            key={index}
                            className="border rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 bg-white"
                        >
                            <div className="mb-4 text-lg font-semibold">{story.title}</div>
                            <div className="mb-2 text-gray-600">{story.description}</div>
                            <div className="text-sm text-gray-500 mb-2">
                                <strong>Function:</strong> {story.function} <br />
                                <strong>Industry:</strong> {story.industry} <br />
                                <strong>Size:</strong> {story.companySize} <br />
                                <strong>Region:</strong> {story.region}
                            </div>
                            <button className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer" onClick={() => handleNavigate(story)}>
                                {story.button}
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">No matching stories found.</p>
                )}
            </div>
        </section>
    );
};

export default CustomerStories;
