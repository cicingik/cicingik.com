import * as React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/config'

import { Layout } from '../components/layout'
import { Hero } from '../components/Hero'
import { Heading } from '../components/Heading'


export default function Index() {
    return (
        <div>
            <Helmet title={config.siteTitle}/>

            <div className="container">
                <div className="hero-wrapper">
                    <Hero title="Hey, I'm cicingik!" index>
                        <p className="hero-description small width">
                            Welcome to my digital garden. 🌱
                            <br/>
                            <br/>
                            I'm a software developer in Chicago. I make
                            open-source projects and write about code, design, and life. I like
                            accordions, drawing, sci-fi, reading, and gaming.
                        </p>
                        <br/>
                        <p>
                            <small className="text-muted">
                                <em>Last updated: February 5th, 2023</em>
                            </small>
                        </p>
                    </Hero>
                    <div className="decoration">
                        <img
                            src="/millenium-falcon.png"
                            alt="RAM Ram"
                            className="image hero-image"
                            title="RAM Ram"
                        />
                    </div>
                </div>
            </div>

            <div className="container">

                <section className="segment large">
                    <Heading title="Contact" />
                    <p>
                        Reach me on email.
                    </p>
                    <p>
                        <a
                            href="mailto:danysatyanegara@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button large highlighted"
                        >
                            Sent Email
                        </a>
                    </p>
                </section>
            </div>

        </div>
    )
}

Index.Layout = Layout
