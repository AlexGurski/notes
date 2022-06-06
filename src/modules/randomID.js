export const randomID = (title) =>{
    const abc = "1234567890-_abcdefghijklmnopqrstuvwxyz";
    let rs = "";
    while (rs.length < 10) {
        rs += abc[Math.floor(Math.random() * abc.length)];
    }
    return rs
  }