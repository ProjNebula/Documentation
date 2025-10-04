import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    <span className={styles.titlePrimary}>Atlas Map Xml</span>
                    <br />
                    <span className={styles.titleAccent}>Documentation</span>
                </Heading>
                <p className={styles.hero__subtitle}>A comprehensive guide on creating maps and game modes for Atlas</p>
                <div className={styles.buttons}>
                    <Link className="button button--primary button--lg" to="/docs/modules/core/main">
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}

function WelcomeSection() {
    return (
        <section className={styles.welcomeSection}>
            <div className="container">
                <Heading as="h2">Welcome!</Heading>

                <div className={styles.content}>
                    <Heading as="h3">What is Atlas?</Heading>
                    <p>
                        Atlas Game Manager is a Minecraft server modification for <Link to="https://www.papermc.io/">Paper</Link> that powers
                        multiplayer, objective-based game modes within Minecraft. Much like the <Link to="https://www.forgehub.com/">Forge</Link> game
                        mode of the popular video game franchise, <Link to="https://www.halowaypoint.com/">Halo</Link>, one can create their own game
                        modes through modifying the actual layout and design of the world, spawn points, team colors, game rules, weapons, tools,
                        objectives and more. Though unlike in Halo Forge, Minecraft is designed around building and design, which enables Atlas map
                        developers to create completely unique maps not based around a pre-existing map. Atlas is also an ever-evolving platform that
                        is driven by the community and the developers behind it.
                    </p>

                    <Heading as="h3">How can I use this website?</Heading>
                    <p>This website documents how to create your own maps for the Atlas plugin. Each map has two components:</p>

                    <ol>
                        <li>
                            Minecraft world containing <code>level.dat</code> and the <code>regions</code> folder.
                        </li>
                        <li>
                            The XML map configuration file, <code>map.xml</code>. This defines the elements of the map such as spawn points, team
                            colors, names, and more.
                        </li>
                    </ol>

                    <p>
                        This website primarily focuses on the latter, but a tutorial and guidelines for creating an Atlas map world can be{' '}
                        <Link to="/docs/modules/core/main">found too</Link>. We also do not provide instruction on how extensible markup language
                        (XML) files are written, instead you can <Link to="https://www.w3schools.com/xml/">look here</Link> for a basic introduction.
                        We recommend you use your favorite application that helps you to write XML files. The following programs work on most
                        operating systems and help to spot errors and inconsistencies in the code you write:
                    </p>

                    <table className={styles.editorTable}>
                        <tbody>
                            <tr>
                                <td>
                                    <Link to="https://code.visualstudio.com/">VS Code</Link>
                                </td>
                                <td>Free & open-source, by Microsoft.</td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="https://www.sublimetext.com/">Sublime Text</Link>
                                </td>
                                <td>$70, free download for evaluation of the product.</td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="http://brackets.io/">Brackets</Link>
                                </td>
                                <td>Free & open-source, by Adobe.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout title={`Welcome to ${siteConfig.title}`} description="A comprehensive guide on creating maps and game modes for Atlas">
            <HomepageHeader />
            <main>
                <WelcomeSection />
            </main>
        </Layout>
    );
}
