import del from 'del';
export const cleanDist = () => {
    return del(app.path.clean)
}

// import del from 'del';
// export const reset = () => {
//     return del(app.path.clean)
// }