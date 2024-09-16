def high_and_low(numbers):
    num_list = numbers.split()
    
    for i in range(len(num_list)):
        num_list[i] = int(num_list[i])
    
    highest = max(num_list)
    lowest = min(num_list)
    
    return str(highest) + " " + str(lowest)

print(high_and_low("10 20 25 65"))