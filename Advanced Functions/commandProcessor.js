function solution() {
    // should run different command: append, removeStart, removeEnd, print
    // append(string), removeStart(number), removeEnd(number), print();

    let content = ''; 
    
    return {
        append: function (string) {
            content += string;
        },

        removeStart: function(number) {
            content = content.substring(number);
        },

        removeEnd: function(number) {
            content = content.substring(0, content.length - number);
        },
        
        print: function() {
            console.log(content);
        }
    }
}
let firstZeroTest = solution();
firstZeroTest.append('hello'); 
firstZeroTest.append('again'); 
firstZeroTest.removeStart(3); 
firstZeroTest.removeEnd(4);
firstZeroTest.print();