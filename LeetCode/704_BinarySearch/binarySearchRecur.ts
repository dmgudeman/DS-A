

function search(nums: number[], target: number): number {
    function _helper(l: number, r:number){
        if (l >= r) {
            if (nums[r] === target) return r
            else return -1
        }
        let pivot = l + Math.floor((r - l)/2)

        if (nums[pivot] === target) return pivot
        else if (target > nums[pivot]) return _helper(pivot + 1, r)
        else return _helper(l, pivot - 1)
    }
    return _helper(0, nums.length - 1)
}