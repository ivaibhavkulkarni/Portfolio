import Linkedin from '../assets/linkedin.png'
import X from '../assets/twitter-icon-filled-256.png'
import Leetcode from '../assets/leetcode.png'
import github from '../assets/github-logo.png'
import vercel from '../assets/Vercel Logo.png'
import Node from '../assets/Node.js_logo.svg'
import React from '../assets/React-icon.svg'
import Ex from '../assets/expressjs_logo_icon_169185.png'
import Mongo from '../assets/Mongodb-PNG-Pic.png'
import SQL from '../assets/SQL.png'
import CSS from '../assets/CSS3.png'
import HTML from '../assets/HTML5.png'
import Js from '../assets/JavaScript-logo.png'
import Python from '../assets/python-5-logo-png-transparent.png'
import Displaypicture from '../assets/IMG_0955 (1).jpg' 
import { Component } from 'react'
import './index.css'


const projects = [
    { name: 'To-do Application Using JavaScript', link: 'https://github.com/ivaibhavkulkarni/JavaScript-Projects/tree/main/Project-13%20Todo%20Application' },
    { name: 'Wikipedia Web App', link: 'https://github.com/ivaibhavkulkarni/JavaScript-Projects/tree/main/Project-19%20Wikipedia%20Search%20App' },
    { name: 'Bookmark Maker', link: 'https://github.com/ivaibhavkulkarni/JavaScript-Projects/tree/main/Project-27%20Bookmark%20Maker' },
    { name: 'Speed Typing Test', link: 'https://github.com/ivaibhavkulkarni/JavaScript-Projects/tree/main/Project-28%20Typing%20Test' },
    { name: 'Library Management System', link: 'https://github.com/ivaibhavkulkarni/JavaScript-Projects/tree/main/Project-29%20Library%20Books%20search' },
    { name: 'Guessing Number Game', link: 'https://github.com/ivaibhavkulkarni/JavaScript-Projects/tree/main/Project-4%20Guessing%20Number%20Game' },
    { name: 'Counter Application Using React', link: 'https://github.com/ivaibhavkulkarni/Projects-Node-JS/tree/main/Projects/Project-1%20Counter%20App/counter-app' },
    { name: 'Calculation Game App', link: 'https://github.com/ivaibhavkulkarni/JavaScript-Projects/tree/main/Project-9%20Calculation%20Game' },
    { name: 'Image Resizing Tool', link: 'https://github.com/ivaibhavkulkarni/JavaScript-Projects/tree/main/Project-8%20Sizing%20an%20Image' },
    { name: 'ChatBot UI', link: 'https://github.com/ivaibhavkulkarni/JavaScript-Projects/tree/main/Project-15%20ChatBot'}
];



class Profolio extends Component{
    render(){
        return(
            <div className='main-container'>
                <div className='bg-container'>
                        <div className='img-container'>
                            <img src={Displaypicture} alt='Display Picture' className='display-picture'/>
                        </div>
                        <div>
                            <h1 className='name-heading'>Vaibhav Kulkarni</h1>
                            <p className='title'>Software Engineer</p>
                        </div>
                </div>
                        <div className='skill-projects'>
                            <div className='skills-container'>
                                <h1 className='skill-heading'>Skills</h1>
                                <hr/>
                                <div>
                                    <img src={Python} alt='Python' className='skill-logo logo-img'/>
                                    <img src={Js} alt='JavaScript' className='skill-logo logo-img'/>
                                    <img src={SQL} alt='SQL' className='sql-logo logo-img'/>
                                </div>
                                <div>
                                    <img src={HTML} alt='HTML' className='skill-logo logo-img'/>
                                    <img src={CSS} alt='CSS' className='css-img logo-img'/>
                                </div>
                                <div>
                                    <img src={Mongo} alt='MongoDB' className='mern-logo logo-img'/>
                                    <img src={Ex} alt='Express Js' className='mern-logo logo-img'/>
                                    <img src={React} alt='React Js' className='mern-logo logo-img'/>
                                    <img src={Node} alt='Node Js' className='mern-logo logo-img'/>
                                </div>
                                <div>
                                    <img src={vercel} alt='Vercel' className='skill-logo logo-img'/>
                                    <img src={github} alt='Github' className='skill-logo logo-img'/>
                                </div>
                            </div> 
                            <div className='projects-container'>
                                <h1 className='skill-heading'>Projects</h1>
                                <hr/>
                                <ul>
                                    {projects.map((project, index) => (
                                    <li key={index}>
                                        <a href={project.link} target='_blank' rel='noopener noreferrer'>{project.name}</a>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='contact-container'>
                                <h1 className='skill-heading'>Coding Profile</h1>
                                <hr/>
                                <div>
                                <a href="https://github.com/ivaibhavkulkarni" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt='Github' className='skill-logo logo-img'/>
                                </a>
                                <a href="https://leetcode.com/u/user7623xD/" target="_blank" rel="noopener noreferrer">
                                    <img src={Leetcode} alt='Github' className='leetcode logo-img'/>
                                </a>
                                </div>
                                <h1 className='skill-heading'>Contact</h1>
                                <hr/>
                                <a href="mailto:vaibhav.kulkarni0359@gmail.com">Vaibhav.kulkarni0359@gmail.com</a>
                                <div>
                                <a href="https://www.linkedin.com/in/vaibhav-kulkarni-7230051ab/" target="_blank" rel="noopener noreferrer">
                                    <img src={Linkedin} alt='Github' className='social-logo skill-logo logo-img'/>
                                </a>
                                <a href="https://x.com/ivaibhavkulkarn" target="_blank" rel="noopener noreferrer">
                                    <img src={X} alt='Github' className='social-logo skill-logo logo-img'/>
                                </a>
                                </div>
                            </div>
                        </div>
            </div>
        )
    }
}

export default Profolio;