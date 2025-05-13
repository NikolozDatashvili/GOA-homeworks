
#<> exercise N1
def solve(a,b):
    unique = ""
    for i in a:
        if i not in b:
            unique += i
    for j in b:
        if j not in a:
            unique += j
    return unique
        
#<> exercise N2
def swap_values(args): 
    var = args[0]
    args[0] = args[1]
    args[1] = var


#<> exercise N3
def valid_card(card):
    digits = card.replace(" ", "")
    total = 0
    
    digits = digits[::-1]
    
    for i in range(len(digits)):
        num = int(digits[i])
        
        if i % 2 == 1:
            num *= 2
            if num > 9:
                num -= 9
        total += num
    
    return total % 10 == 0