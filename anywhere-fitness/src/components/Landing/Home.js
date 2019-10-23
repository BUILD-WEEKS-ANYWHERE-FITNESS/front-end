import React from 'react';
import { Container } from 'reactstrap';
import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";
const FadeInDownAnimation = keyframes`${fadeInDown}`;
const FadeInDownDiv = styled.div`animation: 2s ${FadeInDownAnimation};`;


const Home = () => {
    return (
        <>
        <FadeInDownDiv>
            <section className="main-hero">
                <div className="hero-image">
                    <Container>
                        <div className="main-heading-block">
                            <h2>Take your fitness anywhere</h2>
                            <h3>Empowering you to take control of your health</h3>
                        </div>
                    </Container>
                </div>
            </section>
            </FadeInDownDiv>
            <main className="front-page-sections">
                <Container>
                    <div className="section-content">
                        <div className="img-container">
                            <img src={require('../../images/workout-woods.jpg')} alt="Man working out in wooded area" className="img-fluid" />
                        </div>
                        <div className="content-card primary-card">
                            <div className="card-text">
                                <h4>Take the stress away from planning</h4>
                                <p>Whatever it is that you're planning for, it doesn't have to be boring or difficult. Have fun doing it with ease.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </main>
            <section className="front-page-sections secondary-section">
                <Container>
                    <div className="section-content">
                        <div className="content-card secondary-card">
                            <div className="card-text">
                                <h4>Get the whole crew involved</h4>
                                <p>Easily include everyone in your plans by sharing your ideas. Get inspired by others and share the excitement.</p>
                            </div>
                        </div>
                        <div className="img-container">
                            <img src={require('../../images/workout-beach.jpg')} alt="Woman doing yoga by the beach." className="img-fluid" />
                        </div>
                    </div>
                </Container>
            </section>
            <section className="front-page-sections features">
                <Container>
                    <div className="features-parent">
                        <div className="feature-block">
                            <i className="fas fa-plane-departure"></i>
                            <h3>Vacation Planning</h3>
                            <p>Plan that trip for an exotic adventure</p>
                        </div>
                        <div className="feature-block">
                            <i className="fas fa-home"></i>
                            <h3>Goals Planning</h3>
                            <p>Set long term or short term goals with ease</p>
                        </div>
                        <div className="feature-block">
                            <i className="fas fa-users"></i>
                            <h3>Share Your Plans</h3>
                            <p>Share your plans with confidence</p>
                        </div>
                    </div>
                </Container>
            </section>
            </>
    )
}

export default Home;
