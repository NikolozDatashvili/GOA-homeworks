
#<> exercise N1
def get_issuer(number):
    str_num = str(number)
    length = len(str_num)
    first_two = str_num[:2]
    amex = ["34", "37"]
    discover ="6011"
    mastercard = [ "51", "52", "53", "54", "55"]
    visa = "4"
    if first_two in amex and length == 15:
        return "AMEX"
    elif str_num[:4] == discover and length == 16:
        return "Discover"
    elif first_two in mastercard and length == 16:
        return "Mastercard"
    elif str_num[0] == visa and (length == 13 or length == 16):
        return "VISA"
    else:
        return "Unknown"
    
#<> exercise N2
def palindrome_chain_length(n):
    steps = 0
    while str(n) != str(n)[::-1]:
        n += int(str(n)[::-1])
        steps += 1
    return steps