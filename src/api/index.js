import ajax from "./http";

// 登录
export const reqLogin=(param)=>{ajax('/login',param,'post')}