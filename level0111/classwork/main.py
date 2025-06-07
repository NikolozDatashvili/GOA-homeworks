
#<> exercise N1
def pluralize(word):
    sin = word[-1]        
    doub = word[-2:]      

    if sin == 's' or sin == 'x' or sin == 'z' or doub == 'sh' or doub == 'ch':
        return word + 'es'
    elif sin == 'y' and word[-2] not in 'aeiou':
        return word[:-1] + 'ies'
    else:
        return word + 's'
    
#<> exercise N2

def largest_power(N):
    if N <= 1:
        return -1
    k = 0
    while 3**(k+1) < N:
        k += 1
    return k
