// components/OfficeLocations.tsx
"use client"


export default function OfficeLocations() {
    const locations = [
        {
            title: "TIME TECHNOLOGIES HQ",
            addressLines: [
                "675 North Hunt Club Blvd,",
                "Unit 2223, Longwood,",
                "Florida, 32779, United",
                "States of America.",
            ],
            link: "#",
        },
        {
            title: "Pakistan",
            addressLines: [
                "157 P Block,",
                "Time Technologies,",
                "Gulberg III Lahore,",
                "Pakistan",
            ],
            link: "#",
        },
    ];

    return (
        <section className="lg:py-10 px-4 text-center bg-white">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
                Office Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {locations.map((loc, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            {loc.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {loc.addressLines.map((line, i) => (
                                <span key={i} className="block">
                                    {line}
                                </span>
                            ))}
                        </p>
                        <a
                            href={loc.link}
                            className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                        >
                            View Location
                            <span className="ml-2">→</span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
