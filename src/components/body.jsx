import React from 'react';
import CountdownTimer from './timer';
import '../styles/pages.css'; // Asegúrate de tener este archivo CSS configurado con tus estilos
import { Fade } from 'react-awesome-reveal'; // Importa el componente Fade de react-awesome-reveal
import Footer from './footer';

const sponsorsData = [
    { id: 1, name: "a16zCryptoResearch", image: "/img/a16zCryptoResearch.png", url:"https://a16zcrypto.com/"},
    { id: 2, name: "casper", image: "/img/casper.png", url:"https://casper.network/"},
    { id: 3, name: "hyperledgerFoundation", image: "/img/hyperledgerFoundation.png", url:"https://www.hyperledger.org/" },
    { id: 4, name: "ibm", image: "/img/ibm.png", url:"https://www.ibm.com/" },
    { id: 5, name: "iohk", image: "/img/iohk.png", url:"https://iohk.io/" },
    { id: 6, name: "jpMorganChaseAndCo", image: "/img/jpMorganChaseAndCo.png", url:"https://www.jpmorganchase.com/" },
    { id: 7, name: "nttResearch", image: "/img/nttResearch.png", url:"https://ntt-research.com/" },
    { id: 8, name: "pqshield", image: "/img/pqshield.png", url:"https://pqshield.com/" },
    // Agrega más sponsors según sea necesario
];

const speakersData = [
    { name: "Fred Zhou", image: "/img/Fred Zhou.jpg", topic: "What Web 3.0 Means for Enterprises" },
    { name: "Adrian Zduńczyk", image: "/img/Adrian Zdunczyk.jpg", topic: "Value Creation in the Metaverse" },
    { name: "Victoria Scholar", image: "/img/Victoria Scholar.jpg", topic: "The Role of Stablecoins in a Decentralized Ecosystem" },
    { name: "Stephen Lindsay", image: "/img/Stephen Lindsay.jpg", topic: "DAOs: New Breed of Internet-Native Organizations" },
    { name: "Daniel Antcliff", image: "/img/Daniel Antcliff.jpg", topic: "Maximizing ESG Impact with Blockchain" },
    { name: "Ilyas Vali", image: "/img/Ilyas Vali.jpg", topic: "Bridging DeFi and CeFi" },
    { name: "Russell Armand", image: "/img/Russell Armand.jpg", topic: "Web 3 Gaming: The New Frontier?" },
    { name: "Danny Winn", image: "/img/Danny Winn.jpg", topic: "Decrypting the Regulatory Landscape of Virtual Assets" },
    { name: "Lex Sokolin", image: "/img/Lex Sokolin.jpg", topic: "Central Bank Digital Currencies, and Cross-Border Payments" },
    { name: "Pieter Vanhove", image: "/img/Pieter Vanhove.jpg", topic: "Web 3: The Future is Here and Now" },
    { name: "Lennix Lai", image: "/img/Lennix Lai.jpg", topic: "NFT Market Overview: Trends & Opportunities" },
    { name: "Delphine Forma", image: "/img/Delphine Forma.jpg", topic: "Interoperability - Challenges and Opportunities" }
];

const Body = () => {
    const deadline = new Date('July 15, 2024 17:30:00').getTime();

    return (
        <div className="body-container">
            <section className='headerContainer'>
                <h1 className='title'>CryptoGetExpo</h1>
                <h2 className='subTitle'>Global blockchain conference with industry leaders,<br />July 2024, Dubai.</h2>
            </section>
            <section className="about-event" id='About Us'>
                <p className='aboutText'>
                    <strong style={{ color: "rgb(41, 126, 255)" }}>CryptoGetExpo</strong> is a premier <strong>blockchain conference</strong> that unites influential figures and industry experts to shape the future of finance. Join us in <strong>Dubai</strong> on <strong>July 15, 2024</strong>, featuring top <em>crypto companies</em> and <em>blockchain entrepreneurs</em>. As a global <strong>crypto hub</strong>, <strong style={{ color: "rgb(41, 126, 255)" }}>CryptoGetExpo</strong> offers engaging discussions on cutting-edge <em>financial technologies</em> and extensive <em>networking opportunities</em> with participants from over <strong>30 countries</strong>.
                </p>
            </section>

            <section id="Speakers">
                <h2 className='speakersAndTopics'>Speakers and Topics</h2>
                <div className="speaker-grid">
                    {speakersData.map((speaker, index) => (
                        <Fade key={index} triggerOnce>
                            <div className="speaker-card">
                                <img src={speaker.image} alt={speaker.name} className="speaker-image" />
                                <div className="speaker-info">
                                    <h3 className="speaker-name">{speaker.name}</h3>
                                    <p className="speaker-topic">{speaker.topic}</p>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>
            </section>

            <section id="Sponsors" className='sponsors'>
                <div className="sponsors-grid">
                    {sponsorsData.map((sponsor) => (
                        <Fade key={sponsor.id} triggerOnce>
                            <div className="sponsor-card">
                                <a href={sponsor.url} target='_blank'><img className='sponsorsLogo' src={sponsor.image} alt={sponsor.name} /></a>
                            </div>
                        </Fade>
                    ))}
                </div>
            </section>

            <section className="event-details" id='Date'>
                <p className='date'>July 15, 2024 at 5:30 PM - Dubai, ATLANTIS, THE PALM</p>
                <CountdownTimer deadline={deadline} />
            </section>
            
            <Footer/>
        </div>
    );
};

export default Body;
