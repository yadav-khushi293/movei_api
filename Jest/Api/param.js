export const searchParams = (url, params)=>{
    const u=new URL(url);
    console.log(u);
    const param=new URLSearchParams(u.searchParams);
    console.log(param);

    const dataSearch= param.get(params);
    console.log(dataSearch);
    return dataSearch ;
}