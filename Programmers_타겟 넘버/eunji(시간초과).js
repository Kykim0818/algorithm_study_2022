function solution(numbers, target) {
    let q=[];
    let count=0;
    
    let sum=0;
    for(let num in numbers){
        sum+=num;
    }
    if(sum<target){
        return 0
    }
    
    q.push({num:numbers[0],index:0});
    q.push({num:-numbers[0],index:0});
    
    while(q.length!==0){
        
        let next=q.shift();
        let nextNum=next.num;
        let nextIndex=next.index;
        
        if(nextIndex===numbers.length-1){
            if(nextNum===target) count++;
            continue;
        }
        q.push({num:nextNum+numbers[nextIndex+1],index:nextIndex+1});
        q.push({num:nextNum-numbers[nextIndex+1],index:nextIndex+1});
             
    }
    return count;
}
