import { redirect } from "@sveltejs/kit";

export const load = ({cookies, url}) => {

    //redirect back to login when there is no logged in user
    if(!cookies.get("username")){
        throw redirect(307, '/auth?redirectTo=' + url.pathname);
    }

    const newsAPIKey = 'YOUR_NEWS_API_KEY';
    console.log(newsAPIKey);

    const news = [
        {id:1, title: 'News 1'},
        {id:2, title: 'News 2'},
        {id:3, title: 'News 3'}
    ];

    return {news};
};