import Navbar from '@/components/Navbar';
import './About.css';
const About = () => {
    return (
        <div className="about-page">
            <Navbar />
            <main className="about-container">
                <h1 className="about-title">About Café Delight</h1>
                <p className="about-description">
                    At Café Delight, we believe that every cup of coffee tells a story. Founded in 2022, our cozy café has become a haven for coffee lovers and a gathering spot for friends and family.
                </p>
                <p className="about-description">
                    Our baristas are passionate about crafting the perfect brew, using only the finest coffee beans sourced from around the world. Whether you&apos;re in the mood for a rich espresso or a velvety latte, we have something to satisfy every palate.
                </p>
                <p className="about-description">
                    We&apos;re not just about coffee; we also offer a selection of delicious pastries and snacks to complement your drink. Join us for a relaxing moment, whether you&apos;re catching up with friends, working on your laptop, or simply enjoying a moment of peace.
                </p>
                <p className="about-description">
                    Come visit us and experience the warmth and joy that only a cup of coffee can bring!
                </p>
            </main>
        </div>
    );
};
export default About;
