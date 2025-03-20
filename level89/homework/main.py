

# #<> exercise N1

# def my_func(str, num):
#     string = slice(num)
#     return str[string]

# print(my_func("Hello", 2))


#<> exercise N2

user_text = str(input("Enter Text here: "))
def text_reverser(text):
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


print(text_reverser(user_text))