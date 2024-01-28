'use client'
import styles from './layout.module.css';
import Image from 'next/image';
import backArrow from './../../images/backArrow.svg';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



interface LinksType {
    id: number,
    title: string,
    href: string,
}

const Links: LinksType[] = [
    {
        id: 0,
        title: 'Первичная настройка',
        href: '/base_knowledge'
    },
    {
        id: 1,
        title: 'Профиль пользователя',
        href: '/base_knowledge/user_profile'
    },
    {
        id: 2,
        title: 'Изменение общих настроек',
        href: '/base_knowledge/changing_general_settings'
    },
    {
        id: 3,
        title: 'Дополнительные возможности',
        href: '/base_knowledge/additional_features'
    },
    {
        id: 4,
        title: 'Отправка запросов',
        href: '/base_knowledge/sending_requests'
    },
    {
        id: 5,
        title: 'Работа со стастистикой',
        href: '/base_knowledge/working_with_statistics'
    }
    
]





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