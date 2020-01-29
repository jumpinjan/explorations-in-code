// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
// https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

export const  getData = async (url)  => {

 return await fetch(url)

}

