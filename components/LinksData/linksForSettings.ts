interface LinksType {
    id: number,
    title: string,
    href: string,
}

export const Links: LinksType[] = [
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