/**
 * @copyright 2025 <>
 * @license Apache-2.0
 */

import { t } from "i18next";
import { ButtonPrimary } from "./Button";
import { useTranslation } from "react-i18next";
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/Duber117'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jhonnier-duberly-parada-valderrama-4248b4237/'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/dub._.117/'
    },
    {
      label: 'X',
      href: 'https://x.com/Dxp117'
    },
  ];

const Footer = () => {
  const { t } = useTranslation(["welcome"]);
  const sitemap = [
    {
      label: t('Home'),
      href: '#home'
    },  
    {
      label: t('About'),
      href: '#about'
    },
    {
      label: t('Work'),
      href: '#work'
    },
    // {
    //   label: 'Reviews',
    //   href: '#reviews'
    // },
    {
      label: t('Contact'),
      href: '#contact'
    }
  ];
    return (
<footer className="section">
    <div className="container">
        <div className="lg:grid lg:grid-cols-2">
            <div className="mb-10">
                <h2 className="headline-1 mb-8 lg:max-w-[12ch]">{t("Let's work together today!")}</h2>
                <ButtonPrimary 
                href="mailto:dubervalderrama8@gmail.com"
                label={t("Start project")}
                icon="chevron_right" />
            </div>
            <div className="grid grid-cols-2 gap-4 lg:pl-20">
                <div>
                <p className="mb-2">{t("Sitemap")}</p>
                <ul>
                    {sitemap.map(({label,href}, key)=>(
                        <li key={key}>
                            <a href={href} 
                            className="block text-sm text-zinc-400 py-1 transition-colors
                            hover:text-zinc-200"
                                >{label}
                            </a>
                        </li>
                    ))}
                </ul>
                </div>
                <div>
                <p className="mb-2">{t("Socials")}</p>
                <ul>{socials.map(({label,href}, key)=>(
                    <li key={key}>
                        <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors
                            hover:text-zinc-200" target="_blank">{label}</a>
                    </li>
                ))}</ul>
            </div>
            </div>

        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
            <a href="" className="">
                <img src="/images/Logo.png" alt="logo" width={100} height={100} />
            </a>
            <p className="text-zinc-500 text-sm">&copy; 2025 <span className="text-zinc-200">Dxp-117</span></p>
        </div>
    </div>
</footer>
    );
    }

export default Footer;