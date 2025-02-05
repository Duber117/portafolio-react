import React from "react";
import SkillCard from "./SkillCard";
import { useTranslation } from "react-i18next";

const skillItem = [
    {
      imgSrc: '/images/laravel-2.svg',
      label: 'Laravel',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/livewire.svg',
      label: 'Livewire',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/postgresql.svg',
      label: 'PostgreSQL',
      desc: 'Database'
    },
  ];

const Skill = () => {
      const { t } = useTranslation(["welcome"]);
  return (
<section className="section">
    <div className="container">
        <h2 className="headline-2 reveal-up">{t("Tools used")}</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">{t("Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.")}</p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
            {
                skillItem.map(({imgSrc, label, desc}, key)=>(
                    <SkillCard imgSrc={imgSrc} label={label} desc={desc} key={key} classes="reveal-up"
                     />
                ))
            }
        </div>
    </div>
</section>
  );
}

export default Skill;