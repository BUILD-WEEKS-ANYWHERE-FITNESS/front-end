import React from 'react';
import { Container } from 'reactstrap';
//ANIMATION CODE
import { bounceInLeft } from 'react-animations'
import styled, { keyframes } from "styled-components";
const FadeInAnimation = keyframes`${bounceInLeft}`;
const FadeInDiv = styled.div`
  animation: 2s ${FadeInAnimation};
`;



const Home = () => {
    return (
        <>
        <FadeInDiv>
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
            </FadeInDiv>
            <main className="front-page-sections">
                <Container>
                    <div className="section-content">
                        <div className="img-container">
                            <img src={require('../../images/workout-woods.jpg')} alt="Man working out in wooded area" className="img-fluid" />
                        </div>
                        <div className="content-card primary-card">
                            <div className="card-text">
                                <h4>Mobile fitness for a mobile world</h4>
                                <p>No gym? No problem. With Anywhere Fitness, you have access to hundreds of trainer-led fitness classes wherever your go.</p>
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
                                <h4>New to Fitness?</h4>
                                <p>Our program has classes of all levels, allowing you to explore different methods of fitness at a skill level you feel comfortable with.</p>
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
                            <h3>Step 1:</h3>
                            <p>View our classes, and find a class that works best for you.</p>
                        </div>
                        <div className="feature-block">
                            <i className="fas fa-home"></i>
                            <h3>Step 2:</h3>
                            <p> Once you've found a class you'd like to join, hit "reserve a space".</p>
                        </div>
                        <div className="feature-block">
                            <i className="fas fa-users"></i>
                            <h3>Step 3:</h3>
                            <p>That's it! You're ready to go. Anytime, anywhere.</p>
                        </div>
                    </div>
                </Container>
            </section>
            </>
    )
}

export default Home;
