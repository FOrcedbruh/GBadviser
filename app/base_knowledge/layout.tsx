'use client'
import styles from './layout.module.css';
import Image from 'next/image';
import backArrow from './../../images/backArrow.svg';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Links } from '@/components/LinksData/linksForSettings';








const BaseLayout = ({children}: {children: React.ReactNode}) => {

    const router = useRouter();

    const pathname = usePathname();

    return (
        <section className={styles.window}>
           <div className={styles.menuBar}>
                <p onClick={() => router.back()}><Image src={backArrow} alt='' width={13} height={10}/> назад</p>
                <h1>Настройки профиля</h1>
                <div className={styles.links}>
                    <ul>
                        {Links.map(link => {
                            const isActive = pathname.endsWith(link.href);
                            return (
                                <li className={`${isActive ? 'activeLink' : ''}`} key={link.id}><Link style={{'color': `${isActive ? '#fff' : ''}`, 'fontWeight': `${isActive ? 'bold' : ''}`}} href={link.href}>{link.title}</Link></li>
                            )
                        })}
                    </ul>
                </div>
           </div>
           <main className={styles.container}>
                {children}
           </main>
        </section>
    )
}


export default BaseLayout;