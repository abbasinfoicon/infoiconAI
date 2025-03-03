import Breadcrumb from '@/app/components/Breadcrumb'
import Link from 'next/link'
import React from 'react'

const Docs = () => {
    return (
        <>
            <Breadcrumb title="Documentation" content="InfoiconAI is a no-code platform that allows you to integrate AI-powered widgets to your website, without having to write any code." image="blog-details-vector.svg" />

            <section className="ratio_40">
                <div className="container">
                    <div className="docs-details">
                        <div className="row">
                            <div className="col-lg-3 col-md-4">
                                <div className="docs-left-content">
                                    <div className='tab'>
                                        <h3>Getting Started</h3>
                                        <ul>
                                            <li><Link href="#">Introduction</Link></li>
                                            <li><Link href="#">Managing API Keys</Link></li>
                                            <li><Link href="#">Creating a new widget</Link></li>
                                            <li><Link href="#">Configuring a widget</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-9 col-md-8">
                                <div className="docs-main-content mt-0">
                                    <h2>Getting Started</h2>
                                    <p>InfoiconAI is a no-code platform that allows you to integrate AI-powered widgets to your website, without having to write any code.</p>
                                    <p>We currently offer 3 types of widgets for your website:</p>
                                    <ul>
                                        <li>Text Completion (Form-based bot that generates text in Markdown format)</li>
                                        <li>Chat Completion (ChatGPT-like chatbot)</li>
                                        <li>Image Generation (Form-based bot that generates images)</li>
                                    </ul>
                                    <p>What features does each widget have?</p>
                                    <ul>
                                        <li>Configurable OpenAI settings (control how the AI responds to your users)</li>
                                        <li>Rate Limiter (control how fast your user can generate results)</li>
                                        <li>Custom Styling (edit your widget's appearance with our widget editor)</li>
                                        <li>Monetizable (earn money by allowing your users to pay upfront)</li>
                                        <li>Embeddable (embed anywhere where you can insert an HTML code)</li>
                                        <li>Embeddings (ability to use content from your file documents to answer user prompts)</li>
                                        <li>and more...</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Docs