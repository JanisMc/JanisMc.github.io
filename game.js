let s1 = "1";
let s2 = "2";
let s3 = "3";
let s4 = "4";
let s5 = "5";
let s6 = "6";
let s7 = "7";
let s8 = "8";
let s9 = "9";

const start = () => {
    let currentPlayer = "x"
    while (true) {
        let input = prompt(`${currentPlayer} Please select a position (1 -9)\n${display()}`);
        if (input == null) break
        switch (input) {
            case "1": 
            s1 = currentPlayer
            break   
            case "2": 
            s2 = currentPlayer
            break
            case "3": 
            s3 = currentPlayer
            break
            case "4": 
            s4 = currentPlayer
            break
            case "5": 
            s5 = currentPlayer
            break
            case "6": 
            s6 = currentPlayer
            break
            case "7": 
            s7 = currentPlayer
            break
            case "8": 
            s8 = currentPlayer
            break
            case "9": 
            s9 = currentPlayer
            break
        }      
        if (checkWin()) {
            alert(`${currentPlayer} is the winner!!`)
            reset ()            
            return
        }
        if(checkDraw()) {
            alert(`Global Thermonuclear War nobody wins!!`)
            reset ()    
            return
        }
        if (currentPlayer == "o") {
             currentPlayer = "x"
        }
        else {
            currentPlayer = "o"
        }
    }
}

const display = () => {
    let line1 = ` ${s1} | ${s2} | ${s3} `;
    let line2 = `-------`;
    let line3 = ` ${s4} | ${s5} | ${s6} `;
    let line4 = `-------`;
    let line5 = ` ${s7} | ${s8} | ${s9} `;
    return `${line1}\n${line2}\n${line3}\n${line4}\n${line5}`;
}

const checkDraw = () => {
    if (parseInt (s1) || parseInt (s2) || parseInt (s3) ||parseInt (s4) || parseInt (s5)  || parseInt (s6) || parseInt (s7) || parseInt (s8)  || parseInt (s9)){
    return false
    }
    return true
}
const checkWin = () => {
    if (s1 == s2 && s2 == s3){
        return true
    }
    else if (s4 == s5 && s5 == s6){
        return true
    }
    else if (s7 == s8 && s8 == s9){
        return true
    }
    else if (s1 == s4 && s4 == s7) {
        return true
    }
    else if (s2 == s5 && s5 == s8){
        return true
    }
    else if (s3 == s6 && s6 ==s9){
        return true
    }
    else if (s1 == s5 && s5 == s9){
        return true
    }
    else if (s3 == s5 && s5 == s7){
        return true
    }
   
}     

const reset = () => {
    s1 = "1";
    s2 = "2";
    s3 = "3";
    s4 = "4";
    s5 = "5";
    s6 = "6";
    s7 = "7";
    s8 = "8";
    s9 = "9";
}
