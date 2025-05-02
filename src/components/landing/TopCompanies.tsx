import React, { useState } from 'react';


const TopCompanies: React.FC = () => {
  // Dummy data for companies
  interface Company {
    id: number;
    name: string;
    logo: string;
    description: string;
    size: string; // e.g., 'Small', 'Medium', 'Large'
    marketType: string; // e.g., 'Mid-Market', 'Enterprise'
    reviews: Review[]; // Array of review objects
  }

  interface Review {
    reviewerName: string;
    designation: string;
    industry: string; // e.g., 'Education', 'Healthcare', etc.
    comments: string; // Review comments
  }

  const companies: Company[] = [
    {
      id: 1,
      name: 'TechCorp',
      logo: '/assets/ball.png',
      description: 'Leading innovator in AI and cloud computing solutions.',
      size: 'Large',
      marketType: 'Enterprise',
      reviews: [
        {
          reviewerName: 'Jane Doe',
          designation: 'CTO',
          industry: 'Education',
          comments: `TechCorp has revolutionized our cloud computing infrastructure.
  Their team was highly responsive and professional throughout.
  I highly recommend their services to any enterprise.`
        },
        {
          reviewerName: 'John Smith',
          designation: 'IT Manager',
          industry: 'Healthcare',
          comments: `Their AI solutions are top-notch and user-friendly.
  We've seen a significant improvement in our workflow.
  Support is fantastic and onboarding was seamless.`
        }
      ]
    },
    {
      id: 2,
      name: 'DataDynamix',
      logo: '/assets/ball.png',
      description: 'Pioneering big data analytics and machine learning.',
      size: 'Medium',
      marketType: 'Mid-Market',
      reviews: [
        {
          reviewerName: 'Alice Brown',
          designation: 'Data Scientist',
          industry: 'Finance',
          comments: `Excellent big data analytics tools for financial modeling.
  The insights we derive are more accurate and actionable.
  I trust their platform for mission-critical tasks.`
        }
      ]
    },
    {
      id: 3,
      name: 'CyberSolutions',
      logo: '/assets/ball.png',
      description: 'Advanced cybersecurity for the modern enterprise.',
      size: 'Small',
      marketType: 'Mid-Market',
      reviews: [
        {
          reviewerName: 'Mark Wilson',
          designation: 'Security Consultant',
          industry: 'Retail',
          comments: `Outstanding cybersecurity solutions tailored for retail.
  Their real-time threat monitoring saved us multiple times.
  Wouldn’t trust anyone else with our data.`
        }
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? companies.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === companies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className=" py-8 px-3 lg:px-10">
      {/* Header and Navigation Buttons */}
      <div className="flex flex-col mb-6">

        <h1 className="text-3xl font-bold text-gray-800 2xl:font-medium 2xl:text-[40px] lg:w-[450px] 2xl:w-[655px]">
          The world’s top companies trust Time Technologies
        </h1>

        <div className='flex flex-row justify-between items-center mt-[26px]'>
          <div>
            <button className="text-[#10008A] py-2 px-6 rounded-3xl border-[#10008A] border-1 font-medium">
              See all case studies
            </button>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handlePrev}
              className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative ">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {companies.map((company) => (
              <div
                key={company.id}
                className="min-w-full flex flex-col items-center  lg:p-6 bg-white rounded-lg shadow-lg"
              >
                <div className='flex flex-col lg:flex-row gap-10  w-full'>
                  <div className='flex flex-col flex-2/5'>
                    <div className=' flex justify-center flex-1/2'>
                      <img src={company?.logo} className="" alt={`${company?.name} logo`} />
                    </div>

                    <hr className='border border-[#000000] my-3' />

                    <div>
                      <div className='flex flex-col gap-y-3 flex-1/2'>
                        <h3>Company Size</h3>
                        <p className='font-medium text-xl'>{company?.size}</p>
                      </div>
                      <div className='flex flex-col gap-y-3'>
                        <h3>Industry</h3>
                        <p className='font-medium text-xl'>{company?.marketType}</p>
                      </div>
                    </div>
                  </div>

                  <div className='bg-[#FFDDE5] w-[320px] p-3 lg:p-8 flex flex-col lg:flex-4/5 justify-center items-center'>
                    <div className='w-full max-w-screen lg:max-w-96 overflow-x-auto no-scrollbar'>
                      <div className='flex space-x-4  lg:w-max '>
                        {company.reviews.map((review: Review, index) => (
                          <div
                            key={index}
                            className='min-w-[275px] max-w-[300px] lg:min-w-[300px] lg:max-w-96 lg:p-4  rounded-xl shadow-md border border-gray-200'
                          >

                            <p className='mt-2 text-gray-700 italic text-2xl '>&ldquo;{review.comments}&rdquo;</p>
                            <h3 className='font-semibold text-lg'>{review.reviewerName}</h3>
                            <p className='text-sm text-gray-600'>{review.designation} • {review.industry}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className='my-8 lg:w-96 flex justify-end'>
                      <button className='px-4 py-2 rounded-full border border-[#000000] cursor-pointer'>
                        Read Case Study
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-4">
          {companies.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'
                } transition-colors`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCompanies;