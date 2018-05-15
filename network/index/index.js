import api from '../api'
export const API_GET_SWIPER = ''

export function getSwiper(data = {}, fn, method = "GET", header = '') {
    let option = {}
    option.url = API_GET_SWIPER
    option.data = data
    option.fn = fn
    option.method = method
    option.header = header
    api(option, {
        'error_code': '',
        'error_msg': '',
        'data|10': [{
            'id|+1': 1,
            'img': "@image('200x100', '#894FC4','#FFF','png', '!')"
        }]
    })
}
