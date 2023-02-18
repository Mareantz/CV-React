import React from 'react';
import './App.css';
import profilePic from './eu.jpg';

function CV() {
  return (
    <div className="cv">
      <div className="left">
        <div className="profile">
          <img src={profilePic} alt="Profile" />
          <h1>Marian Ciotir</h1>
          <h2>Trainee</h2>
        </div>
        <div className="contact">
          <h2>Contact Information</h2>
          <ul>
            <li>Email: <a href="mailto:marianciotir@gmail.com">marianciotir@gmail.com</a> </li>
            <li>Phone: +40 754 081 179</li>
            <li>Address: Aleea Curcubeului 5, 710142, Botosani, RO</li>
          </ul>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <ul>
            <li><p>React</p></li>
          <div className="light-gray round-xlarge">
            <div className="container center round-xlarge red fifth">20%</div>
          </div>
          
            <li><p>JavaScript</p></li>
            <div className="light-gray round-xlarge">
            <div className="container center round-xlarge red fifth">20%</div>
          </div>
            <li><p>HTML</p></li>
            <div className="light-gray round-xlarge">
            <div className="container center round-xlarge red half">50%</div>
          </div>
            <li><p>CSS</p></li>
            <div className="light-gray round-xlarge">
            <div className="container center round-xlarge red half">50%</div>
          </div>
          <li></li>
          </ul>
          <h2>Languages</h2>
          <ul>
            <li><p>Romanian</p></li>
            <div className="light-gray round-xlarge">
            <div className="container center round-xlarge red">100%</div>
          </div>
          <li><p>English</p></li>
            <div className="light-gray round-xlarge">
            <div className="container center round-xlarge red">100%</div>
          </div>
          <li><p>Spanish</p></li>
            <div className="light-gray round-xlarge">
            <div className="container center round-xlarge red fifth">20%</div>
          </div>
          </ul>
        </div>
      </div>
      <div className="separator"></div>
      <div className="right">
        <h1>Short Bio</h1>
        <p>My name is Ciotir Marian-Augustin, I am 19 years old and I am from Botosani, Romania. Currently I am studying for my Computer Science degree at University ,,Alexandru Ioan Cuza" of Iasi. In my free time I like to play games, listen to music, or hang out with friends or by myself.</p>
          <h1>Education</h1>
          <h2>Bachelor of Science in Computer Science</h2>
          <h3>University ,,Alexandru Ioan Cuza" of Iasi</h3>
          <p>September 2022 - July 2025 ( Expected )</p>
          <h2>High school diploma</h2>
          <h3>Colegiul national ,,Mihai Eminescu" Botosani</h3>
          <p>September 2018 - June 2022</p>
          <h1>Experience</h1>
          <h2>Web Developer</h2>
          <h3>Company 1</h3>
          <p>Period 1 - Period 2</p>
          <ul>
            <li>Amet occaecat ipsum enim culpa cillum laborum tempor incididunt. Lorem aute eu Lorem dolore nulla veniam ut dolore voluptate enim cillum. Duis ex dolore nulla nostrud minim velit irure magna id dolor aliqua nostrud. Nulla consequat id ullamco pariatur veniam eu. Dolore occaecat dolore ut irure. Pariatur ex reprehenderit consequat tempor labore qui nulla non qui aliquip reprehenderit nostrud Lorem duis. Excepteur anim dolor aliqua dolor.</li>
            <li>Duis labore esse voluptate eu est ex. Ut nulla culpa irure in sint commodo Lorem culpa. Exercitation esse ipsum nisi esse tempor ex minim aute pariatur cupidatat ex dolor pariatur. Cupidatat aliquip eiusmod ea in elit occaecat excepteur in ex occaecat in sint officia cillum. Enim laboris aute deserunt anim exercitation fugiat laboris anim proident aliqua Lorem nostrud aliquip.</li>
            <li>Exercitation aute Lorem velit nisi mollit. Lorem laborum commodo anim amet nisi ut mollit est mollit. Velit deserunt do fugiat exercitation ut adipisicing eiusmod ad commodo fugiat nulla. Anim aliquip est exercitation ut proident eu duis aliquip nulla aute. Eu sit commodo cupidatat ullamco minim fugiat do reprehenderit Lorem.</li>
          </ul>
        <h1>Hobbies</h1>
        <ul>
            <li>Gaming</li>
            <li>Music</li>
            <li>Socializing</li>
        </ul>
      </div>
    </div>
  );
}

export default CV;
