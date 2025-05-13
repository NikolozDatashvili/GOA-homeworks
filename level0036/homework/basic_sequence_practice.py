def sum_of_n(n):
    lst = []
    count = 0
    for i in range(abs(n) + 1):
        if n < 0:
            lst.append(-sum(range(i +1)))
        else:
            lst.append(sum(range(i + 1)))
    
    return lst
print(sum_of_n(10))