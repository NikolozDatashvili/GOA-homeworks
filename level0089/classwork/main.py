
#<> exercise N1
#<> help bob count letters and digits
def count_letters_and_digits(s):
    count = 0
    for i in range(len(s)):
        if 'A' <= s[i] <= 'Z' or 'a' <= s[i] <= 'z' or '0' <= s[i] <= '9':
            count += 1
    return count

print(count_letters_and_digits('n!!ice!!123'))

print(count_letters_and_digits('de?=?=tttes!!t'))

print()
print()
#<> exercise N2
#<> simple calculator
def calculator(x, y, op):  
    if type(x) != int and type(x) != float:
        return "unknown value"
    if type(y) != int and type(y) != float:
        return "unknown value"
    if op == "+":
        return x + y
    elif op =="-":
        return x - y
    elif op == "*":
        return x * y
    elif op == "/":
        return x / y 
    else:
        return "unknown value"

print(calculator(6, 2, '+'))
print(calculator(6, 2, '-'))
print(calculator(6, "8", '+'))

print()
print()
#<> exercise N3
#<> reverse words

def reverse_words(text):
    new_text = ""
    word = ""
    
    for i in text:
        if i != " ":  
            word = i + word 
        else:
            new_text += word + " "  
            word = ""  
    
    new_text += word 
    return new_text

print(reverse_words('The quick brown fox jumps over the lazy dog.'))