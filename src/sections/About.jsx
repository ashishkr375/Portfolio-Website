import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
  <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
    <div className="col-span-1 xl:row-span-2">
      <div className="grid-container">
        <img src="assets/grid1.png" alt="profile-picture" className="w-full sm:h-[276px] h-fit object-contain" />

        <div>
          <p className="grid-headtext">Hi, I’m Ashish Kumar</p>
          <p className="grid-subtext">
            I'm a passionate web developer and engineer with a strong enthusiasm for creating innovative software solutions.
          </p>
          <a href='https://drive.google.com/file/d/13JMc3lwof9OvYwXMeBRum3tn8qQ5lJML/view?usp=drive_link' target="_blank" rel="noopener noreferrer">
          <Button name="Download Resume" isBeam containerClass="w-full mt-10" /> 
          </a>

        </div>
      </div>
    </div>

    <div className="col-span-1 xl:row-span-2">
      <div className="grid-container">
        <img src="assets/grid2.png" alt="tech-stack" className="w-full sm:h-[276px] h-fit object-contain" />

        <div>
          <p className="grid-headtext">Tech Stack</p>
          <p className="grid-subtext">
            I specialize in a variety of languages, frameworks, and tools, including Java, Python, Express, NodeJS, Next, ReactJS, JavaScript, Bootstrap, Tailwind CSS, HTML, and CSS.
          </p>
        </div>
      </div>
    </div>

    <div className="col-span-1 xl:row-span-2">
      <div className="grid-container">
        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
          <Globe
            height={326}
            width={326}
            backgroundColor="rgba(0, 0, 0, 0)"
            backgroundImageOpacity={0.5}
            showAtmosphere
            showGraticules
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            labelsData={[{ lat: 25.5941, lng: 85.1376, text: 'Patna, India', color: 'white', size: 15 }]}
          />
        </div>
        <div>
          <p className="grid-headtext">I’m based in Patna, India</p>
          <p className="grid-subtext">I'm open to remote work worldwide and flexible with time zone communications.</p>

          <a href="https://www.linkedin.com/in/ashish-kumar-nitp/" className="w-fit">
          <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
          </a>
        </div>
      </div>
    </div>

    <div className="xl:col-span-2 xl:row-span-3 text-white">
  <div className="xl:col-span-2 xl:row-span-3">
    <div className="grid-container">
      <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

      <div>
        <p className="grid-headtext">My Passion for Coding</p>
        <p className="grid-subtext">
          I love solving problems and building things through code. Programming isn't just my profession—it's my passion. I enjoy exploring new technologies, and enhancing my skills.
        </p>
        <p className="grid-subtext">
          I'm particularly passionate about Data Structures and Algorithms (DSA), and I regularly practice solving problems on platforms like LeetCode, HackerRank, and CodeForces. My proficiency in C++ has allowed me to tackle complex problems with ease, and I'm always looking to improve my skills and learn new concepts.
        </p>
        <ul>
          <li>
            <strong>Problem Solving Skills</strong>: I've developed strong problem-solving skills through regular practice on coding platforms, with a focus on DSA concepts like arrays, linked lists, stacks, queues, trees, and graphs.
          </li>
          <li>
            <strong>C++ Expertise</strong>: I'm proficient in C++ and have used it to solve a wide range of problems, from basic algorithms to complex data structures and system design challenges.
          </li>
          <li>
            <strong>Coding Platforms</strong>: I regularly participate on platforms like LeetCode, HackerRank, and CodeForces, where I've solved hundreds of problems and continue to improve my skills.
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
    <div className="xl:col-span-1 xl:row-span-2">
      <div className="grid-container">
      <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

        <div className="space-y-2">
          <p className="grid-subtext text-center">Get in touch</p>
          <div className="copy-container" onClick={handleCopy}>
            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">ashishk.dd22.cs@nitp.ac.in</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default About;
