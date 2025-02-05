/**
 * @copyright 2025 <>
 * @license Apache-2.0
 */
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation(["welcome"]);
    
    const aboutItems = [
        {
          label: t("Project done"),
          number: 5
        },
        {
          label: t('Years of experience'),
          number: 2
        }
      ];
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinx-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        {t("Welcome. I'm Duber, a web developer with a great ability to work in a team and create highly functional and aesthetic websites. Although I have little experience, my creativity, commitment and desire to learn drive me to constantly improve in every project I undertake.")}
                    </p>
                    <div className="flex flex-weap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({label,number},key)=>(
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>
                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }
                        <img src="/images/Logo.png" alt="Logo" className="ml-auto md:w-[100px] md:h-[100px]" width={100} height={100} />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;