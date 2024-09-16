def mean(lst):
    count = 0
    sum = 0
    string = ""
    for i in lst:
        if i.isdigit(): # <> Check if i is a digit (string representing an integer)
            sum += int(i) # // Convert to integer and add to sum
            count += 1  # - Keep track of how many numbers
            
        else:
            string += i # / Concatenate character to the string
    mean = sum / count # >< Calculate the mean of the integers
    
    return [mean, string]
lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']
result = mean(lst)
print(result)