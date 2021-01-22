export const parseName = s => s.indexOf('/') === -1 
    ? s.substring(0, s.length)
    : s.substring(s.lastIndexOf('/')+1, s.length);

export const log = (message, code) => {
    console.log(message)
    if(code){
        process.exit(code)
    }
}