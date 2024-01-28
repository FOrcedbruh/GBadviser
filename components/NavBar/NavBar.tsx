'use client'

import styles from './NavBar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { MainLinks } from './Linksdata';
import { InfoLinks } from './Linksdata';
import { SettingsLinks } from './Linksdata';
import { usePathname } from 'next/navigation';











const NavBar: React.FC = () => {

    const pathname = usePathname();

    return (
     <section className={styles.window}>
        <div className={styles.mainLinks}>
            <ul>
                {MainLinks.map(link => {
                    const isActive = pathname.endsWith(link.href);
                    return (
                        <li className={isActive ? 'activeLink' : ''}   key={link.id}><Link style={{'color': `${isActive ? '#fff' : ''}`}}  href={`/${link.href}`}><Image src={link.icon} alt='' width={24} height={24}/> <p>{link.title}</p></Link></li>
                    )
                })}
            </ul>
        </div>
        <div className={styles.infoLinks}>
            <h3 className={styles.category}>
                Информация
            </h3>
            <ul>
                {InfoLinks.map(link => {
                    const isActive = pathname.endsWith(link.href);
                    return (
                        <li className={isActive ? 'activeLink' : ''} key={link.id}>
                            <Link style={{'color': `${isActive ? '#fff' : ''}`}} href={link.href}><Image src={link.icon} alt='' width={24} height={24}/> <p>{link.title}</p></Link>
                        </li>
                    )
                })}
                
            </ul>
        </div>
        <div className={styles.settingsLinks}>
            <h3 className={styles.category}>
                Настройки
            </h3>
            <ul>
                {SettingsLinks.map(link => {
                    const isActive = pathname.endsWith(link.href);
                    return (
                        <li className={isActive ? 'activeLink' : ''} key={link.id}>
                            <Link style={{'color': `${isActive ? '#fff' : ''}`}} href={link.href}><Image src={link.icon} alt='' width={24} height={24}/> <p>{link.title}</p></Link>
                        </li>
                    )
                })}
            </ul>
        </div>
        
     </section>
    )
}


export default NavBar;