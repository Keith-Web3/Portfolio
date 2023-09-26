import React from 'react'
import Project from './Project.jsx'
import '../styles/Projects.css'

const Projects = () => {
  const projectsInfo = {
    one: {
      name: 'Team collaboration tool',
      desc: 'Thullo is the open source version of trello, a tool used to enhance team productivity with a variety of features including chats with team members, file sharing, visual enhancers e.t.c All boards in thullo are secured using robust RLS policies',
      liveLink: 'https://thulloo.netlify.app/',
      githubLink: 'https://github.com/Keith-Web3/Trullo---Trello-Clone',
      techs: ['React', 'SCSS', 'TypeScript', 'React Query'],
      isOpenSource: true,
    },
    two: {
      name: 'AudioPhile E-commerce',
      desc: 'AudioPhile is an e-commerce store for purchasing various audio equipments like speakers, headphones e.t.c Users can make payments via crypto or fiat',
      liveLink: 'https://gleeful-medovik-88e4a5.netlify.app/',
      githubLink: 'https://github.com/Keith-Web3/audiophile-e-commerce',
      techs: ['React', 'Node', 'Typescript', 'Framer motion'],
      isOpenSource: true,
    },
    three: {
      name: 'Kanban Task Manager',
      desc: 'A kanban task management tool to improve productivity',
      liveLink: 'https://incredible-bavarois-17a54a.netlify.app/',
      githubLink: 'https://github.com/Keith-Web3/Kanban-Task-Manager',
      techs: ['React', 'Typescript', 'Zustand', 'Framer motion'],
      isOpenSource: true,
    },
    four: {
      name: 'Chat App with video calling',
      desc: 'A chat app application which supports peer to peer video calls.',
      liveLink: 'https://astounding-choux-c5148e.netlify.app/',
      githubLink: 'https://github.com/Keith-Web3/Chat-application',
      techs: ['React', 'Typescript', 'Node', 'Agora-sdk', 'openai-api'],
      isOpenSource: true,
    },
    five: {
      name: 'Music streaming app',
      desc: 'A music streaming application',
      liveLink: 'https://clever-druid-5281ca.netlify.app/',
      githubLink: 'https://github.com/Keith-Web3/Musica-challenge',
      techs: ['HTML', 'SCSS', 'Javascript', 'spotify-api'],
      isOpenSource: true,
    },
  }
  return (
    <div className="Projects" id="projects">
      <h2>My Projects</h2>
      <div>
        <Project info={projectsInfo.one} />
        <Project info={projectsInfo.two} />
        <Project info={projectsInfo.three} />
        <Project info={projectsInfo.four} />
        <Project info={projectsInfo.five} />
      </div>
    </div>
  )
}

export default Projects
