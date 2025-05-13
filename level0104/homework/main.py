
#<> exercise N1 
#// Unique string characters
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
#// Zero Terminated Sum
def largest_sum(string):
    max_sum = 0
    current_sum = 0

    for i in string:
        if i != "0":
            current_sum += int(i)
        else:
            if current_sum > max_sum:
                max_sum = current_sum
            current_sum = 0

    if current_sum > max_sum:
        max_sum = current_sum

    return max_sum


#<> exercise N3 
#// what comes after R?
def comes_after(st, l): 
    result = ""
    st_lower = st.lower()
    letter_lower = l.lower()

    for i in range(len(st) - 1):
        if st_lower[i] == letter_lower:
            next_char = st[i + 1]
            if ('a' <= next_char <= 'z') or ('A' <= next_char <= 'Z'):
                result += next_char

    return result


#<> exercise N4 ???

#<> exercise N5

def decode(message):
    decoded = ""
    for char in message:
        if char.isalpha():
            decoded += chr(ord('a') + (25 - (ord(char) - ord('a'))))
        else:
            decoded += char
    return decoded