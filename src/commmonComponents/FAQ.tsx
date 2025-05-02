'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react'; // Optional, you can also use any icon library

const faqs = [
    {
        question: 'How does our pricing work?',
        answer: 'Our pricing is flexible based on your usage and required features. Contact our sales team for a tailored plan.',
    },
    {
        question: 'How does our pricing work?',
        answer: 'We offer monthly and annual billing cycles with discounts on yearly plans.',
    },
    {
        question: 'How does our pricing work?',
        answer: 'You can upgrade or downgrade your plan at any time from your dashboard.',
    },
    {
        question: 'How does our pricing work?',
        answer: 'A free trial is available for 14 days. No credit card required.',
    },
    {
        question: 'How does our pricing work?',
        answer: 'All plans include 24/7 customer support and regular updates.',
    },
    {
        question: 'How does our pricing work?',
        answer: 'Custom enterprise pricing is available for large teams and organizations.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    

    return (
        <div className="lg:w-[80%] mx-auto  p-4 lg:px-10 mt-16" >
            {faqs.map((item, index) => (
                <div
                    key={index}
                    className="border-b border-gray-300 py-4 "
                >
                    <button
                        onClick={() => toggle(index)}
                        className="flex justify-between items-center w-full text-left"
                    >
                        <span className="text-lg font-medium">{item.question}</span>
                        <motion.div
                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ChevronDown className="w-6 h-6" />
                        </motion.div>
                    </button>

                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden text-gray-600 mt-2"
                            >
                                <p className="pb-2">{item.answer}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
