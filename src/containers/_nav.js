import  store from '../store.js'
export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',
        
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['States']
      } ,
        
      {
        _name: 'CSidebarNavDropdown',
        name: 'States',
        route: '/state',
        icon: 'cil-puzzle',
        items: store.getters.GET_STATE_NAV

      },

      
   
     /* {
        _name: 'CSidebarNavItem',
        name: 'Typography',
        to: '/theme/typography',
        icon: 'cil-pencil'
      },*/
      {
        _name: 'CSidebarNavTitle',
        _children: ['Links']
      },
    


      {
        _name: 'CSidebarNavDropdown',
        name: 'About us',
        route: '/dev',
        icon: 'cil-puzzle',
        items: [
          {
            name: 'Blog',
            href:'https://developermblog.wordpress.com'
          },
          // {
          //   name: 'Cards',
          //   to: '/base/cards'
          // },
        ]
      },
        
      
      
      
    ]
  }
]