const QUOTATION_MARKS_LEFT = '\u{00AB}';
const QUOTATION_MARKS_RIGHT = '\u{00BB}';
const DASH = '\u{2013}';

export type SubArrayType = {
    date: string;
    description: string;
};

export type MockDataType = {
    number: number;
    name: string;
    dateFrom: string;
    dateTo: string;
    subArray: SubArrayType[];
};

export const mockData: MockDataType[] = [
    {
        number: 1,
        name: 'Технологии',
        dateFrom: '1980',
        dateTo: '1986',
        subArray: [
            {
                date: '1980',
                description: 'Sinclair Research выпускает домашний компьютер ZX80',
            },
            {
                date: '1982',
                description:
                    'Появился домашний компьютер ZX Spectrum, выпущенный британской компанией Sinclair Research',
            },
            {
                date: '1984',
                description: 'Осенью на рынке начали продавать модель компьютера ZX Spectrum+',
            },
            {
                date: '1985',
                description: 'Компьютер ZX Spectrum 128 впервые представлен в Испании',
            },
            {
                date: '1986',
                description: 'Бренд Sinclair приобретен компанией Amstrad',
            },
        ],
    },
    {
        number: 2,
        name: 'Кино',
        dateFrom: '1987',
        dateTo: '1991',
        subArray: [
            {
                date: '1987',
                description: `${QUOTATION_MARKS_LEFT}Хищник${QUOTATION_MARKS_RIGHT}/Predator, США (реж. Джон Мактирнан)`,
            },
            {
                date: '1988',
                description: `${QUOTATION_MARKS_LEFT}Кто подставил кролика Роджера${QUOTATION_MARKS_RIGHT}/Who Framed Roger Rabbit, США (реж. Роберт Земекис)`,
            },
            {
                date: '1989',
                description: `${QUOTATION_MARKS_LEFT}Назад в будущее 2${QUOTATION_MARKS_RIGHT}/Back To The Future 2, США (реж. Роберт Земекис)`,
            },
            {
                date: '1990',
                description: `${QUOTATION_MARKS_LEFT}Крепкий орешек 2${QUOTATION_MARKS_RIGHT}/Die Hard 2, США (реж. Ренни Харлин)`,
            },
            {
                date: '1986',
                description: `${QUOTATION_MARKS_LEFT}Семейка Аддамс${QUOTATION_MARKS_RIGHT}/The Addams Family, США (реж. Барри Зонненфельд)`,
            },
        ],
    },
    {
        number: 3,
        name: 'Литература',
        dateFrom: '1992',
        dateTo: '1997',
        subArray: [
            {
                date: '1992',
                description: `Нобелевская премия по литературе ${DASH} Дерек Уолкотт, ${QUOTATION_MARKS_LEFT}За блестящий образец карибского эпоса в 64 разделах${QUOTATION_MARKS_RIGHT}`,
            },
            {
                date: '1994',
                description: `${QUOTATION_MARKS_LEFT}Бессонница${QUOTATION_MARKS_RIGHT} ${DASH} Стивена Кинга`,
            },
            {
                date: '1995',
                description: `Всемирная премия фэнтези за лучший роман ${DASH} Джеймс Морроу, ${QUOTATION_MARKS_LEFT}Towing Jehovah${QUOTATION_MARKS_RIGHT}`,
            },
            {
                date: '1996',
                description: `${QUOTATION_MARKS_LEFT}Дневник Бриджет Джонс${QUOTATION_MARKS_RIGHT} ${DASH} роман Хелен Филдинг`,
            },
            {
                date: '1997',
                description: 'Дарио Фо получает Нобелевскую премию по литературе',
            },
        ],
    },
    {
        number: 4,
        name: 'Театр',
        dateFrom: '1999',
        dateTo: '2004',
        subArray: [
            {
                date: '1999',
                description: `Премьера балета ${QUOTATION_MARKS_LEFT}Золушка${QUOTATION_MARKS_RIGHT} в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона`,
            },
            {
                date: '2000',
                description: `Возобновлено издание журнала ${QUOTATION_MARKS_LEFT}Театр${QUOTATION_MARKS_RIGHT}`,
            },
            {
                date: '2002',
                description: `Премьера трилогии Тома Стоппарда ${QUOTATION_MARKS_LEFT}Берег Утопии${QUOTATION_MARKS_RIGHT}, Королевский Национальный театр, Лондон`,
            },
            {
                date: '2003',
                description: `В Венеции после семилетних восстановительных работ торжественно открылся оперный театр ${QUOTATION_MARKS_LEFT}Ла Фениче${QUOTATION_MARKS_RIGHT}`,
            },
            {
                date: '2004',
                description: `В Московском драматическом театре им. А. С. Пушкина поставлен спектакль ${QUOTATION_MARKS_LEFT}Кот в сапогах${QUOTATION_MARKS_RIGHT} Ш.Перро`,
            },
        ],
    },
    {
        number: 5,
        name: 'Спорт',
        dateFrom: '2006',
        dateTo: '2014',
        subArray: [
            {
                date: '2006',
                description: 'Баскетбольный клуб ЦСКА стал победителем национального первенства России',
            },
            {
                date: '2008',
                description: 'С 8 по 14 августа в Пекине прошли 29-е летние Олимпийские игры',
            },
            {
                date: '2010',
                description: `13${DASH}28 февраля в Ванкувере: зимние Олимпийские игры`,
            },
            {
                date: '2012',
                description: `2 августа ${DASH} летние Олимпийские игры`,
            },
            {
                date: '2014',
                description: 'XXII зимние Олимпийские игры (Сочи, Россия)',
            },
        ],
    },
    {
        number: 6,
        name: 'Наука',
        dateFrom: '2015',
        dateTo: '2022',
        subArray: [
            {
                date: '2015',
                description: `13 сентября ${DASH} частное солнечное затмение, видимое в Южной Африке и части Антарктиды`,
            },
            {
                date: '2016',
                description: `Телескоп ${QUOTATION_MARKS_LEFT}Хаббл${QUOTATION_MARKS_RIGHT} обнаружил самую удалённую из всех известных галактик, получившую обозначение GN-z11`,
            },
            {
                date: '2017',
                description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
            },
            {
                date: '2020',
                description: 'Корабль Crew Dragon вернулся на Землю в результате первого пилотируемого полёта',
            },
            {
                date: '2021',
                description: 'Первый удачный запуск ракеты LauncherOne и вывод десяти спутников NASA на орбиту',
            },
            {
                date: '2022',
                description: `Учёные с помощью телескопа ${QUOTATION_MARKS_LEFT}Хаббл${QUOTATION_MARKS_RIGHT} обнаружили чёрную дыру, которая создаёт звёзды, а не поглощает их`,
            },
        ],
    },
];
