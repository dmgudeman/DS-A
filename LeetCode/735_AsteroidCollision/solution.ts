// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.function asteroidCollision(asteroids: number[]): number[] {

function asteroidCollision(asteroids: number[]): number[] {

    let stack:number[] = [asteroids[0]];

    for( let i = 1; i < asteroids.length; i++) {
        if((asteroids[i] > 0 && stack[stack.length - 1] > 0) || (asteroids[i] < 0 && stack[stack.length -1] < 0)){
            stack.push(asteroids[i])   
        } else  {
            while (stack.length && Math.abs(asteroids[i]) >= Math.abs(stack[stack.length -1])) {
                stack.pop()   
            }
            if( Math.abs(asteroids[i]) > Math.abs(stack[stack.length -1])) stack.push(asteroids[i])

        }
    }

    return stack
};