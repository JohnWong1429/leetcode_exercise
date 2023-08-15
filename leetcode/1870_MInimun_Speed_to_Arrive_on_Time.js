var findPeakElement = (dist,hour) => {
    let start=1;
    let end= Number.MAX_SAFE_INTEGER;
    let mid;
    let sum;
    let result=Number.MAX_SAFE_INTEGER;
    if(dist.length>Math.ceil(hour)) return -1;
    while (start<=end){
        mid = Math.floor((start+end)/2);
        sum = 0;
        for(let i=0;i<dist.length-1;i++){
            sum += Math.ceil(dist[i]/mid);
        }
        sum += dist[dist.length-1]/mid;
        if(sum <= hour) result=Math.min(result,mid);
        if(sum>hour){
            start = mid+1;
        } else {
            end = mid-1;
        }
    }
    return result;
}


//1 to Number.MAX_SAFE_INTEGER


let dist1 = [1,3,2], hour1 = 6;         //1
let dist2 = [1,3,2], hour2 = 2.7;       //3
let dist3= [1,3,2], hour3 = 1.9;        //-1
let dist4= [5135,637,414,4847,2521], hour4 =373;

console.log(findPeakElement(dist1,hour1));
 console.log(findPeakElement(dist2,hour2));
console.log(findPeakElement(dist3,hour3));
console.log(findPeakElement(dist4,hour4));