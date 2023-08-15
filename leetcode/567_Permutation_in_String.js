var checkInclusion = function(s1, s2) {
    let windowSize = s1.length;
    let start=0;
    let sub;
    let temp;

    while(start<=s2.length-windowSize){
        sub = s2.slice(start,start+windowSize);
        console.log('1---'+sub);
        for(let i=0;i<s1.length;i++){
            temp = sub;
            sub = sub.replace(s1[i],'');
            console.log('temp---'+temp.length);
            console.log('sub---'+sub.length);
            if(temp.length == sub.length) {
                break;
            }
            console.log('loop---'+sub);
        }
        if(sub.trim() == '') return true;
        start++;
    }
    return false;
};

console.log(checkInclusion('ab','eidbaooo'));