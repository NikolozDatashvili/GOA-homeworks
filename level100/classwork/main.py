
#<> codewars N1
#// Name on billboard

def billboard(name, price=30):
    total = 0
    for letter in name:
        total += price
    return total