import React from 'react'

import '../styles/About.css'

const About = () => {
  const calculate_age = () => {
    var today = new Date()
    var birthDate = new Date('1994-10-16')
    var age_now = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--
    }
    return age_now
  }
  return (
    <div className="about" id="about">
      <h2>Get To Know Me</h2>
      <div className="words">
        Hello internet stranger 🙂, I'm Olorunnishola Olamilekan, a frontend
        developer hailing from Nigeria. Here's a little about me 👇.
        <br />
        <br /> My coding journey has been a quest for crafting seamless user
        interactions and captivating digital experiences. Having spent a couple
        of years mastering this art, my appetite for innovation and growth
        remains insatiable 😏. While coding is my daily bread, I'm not just a
        tech nomad. I'm currently sailing through the waves of chemical
        engineering studies at Unilag 🤓, adding a dash of curiosity to my
        academic pursuits. Amidst code and classes, I've uncovered a quirky
        side, a penchant for wildlife documentaries that whisk me away to
        far-off lands 🌆, and the cheeky antics of Family Guy that never fail to
        tickle my funny bone 😂.
      </div>
    </div>
  )
}
export default About
