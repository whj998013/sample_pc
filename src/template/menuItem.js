let menuObj = [
    //菜单1
    {
        subMenuName: 'stockMenu',
        iconType: 'md-shirt',
        subMenuText: '样衣库',
        needmange:false,
        //子菜单
        menuItem: [
            {
                name: '/Sample/findSample/',
                text: '找样衣',
                needmange:false,
            },
            {
                name: '/Sample/mySample/',
                text: '我的样衣',   
                needmange:false,             
            },
           
        ]
    },
    //菜单2
    {
        subMenuName: 'mangeMenu',
        iconType: 'ios-list-box',
        subMenuText: '样衣库管理',
        needmange:true,
        menuItem: [
            {
                name: '/samplemange/inOutmange',
                text: '入库管理', 
                needmange:true,
                          
            },
            {
                name: '/samplemange/LendMange',
                text: '借用管理',
                needmange:true,
               
            },
            {
                name: '/samplemange/Setting',
                text: '系统设置',
                needmange:true,
              
            },
        ]
    },
    
];
export default menuObj; 

