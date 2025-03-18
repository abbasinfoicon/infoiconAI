import React from 'react'

const Breadcrumb = ({ title, content, image }) => {
    return (
        <section className="breadcrumb-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="breadcrumb-content">
                            <div>
                                <h2><img src="/assets/images/breadcrumb-title.png" className="img-fluid" alt="title-effect" />{title}</h2>
                                <p><i className="ri-subtract-line"></i>{content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-lg-inline-block d-none">
                        <div className="breadcrumb-img">
                            <img src={`/assets/svg/${image ? image : 'pricing-vector.svg'}`} className="img-fluid" alt="service" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumb