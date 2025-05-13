def find_outlier(integers):
    evens = []
    odds = []
    
    
    for num in integers:
        if num % 2 == 0:
            evens.append(num)
        else:
            odds.append(num)
    
    
    if len(evens) == 1:
        return evens[0]
    else:
        return odds[0]