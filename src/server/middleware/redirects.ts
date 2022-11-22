export default defineEventHandler((event) =>{
    function redirect(to: string){
        event.node.res.writeHead(301, { Location: to })
        event.node.res.end()
    }
    switch(event.node.req.url){
        case '/' :
            redirect('/login')
            break;
        case ('/admin' || '/admin/'):
            redirect('/admin/dashboard')
            break;
    }
})