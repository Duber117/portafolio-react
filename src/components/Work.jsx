import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: 'https://iknowthatnow.com/wp-content/uploads/2022/03/Microsoft-Graph-API-and-Laravel.webp',
      title: '',
      tags: ['laravel', 'Breeze', 'Azure', 'MySQL', 'Microsoft'],
      projectLink: 'https://github.com/Duber117/azure-laravel-main'
    },
  ];

const Work = () => {
    return (
        <section className="" id="work">
            <div className="container">
               <h2 className="headline-2 mb-8 reveal-up">
                Mi portafoplio de proyectos
               </h2>

               <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,_1fr))]">
                {works.map(({imgSrc, title, tags, projectLink}, key)=>(
                    <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="reveal-up" />
                ))}
               </div>
            </div>
        </section>
    );
    }

export default Work;