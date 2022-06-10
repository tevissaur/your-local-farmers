

class UtilsService { 

getSearchParams(params) {
    const paramsArr = params.split('&').map(param => param.split('='))
    let paramsObj
    for (let param of paramsArr) {
        paramsObj = {
            ...paramsObj,
            [param[0].replace('?', '')]: param[1]
        }
    }
    return paramsObj
}

}
export default new UtilsService();