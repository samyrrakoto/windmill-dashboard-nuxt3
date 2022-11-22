export default defineEventHandler((event) =>{
    function redirect(to: string){
        this.$router.push(to)
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