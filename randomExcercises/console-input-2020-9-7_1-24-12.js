        function capitalize(str) {
            let strArr = str.split(" ");
console.log(strArr);
            strArr.forEach(word => word[0].toUpperCase())
consol.log(strArr);
            return strArr.join(" ");
        }