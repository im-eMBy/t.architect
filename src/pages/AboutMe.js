import aboutMeImage from "../images/about-me.png";

export const AboutMe = () => {

    return <div className="main__container-inner about-me__container">
        <div className="about-me__column about-me__column--first">
            <h1>About Me</h1>
            <p>Hi! I’m Tomek Jakubowski. I’m glad you’re here on my portfolio website. If you wanna work with me please don’t hesitate to contact me:</p>
            <p>Mobile:<br /> (+48) xxx-xxx-xxx</p>
            <p>Mail:<br /> jakubowszki@gmail.com</p>
        </div>
        <div className="about-me__column about-me__column--second">
            <p>I have a lot of professional experience and several victories in competitions. I am currently working full time in 22 architects in Warsaw. In his free time he designs interiors for individual clients. Hence, I strongly encourage you to familiarize yourself with my interior designs.</p>
            <p>Personally, I am a very open-minded and outgoing person. Contact and cooperation is easy with me.</p>
            <p>My interests are snowboarding, surfing, drawing and my bike.</p>
            <p>I need to write something more about you because I feel like it makes more harmony in text. What do you think?</p>
            <p>And maybe one more line. I think we can figure it out what you should write here. It will not be that hard I guess. A few more words.</p>
        </div>
        <div className="about-me__column about-me__column--third">
            <div className="about-me__image-container">
                <img src={aboutMeImage} alt="Me" />
            </div>
            <div className="about-me__socials-container">
                <a href="/">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.876 5.124C26.712 1.96 22.33 0 17.5 0C12.67 0 8.288 1.96 5.124 5.124C1.96 8.288 0 12.67 0 17.5C0 27.167 7.833 35 17.5 35C22.33 35 26.712 33.04 29.876 29.876C33.04 26.712 35 22.33 35 17.5C35 12.67 33.04 8.288 29.876 5.124ZM13.188 25.298H9.562V13.601H13.188V25.298ZM11.361 12.068C10.178 12.068 9.219 11.102 9.219 9.905C9.219 8.715 10.178 7.749 11.361 7.749C12.544 7.749 13.503 8.715 13.503 9.905C13.503 11.102 12.544 12.068 11.361 12.068ZM26.761 25.298H23.156C23.156 25.298 23.156 20.846 23.156 19.159C23.156 17.472 22.512 16.534 21.182 16.534C19.733 16.534 18.977 17.514 18.977 19.159C18.977 20.958 18.977 25.298 18.977 25.298H15.505V13.601H18.977V15.176C18.977 15.176 20.02 13.244 22.505 13.244C24.983 13.244 26.761 14.756 26.761 17.892C26.761 21.028 26.761 25.298 26.761 25.298Z" fill="#0F1D40" />
                    </svg>
                </a>
                <a href="/">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.876 5.124C26.712 1.96 22.33 0 17.5 0C12.67 0 8.288 1.96 5.124 5.124C1.96 8.288 0 12.67 0 17.5C0 27.167 7.833 35 17.5 35C22.33 35 26.712 33.04 29.876 29.876C33.04 26.712 35 22.33 35 17.5C35 12.67 33.04 8.288 29.876 5.124ZM22.358 10.668C22.358 10.668 20.713 10.668 20.062 10.668C19.25 10.668 19.082 10.997 19.082 11.837C19.082 12.53 19.082 13.86 19.082 13.86H22.358L22.043 17.409H19.082V28.021H14.847V17.458H12.642V13.86H14.847C14.847 13.86 14.847 13.342 14.847 11.025C14.847 8.372 16.268 6.979 19.425 6.979C19.936 6.979 22.358 6.979 22.358 6.979V10.668Z" fill="#263BB9" />
                    </svg>
                </a>
                <a href="/">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.8769 5.12315C26.709 1.95535 22.3358 0 17.5 0C12.6642 0 8.29095 1.95535 5.12315 5.12315C1.95535 8.29095 0 12.6642 0 17.5C0 27.1646 7.8354 35 17.5 35C22.3358 35 26.709 33.0447 29.8769 29.8769C33.0447 26.709 35 22.3358 35 17.5C35 12.6642 33.0447 8.29095 29.8769 5.12315ZM19.1049 22.1255C17.8154 22.1255 16.6029 21.4317 16.1894 20.6398C16.1894 20.6398 15.4956 23.3941 15.3484 23.9197C14.8298 25.798 13.309 27.6762 13.1898 27.8304C13.1127 27.9355 12.9305 27.9005 12.9095 27.7603C12.8744 27.522 12.489 25.1532 12.9445 23.2259C13.1758 22.2517 14.4794 16.7221 14.4794 16.7221C14.4794 16.7221 14.1009 15.9581 14.1009 14.8298C14.1009 13.0637 15.1241 11.7391 16.3997 11.7391C17.486 11.7391 18.0116 12.5521 18.0116 13.5332C18.0116 14.6266 17.3178 16.2595 16.9604 17.7663C16.659 19.0348 17.5911 20.0651 18.8386 20.0651C21.1023 20.0651 22.6231 17.1636 22.6231 13.7225C22.6231 11.1013 20.864 9.14597 17.6612 9.14597C14.0378 9.14597 11.7811 11.8442 11.7811 14.8648C11.7811 15.9021 12.0895 16.638 12.5731 17.2056C12.7903 17.465 12.8254 17.5701 12.7413 17.8714C12.6852 18.0887 12.5521 18.6213 12.496 18.8246C12.4189 19.133 12.1736 19.2381 11.9003 19.1259C10.2323 18.4461 9.45434 16.6169 9.45434 14.5635C9.45434 11.1714 12.3138 7.10653 17.9906 7.10653C22.5461 7.10653 25.5457 10.4075 25.5457 13.9467C25.5457 18.6284 22.9385 22.1255 19.1049 22.1255Z" fill="#560212" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
}