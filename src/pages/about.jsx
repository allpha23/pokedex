import Image from "next/image";

import styles from '../styles/About.module.css';

const About = () => {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga maxime reiciendis rerum sint amet quas fugit perferendis iusto excepturi debitis, ex at, quisquam similique recusandae labore. Molestiae ipsum nulla maxime.</p>
            <Image
                src="/images/charizard.png"
								width="300"
                height="300"
                alt="Charizard"
            />
        </div>
    );
}

export default About;
