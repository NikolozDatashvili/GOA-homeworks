def process_list(numbers):
    new_list = []
    for number in numbers:
        if number % 2 == 0:
            new_list.append(number / 2)
        else:
            new_list.append(number * 2)
    return new_list

# Test cases
print(process_list([12, 5, 1, 24]))  
print(process_list([18, 10, 3, 76]))  
