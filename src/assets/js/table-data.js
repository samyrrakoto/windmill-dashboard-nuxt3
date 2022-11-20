const tableData = {
    tableHeaders:  [
        "Client", "Amount", "Status", "Date", "Actions"
    ],
    people: [
        {
            avatar:{ picture: 'candy-raton.jpeg', fullname: 'Candy Raton', title: 'Reputation Manager' },
            amount: '$863.45',
            status: 'approved',
            date: '11/07/2022',
            hasAction: true,
        },
        {
            avatar: { picture: 'lucie-dite.jpeg', fullname: 'Lucie Dité', title: 'Philosopher' },
            amount: '$369.95',
            status: 'pending',
            date: '10/31/2022',
            hasAction: true,
        },
        {
            avatar: { picture: 'marie-rouana.jpeg', fullname: 'Marie Rouana', title: 'Naturopath'},
            amount: '$86.15',
            status: 'approved',
            date: '09/11/2022',
            hasAction: true,
        },
        {
            avatar: { picture: 'roland-culet.jpeg', fullname: 'Roland Culet', title: 'Trader'},
            amount: '$1276.87',
            status: 'denied',
            date: '09/01/2022',
            hasAction: true,
        },
        {
            avatar: { picture: 'sylvie-bromasseur.jpeg', fullname: 'Sylvie Bromasseur', title: 'Adult Content Creator'},
            amount: '$15789.98',
            status: 'approved',
            date: '08/18/2022',
            hasAction: true
        },
        {
            avatar: { picture: 'terry-dicule.jpeg', fullname: 'Terry Dicule', title: 'Comedian'},
            amount: '$786.25',
            status: 'expired',
            date: '06/07/2022',
            hasAction: false,
        },
        {
            avatar: { picture: 'thea-louest.jpeg', fullname: 'Thea Louest', title: 'Historian'},
            amount: '$783.95',
            status: 'pending',
            date: '05/01/2022',
            hasAction: true,
        },
        {
            avatar: { picture: 'vishnou-lapaix.jpeg', fullname: 'Vishnou Lapaix', title: 'Unemployed Militant'},
            amount: '$658.42',
            status: 'expired',
            date: '01/07/2022',
            hasAction: false,
        },
        {
            avatar: {},
            amount: '$400.77',
            status: 'approved',
            date: '12/23/2021',
            hasAction: true,
        },
    ]
}

export default tableData