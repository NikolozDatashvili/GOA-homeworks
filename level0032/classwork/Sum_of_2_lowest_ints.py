
def sum_two_lowest(numbers):
   
    if numbers[0] < numbers[1]:
        min1, min2 = numbers[0], numbers[1]
    else:
        min1, min2 = numbers[1], numbers[0]
  
    for num in numbers[2:]:
        if num < min1:
            min2 = min1
            min1 = num
        elif num < min2:
            min2 = num

    return min1 + min2


numbers = [19, 5, 42, 2, 77]
print(sum_two_lowest(numbers))  
