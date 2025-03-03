'use client'
import React, { useState } from 'react'
import { Plus } from 'react-bootstrap-icons';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const accordionData = [
        {
            _id: 1,
            question: "What are your AI widgets?",
            answer: "InfoiconAI offers a range of AI widgets that can be easily integrated into your website, blog, or social media pages. For example, you can add an assistant AI chatbot that can answer your audience's questions, an image generator that can generate images based on your audience's input, and more. These widgets are fully-customizable, meaning you can change its behavior and configure them for your own use cases.",
        },
        {
            _id: 2,
            question: "Why should I use your AI widgets?",
            answer: "The artificial intelligence industry is growing at an exponential rate and we believe that AI should be accessible to everyone. Our AI widgets are designed to increase user interactivity and engagement for your audience.",
        },
        {
            _id: 3,
            question: "Can I earn money with your AI widgets?",
            answer: "InfoiconAI is fully monetizable, allowing you to earn revenue by offering AI widgets to your audience. You have the option to provide the widget at no cost or set a fee for each time they are generated. We use Stripe to process payments and we don't charge any fees for all direct payments transactions sent to you. As an alternative, you can also use our affiliate program to earn revenue by referring new paying users to our platform.",
        },
        {
            _id: 4,
            question: "How do I install your AI widgets on my website?",
            answer: "Installing our AI widgets is simple and straightforward. Just copy and paste the provided custom widget elements code into your website and you're all set!.",
        },
        {
            _id: 5,
            question: "Can I customize your AI widgets to fit my brand?",
            answer: "Yes, you can customize our AI widgets to fit your brand. Not only you can change its style and add new inputs, but you can also configure it's behavior to fit your use case, meaning you can create your own fully customized AI widget.",
        },
        {
            _id: 6,
            question: "Do your AI widgets come with customer support?",
            answer: "Yes, we offer customer support to help you with any questions or issues you may have with our AI widgets. Contact us for more information.",
        },
    ];

    return (
        <section className="faq-section">
            <div className="container">
                <div className="title-basic">
                    <h2 className="text-white">Have inquiries? In our FAQ, you'll find all the solutions you need.</h2>
                </div>

                <div className="accordion">
                    {accordionData.map((item, index) => (
                        <div key={item._id} className="accordion-item">
                            <h2 className="accordion-header"><button className="accordion-button flex justify-between" onClick={() => toggleAccordion(index)}>
                                <span className="font-medium">{item.question}</span>
                                <span className={`transform transition-transform ${openIndex === index ? "rotate-45" : "rotate-0"}`}>
                                    <Plus />
                                </span>
                            </button></h2>
                            {openIndex === index && (
                                <div className="accordion-collapse">
                                    <div className="accordion-body">{item.answer}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faq