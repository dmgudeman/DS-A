

# def find_peak_element(nums)
#     left = 0
#     right = nums.length - 1
  
#     while left < right
#       mid = left + ((right - left) / 2).floor
#       if nums[mid] < nums[mid + 1]
#         left = mid + 1
#       else
#         right = mid
#       end
#     end
  
#     left
#   end

    def _helper(left,right, nums)
        mid = left + (right - left) / 2
        if left == right
            return left
        end

        if nums[mid] < nums[mid + 1]
            _helper(mid+1, right, nums) 
        else
            _helper(left, mid, nums)
        end
            
    end


  def find_peak_element(nums)
    left = 0
    right = nums.length - 1
    
  
    _helper(left, right, nums)
    
  end