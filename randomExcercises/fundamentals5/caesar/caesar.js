const caesar = function(str, shift) {
    let result = "";
  if (str.includes("")) {
    str.split("").forEach((ch) => {
      if (ch === ch.toUpperCase()) {
        upperChars(ch);
      } else {
        lowerChars(ch);
      }
      function lowerChars(ch) {
        if (ch.charCodeAt() > 122 || ch.charCodeAt() < 97) {
          result += ch;
        } else {
          result += String.fromCharCode(
            ((ch.charCodeAt() + Math.abs(shift) - 97) % 26) + 97
          );
        }
      }
      function upperChars(ch) {
        if (ch.charCodeAt() > 90 || ch.charCodeAt() < 65) {
          result += ch;
        } else {
          result += String.fromCharCode(
            ((ch.charCodeAt() + Math.abs(shift) - 65) % 26) + 65
          );
        }
      }
    });
  }
  return result;    
}

module.exports = caesar

/**
 * let result = "";
    if(str.includes(",")) {
        str.split(",").forEach(ch => {
            if(ch === ch.toUpperCase()) {
                upperCheck(ch);
            } else {
                lowerCheck(ch);
            }
        });
    } else if (str.includes(" ")) {
        str.split(" ").forEach(ch => {
            if(ch === ch.toUpperCase()) {
                upperCheck(ch);
            } else {
                lowerCheck(ch);                
            }
        });
    } else {
        str.split("").forEach(ch => {
            if(ch === ch.toUpperCase()) {
                upperCheck(ch);
            } else {
                lowerCheck(ch);
            }
        });

        function lowerCheck(ch) {
            if(ch.charCodeAt() > 122 || ch.charCodeAt() < 97) {
                result += ch;
            } else {
                result += String.fromCharCode((ch.charCodeAt() + Math.abs(shift) - 97) % 26 + 97)
            }
        }

        function upperCheck(ch) {
            if(ch.charCodeAt() > 90 || ch.charCodeAt() < 65) {
                result += ch;
            } else {
                result += String.fromCharCode((ch.charCodeAt() + Math.abs(shift) - 65) % 26 + 65);
            }
        }
    }
    return result;
 * 
 * 
 *     if(str.includes(",")) {
        str.split(",").forEach(ch => {
            if(ch === ch.toUpperCase()) {
                upperCheck(ch);
                // if(ch.charCodeAt() > 90 || ch.charCodeAt() < 65) {
                //     result += ch;
                // } else {
                //     result += String.fromCharCode((ch.charCodeAt() + Math.abs(shift) - 65) % 26 + 65);
                // }
            } else {
                lowerCheck(ch);
                // if(ch.charCodeAt() > 122 || ch.charCodeAt() < 97) {
                //     result += ch;
                // } else {
                //     result += String.fromCharCode((ch.charCodeAt() + Math.abs(shift) - 97) % 26 + 97)
                // }
            }
        });
    } else if (str.includes(" ")) {
        str.split(" ").forEach(ch => {
            if(ch === ch.toUpperCase()) {
                upperCheck(ch);
                // if(ch.charCodeAt() > 90 || ch.charCodeAt() < 65) {
                //     result += ch;
                // } else {
                //     result += String.fromCharCode((ch.charCodeAt() + Math.abs(shift) - 65) % 26 + 65);
                // }
            } else {
                lowerCheck(ch);
                // if(ch.charCodeAt() > 122 || ch.charCodeAt() < 97) {
                //     result += ch;
                // } else {
                //     result += String.fromCharCode((ch.charCodeAt() + Math.abs(shift) - 97) % 26 + 97)
                // }
                
            }
        });
    } else {
        str.split("").forEach(ch => {
            if(ch === ch.toUpperCase()) {
                upperCheck(ch);
                // if(ch.charCodeAt() > 90 || ch.charCodeAt() < 65) {
                //     result += ch;
                // } else {
                //     result += String.fromCharCode((ch.charCodeAt() + Math.abs(shift) - 65) % 26 + 65);
                // }
            } else {
                lowerCheck(ch);
                // if(ch.charCodeAt() > 122 || ch.charCodeAt() < 97) {
                //     result += ch;
                // } else {
                //     result += String.fromCharCode((ch.charCodeAt() + Math.abs(shift) - 97) % 26 + 97)
                // }
            }
        });
 * 
 * if(str.includes(",")) {
        // return str.split(",").forEach(ch => (ch.charCode || ch.keyCode)+Math.abs(shift));
        return String.fromCharCode(str.split(",").forEach(ch => ch.charCodeAt()+Math.abs(shift)));
        // return str.split(",").map(ch => (ch.charCode || ch.keyCode)+Math.abs(shift));
        // return String.fromCharCode(str.split(",").map(ch => (ch.charCode || ch.keyCode)+Math.abs(shift)));
    } else if(str.includes(" ")) {
        // return str.split(" ").forEach(ch => (ch.charCode || ch.keyCode)+Math.abs(shift));
        return String.fromCharCode(str.split(" ").forEach(ch => ch.charCodeAt()+Math.abs(shift)));
        // return str.split(" ").map(ch => (ch.charCode || ch.keyCode)+Math.abs(shift));
        // return String.fromCharCode(str.split(" ").map(ch => (ch.charCode || ch.keyCode)+Math.abs(shift)));
    } else {
        // return str.split("").forEach(ch => (ch.charCode || ch.keyCode)+Math.abs(shift));
        return String.fromCharCode(str.split("").forEach(ch => ch.charCodeAt()+Math.abs(shift)));
        // return str.split("").map(ch => (ch.charCode || ch.keyCode)+Math.abs(shift));
        // return String.fromCharCode(str.split("").map(ch => (ch.charCode || ch.keyCode)+Math.abs(shift)));
    }
 */