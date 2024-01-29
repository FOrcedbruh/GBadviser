'use client'
import styles from './Header.module.css';
import logo from './../../images/logo.svg';
import Image from 'next/image';
import search from './../../images/search.svg';
import messages from './../../images/messages.svg';
import notices from './../../images/notices.svg';
import avatar from './../../images/avatar.png';
import detArrow from './../../images/datArrow.svg';
import {  useState } from 'react';
import { MainLinks } from '../LinksData/LinksData';
import { SettingsLinks } from '../LinksData/LinksData';
import { InfoLinks } from '../LinksData/LinksData';
import { Links } from '../LinksData/linksForSettings';
import Link from 'next/link';
import Arrow from './../../images/forArrow.svg';





const Header: React.FC = () => {

    const [value, setValue] = useState<string>('');


    const valueHandler = (e: any) => {
        setValue(e.target.value);
    }

    const allLinks = [...MainLinks, ...SettingsLinks, ...InfoLinks, ...Links];

    const filteredLinks = allLinks.filter(link => {
        return link.title.toLowerCase().includes(value.toLowerCase());
    })



    return (
        <>
            {value &&<section className={styles.aura}>
                <article className={styles.searchResult}>
                            {filteredLinks.length != 0 ? <ul>
                                {value ? filteredLinks.map(link => {
                                    return (
                                        <li>
                                            <Link onClick={() => setValue('')} href={link.href}>{link.title.charAt(0).toUpperCase() + link.title.slice(1)}</Link> <Image src={Arrow} alt='' width={24} height={24}/>
                                        </li>
                                    )
                                }) : null}
                            </ul> : <p>Ничего не найдено</p>}
                </article>
            </section>}
            <header className={styles.window}>
                <section>
                    <div className={styles.logo}>
                        <Image src={logo} alt='' width={40} height={40}/> <h1>GB Adviser</h1>
                    </div>
                    <div style={{'zIndex': `${value ? 10 : ''}`}} className={styles.Inpt}>
                    <Image src={search} alt='' width={24} height={24}/>  <input  type="text" placeholder='Поиск...' value={value} onChange={e => valueHandler(e)}/>
                    </div>
                </section>
                
                
                <section className={styles.info}>
                    <Image src={messages} alt='' width={24} height={24}/>
                    <div className={styles.notices}><Image src={notices} alt='' width={24} height={24}/><p className={styles.sup}>5</p></div>
                    <div className={styles.profile}>
                        <Image src={avatar} alt='' width={40} height={40}/>
                        <h4>
                            Саша Смелая
                        </h4>
                        <Image src={detArrow} alt='' width={24} height={24}/>
                    </div>
                </section>
            </header>
        </>
       
    )
}


export default Header;