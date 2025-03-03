import Breadcrumb from '@/app/components/Breadcrumb'
import Feature from '@/app/components/home/Feature'
import React from 'react'

const Features = () => {
    return (
        <>
            <Breadcrumb title="Features" content="We offer a diverse set of features tailored to elevate your brand's presence." image="contact-vector.svg" />
            <Feature />
        </>
    )
}

export default Features