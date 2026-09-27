import React from 'react'
import Hero from '../../components/WorkSpaceLayout/Hero';
import SpaceGallery from '../../components/WorkSpaceLayout/SpaceGallery';
import FeaturesAndPlans from '../../components/WorkSpaceLayout/FeaturesAndPlans';
import ContactForm from '../../components/WorkSpaceLayout/ContactForm';

export default function Home() {
    return (
        <>
            <Hero />
            <SpaceGallery />
            <FeaturesAndPlans />
            <ContactForm />
        </>
    )
}
