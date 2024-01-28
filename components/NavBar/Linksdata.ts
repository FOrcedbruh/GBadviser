import homeImg from './../../images/homeImg.svg';
import requestImg from './../../images/requsetImg.svg';
import noticeImg from './../../images/ticketImg.svg';
import supportImg from  './../../images/supportImg.svg';
import usersImg from './../../images/usersImg.svg';
import starImg from './../../images/starImg.svg';
import statisticImg from './../../images/statisticImg.svg';
import categoriesImg from './../../images/fileImg.svg';
import questionImg from './../../images/questionImg.svg';
import updatesImg from './../../images/usersImg.svg';
import settingsImg from './../../images/settingsImg.svg';
import profileImg from './../../images/profileImg.svg';




interface linksType {
    id: number
    title: string,
    href: string,
    icon: string
}

export const MainLinks: linksType[] = [
    {
        id: 0,
        title: 'Главная',
        href: '/',
        icon: homeImg
    },
    {
        id: 1,
        title: 'Запросы',
        href: 'requests',
        icon: requestImg
    },
    {
        id: 2,
        title: 'Заметки',
        href: 'notices',
        icon: noticeImg
    },
    {
        id: 3,
        title: 'Категории',
        href: 'categories',
        icon: categoriesImg
    },
    {
        id: 4,
        title: 'Пользователи',
        href: 'users',
        icon: usersImg
    },
    {
        id: 5,
        title: 'Статистика',
        href: 'statistic',
        icon: statisticImg
    },
    {
        id: 6,
        title: 'Избранное',
        href: 'favourite',
        icon: starImg
    },
    {
        id: 7,
        title: 'Поддержка',
        href: 'support',
        icon: supportImg
    }
]

export const InfoLinks: linksType[] = [
    {
        id: 0,
        title: 'База знаний',
        href: '/base_knowledge',
        icon: questionImg
    },
    {
        id: 1,
        title: 'Обновления',
        href: '/updates',
        icon: updatesImg
    }
]



export const SettingsLinks: linksType[] = [
    {
        id: 0,
        title: 'Профиль',
        href: '/profile',
        icon: profileImg
    },
    {
        id: 1,
        title: 'Общие настройки',
        href: 'main_settings',
        icon: settingsImg
    }
]